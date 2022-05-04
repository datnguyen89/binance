import request from '../requests/request'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { filterExecutionTypeState, listExecutionTypeState } from '../recoil/testState'

const testStore = {
  getUserProfile: data => {
    return new Promise((resolve, reject) => {
      const url = '/GetUserProfile'
      request.get(url, data, false, false)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getCommonProperty: data => {
    return new Promise((resolve, reject) => {
      const url = '/GetCommonProperty'
      request.get(url, data, false, false)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getListExecutionTypeGrouped: () => {
    return new Promise((resolve, reject) => {
      const url = '/GetListExecutionTypeGrouped'
      const data = getRecoil(filterExecutionTypeState)
      request.post(url, data, false, false)
        .then(res => {
          setRecoil(listExecutionTypeState, res?.param)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

}
export default testStore