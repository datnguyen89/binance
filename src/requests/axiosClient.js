import axios from 'axios'
import config from '../config'
import queryString from 'query-string'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { accessTokenState } from '../recoil/authState'
import { appLoadingState } from '../recoil/commonState'

const axiosClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
})
axiosClient.interceptors.request.use(async (config) => {
  const appLoading = getRecoil(appLoadingState)
  if (!config.disabledLoading) {
    setRecoil(appLoadingState, appLoading + 1)
  }
  config.headers.common['Authorization'] = getRecoil(accessTokenState)
  return config
})
axiosClient.interceptors.response.use(
  (response) => {
    const appLoading = getRecoil(appLoadingState)
    if (!response.config.disabledLoading) {
      setRecoil(appLoadingState, appLoading - 1)
    }
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    const appLoading = getRecoil(appLoadingState)
    if (!error.config.disabledLoading) {
      setRecoil(appLoadingState, appLoading - 1)
    }
    return Promise.reject(error)
  })
export default axiosClient