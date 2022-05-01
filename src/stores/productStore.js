import request from '../requests/request'

const productStore = {
  getAll: params => {
    return new Promise((resolve, reject) => {
      const url = '/todos/1'
      request.get(url, params, false)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getAll1: params => {
    return new Promise((resolve, reject) => {
      const url = '/todos/2'
      request.get(url, params, true)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getAll2: params => {
    return new Promise((resolve, reject) => {
      const url = '/todos/3'
      request.get(url, params, false)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}
export default productStore