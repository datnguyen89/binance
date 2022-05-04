import { atom, selector } from 'recoil'
import dateUtils from '../utils/dateUtils'
import moment from 'moment'
import request from '../requests/request'
import testStore from '../stores/testStore'

export const filterExecutionTypeState = atom({
  key: 'filterExecutionTypeState',
  default: {
    Status: null,
    CreatedFrom: dateUtils.convertToMillisecondsStartOfDay(moment().add(-30, 'days')),
    CreatedTo: dateUtils.convertToMillisecondsEndOfDay(moment()),
    Keyword: '',
    DeptID: 'E0200456505.BGD',
  },
})
export const listExecutionTypeState = atom({
  key: 'listExecutionTypeState',
  default: null,
})
export const listExecutionTypeStateFiltered = selector({
  key: 'listExecutionTypeStateFiltered',
  get: ({get}) => {
    const list = get(listExecutionTypeState)
    const listNumberOfExecutionZero = list && list.filter(item => item.NumberOfExecution === 0)
    const listNumberOfExecutionAvailable = list && list.filter(item => item.NumberOfExecution !== 0)
    return {
      listNumberOfExecutionZero,
      listNumberOfExecutionAvailable
    }
  }
})