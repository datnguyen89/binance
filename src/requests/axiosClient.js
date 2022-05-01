import axios from 'axios'
import config from '../config'
import queryString from 'query-string'
import { deviceDetect } from 'react-device-detect'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { accessTokenState } from '../recoil/authState'
import { appLoadingState } from '../recoil/commonState'
import stringUtils from '../utils/stringUtils'
import cypherUtil from '../utils/cypherUtil'
import authStore from '../stores/authStore'

const getUniqueId = () => {
  let uniqueId = localStorage.getItem('UniqueId')
  if (uniqueId) {
    return uniqueId
  } else {
    let newUniqueId = stringUtils.randomId(16)
    localStorage.setItem('UniqueId', newUniqueId)
    return newUniqueId
  }

}
let isRefreshing = false;
let failedQueue = [];
const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  })

  failedQueue = [];
}
const axiosClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
})
axiosClient.interceptors.request.use(
  config => {
    // region Headers
    config.headers['Authorization'] = `Bearer ${getRecoil(accessTokenState)}`
    config.headers['Ip-Address'] = ``
    config.headers['Device'] = JSON.stringify({
      'DeviceId': deviceDetect()?.userAgent,
      'DeviceType': 13,
      'SystemName': deviceDetect()?.osName,
      'SystemVersion': deviceDetect()?.osVersion,
      'UniqueId': getUniqueId(),
      'DeviceName': deviceDetect()?.browserName,
    })
    // endregion
    // region Loading
    const appLoading = getRecoil(appLoadingState)
    if (!config.disabledLoading) {
      setRecoil(appLoadingState, appLoading + 1)
    }
    // endregion
    // region Retry
    if (config._retry) {
      // Nếu là retry sau khi refresh token thì cho đi luôn vì đã mã hóa rồi
      return config
    }
    // endregion
    console.log('REQUEST', config.url.replace(config.apiUrl, ''), config.data)
    let k = stringUtils.randomId(16)
    let obj = { key: k, iv: k }
    let strDataKey = JSON.stringify(obj)
    let strData = JSON.stringify({ ...config.data })
    let encryptedDataKey = cypherUtil.rsaEncrypt(strDataKey)
    let encryptedData = cypherUtil.aesEncrypt(strData, k, k)

    if (!config.disabledEncrypted) {
      config.data = { data: encryptedData, objKey: encryptedDataKey }
    }
    return config
  },
  error => {
    // region Loading
    const appLoading = getRecoil(appLoadingState)
    if (!config.disabledLoading) {
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
    const originalConfig = error.config
    // region Loading
    const appLoading = getRecoil(appLoadingState)
    if (!originalConfig.disabledLoading) {
      setRecoil(appLoadingState, appLoading - 1)
    }
    // endregion
    if (error instanceof axios.Cancel) {

    } else {
      switch (error?.response?.status) {
        case 401:
          if (!originalConfig._retry) {
            try {
              if (isRefreshing) {
                return new Promise(function(resolve, reject) {
                  failedQueue.push({resolve, reject})
                }).then(token => {
                  originalConfig.headers['Authorization'] = 'Bearer ' + token;
                  return axios(originalConfig);
                }).catch(err => {
                  return Promise.reject(err);
                })
              }

              originalConfig._retry = true;
              isRefreshing = true;

              console.log('Refresh token then retry')
              authStore.refreshToken({RefreshToken: localStorage.getItem('refreshToken')})
                .then((res) => {
                  originalConfig.headers.Authorization = `Bearer ${res?.param}`
                  processQueue(null, res?.param);
                  return axios(originalConfig)
                })
                .finally(() => {
                  isRefreshing = false
                })
            } catch (_error) {
              // show message error
              return Promise.reject(_error)
            }
          } else {
            // handle logout
          }
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  })
export default axiosClient