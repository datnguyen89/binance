import axiosClient from './axiosClient'

const request = {
  get: (url, params, disabledLoading) => {
    return axiosClient({
      url: url,
      method: 'get',
      params: params,
      disabledLoading: disabledLoading,
    })
  },
  post: (url, data, disabledLoading) => {
    return axiosClient({
      url: url,
      method: 'get',
      data: data,
      disabledLoading: disabledLoading,
    })
  },
}
export default request