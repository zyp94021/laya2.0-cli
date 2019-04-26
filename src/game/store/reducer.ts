import { ACTIONTYPE } from './actions'
import { combineReducers } from 'redux'
const changeTestData = (state = { data1: 'data1', data2: 'data2' }, action) => {
  switch (action.type) {
    case ACTIONTYPE.CHANGE_TESTDATA1:
    case ACTIONTYPE.CHANGE_TESTDATA2:
      return { ...action.testData }
    default:
      return state
  }
}
const changeUsername = (state = { name: 'nor' }, action) => {
  switch (action.type) {
    case ACTIONTYPE.CHANGE_USERNAME:
      return { ...action.user }
    default:
      return state
  }
}
const changeToken = (state = '', action) => {
  switch (action.type) {
    case ACTIONTYPE.CHANGE_TOKEN:
      return action.token
    default:
      return state
  }
}
const changeTestData1 = (state, action) => {
  return state
}
const reducers = combineReducers({ testData: changeTestData, user: changeUsername, token: changeToken })
export default reducers
