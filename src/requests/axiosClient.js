import axios from 'axios'
import config from '../config'
import history from '../customRouter/history'
import { notification } from 'antd'
import queryString from 'query-string'
import { deviceDetect } from 'react-device-detect'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { accessTokenState, refreshTokenState } from '../recoil/authState'
import { appLoadingState } from '../recoil/commonState'
import stringUtils from '../utils/stringUtils'
import cypherUtil from '../utils/cypherUtil'
import authStore from '../stores/authStore'
import { PAGES } from '../constant'

const getUniqueId = () => {
  let uniqueId = localStorage.getItem('uniqueId')
  if (uniqueId) {
    return uniqueId
  } else {
    let newUniqueId = stringUtils.randomId(16)
    localStorage.setItem('uniqueId', newUniqueId)
    return newUniqueId
  }

}
let isRefreshing = false
let failedQueue = []
const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })
  failedQueue = []
}
const handleEncrypted = (request) => {
  let k = stringUtils.randomId(16)
  let obj = { key: k, iv: k }
  let strDataKey = JSON.stringify(obj)
  let strData = JSON.stringify({ ...request.data })
  let encryptedDataKey = cypherUtil.rsaEncrypt(strDataKey)
  let encryptedData = cypherUtil.aesEncrypt(strData, k, k)
  return { encryptedDataKey, encryptedData }
}
const handleRefreshTokenFail = () => {
  notification.error({
    message: 'Cảnh báo',
    description: 'Phiên đăng nhập hết hạn',
  })
  history.push(PAGES.LOGIN)
}
const axiosClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
})
axiosClient.interceptors.request.use(
  request => {
    // region Headers
    request.headers['Authorization'] = `Bearer ${getRecoil(accessTokenState)}`
    request.headers['Ip-Address'] = ``
    request.headers['Device'] = JSON.stringify({
      'DeviceId': deviceDetect()?.userAgent,
      'DeviceType': 13,
      'SystemName': deviceDetect()?.osName,
      'SystemVersion': deviceDetect()?.osVersion,
      'uniqueId': getUniqueId(),
      'DeviceName': deviceDetect()?.browserName,
    })
    // endregion
    // region Loading
    const appLoading = getRecoil(appLoadingState)
    if (!request.disabledLoading) {
      setRecoil(appLoadingState, appLoading + 1)
    }
    // endregion
    // region Retry
    // console.log('originalRequest._retry ', request.url, request._retry)
    if (request._retry) {
      // console.log('Nếu là retry sau khi refresh token thì cho đi luôn vì đã mã hóa rồi')
      return request
    }
    // endregion
    console.log('REQUEST', request.url.replace(config.apiUrl, ''), request.data)
    // region Encrypted
    const encryptedObj = handleEncrypted(request)
    if (!request.disabledEncrypted) {
      request.data = { data: encryptedObj.encryptedData, objKey: encryptedObj.encryptedDataKey }
    }
    // endregion
    return request
  },
  error => {
    // region Loading
    const appLoading = getRecoil(appLoadingState)
    if (!error.config.disabledLoading) {
      setRecoil(appLoadingState, appLoading - 1)
    }
    // endregion
    return Promise.reject(error)
  },
)
axiosClient.interceptors.response.use(
  (response) => {
    // region Loading
    const appLoading = getRecoil(appLoadingState)
    if (!response.config.disabledLoading) {
      setRecoil(appLoadingState, appLoading - 1)
    }
    // endregion

    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    const originalRequest = error.config
    // region Loading
    const appLoading = getRecoil(appLoadingState)
    if (!originalRequest.disabledLoading) {
      setRecoil(appLoadingState, appLoading - 1)
    }
    // endregion
    if (error instanceof axios.Cancel) {

    } else {
      switch (error?.response?.status) {
        case 401:
          if (!originalRequest._retry) {
            try {
              if (isRefreshing) {
                originalRequest._retry = true
                return new Promise(function(resolve, reject) {
                  failedQueue.push({ resolve, reject })
                })
                  .then(token => {
                    originalRequest.headers['Authorization'] = 'Bearer ' + token
                    return axiosClient(originalRequest)
                  })
                  .catch(err => {
                    return Promise.reject()
                  })
              }
              originalRequest._retry = true
              isRefreshing = true

              return new Promise((resolve, reject) => {
                authStore.refreshToken({ RefreshToken: getRecoil(refreshTokenState) })
                  .then((res) => {
                    if (res?.responseCode === 0) {
                      setRecoil(accessTokenState, res?.param)
                      processQueue(null, res?.param)
                      resolve(axiosClient(originalRequest))
                    } else {
                      handleRefreshTokenFail()
                    }
                  })
                  .catch(error => {
                    processQueue(error, null)
                    reject(error)
                  })
                  .finally(() => {
                    isRefreshing = false
                  })
              })
            } catch (error) {
              handleRefreshTokenFail()
              return Promise.reject(error)
            }
          } else {
            handleRefreshTokenFail()
          }
          break
        default:
          notification.error({
            message: 'Cảnh báo',
            description: error?.message,
          })
          break
      }
    }
    return Promise.reject(error)
  })
export default axiosClient