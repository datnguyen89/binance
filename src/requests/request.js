import axiosClient from './axiosClient'

const request = {
  get: (url, params, disabledLoading, disabledEncrypted) => {
    return axiosClient({
      url: url,
      method: 'get',
      params: params,
      disabledLoading: disabledLoading,
      disabledEncrypted: disabledEncrypted,
    })
  },
  post: (url, data, disabledLoading, disabledEncrypted) => {
    return axiosClient({
      url: url,
      method: 'post',
      data: data,
      disabledLoading: disabledLoading,
      disabledEncrypted: disabledEncrypted,
    })
  },
}
export default request