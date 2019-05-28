import { ACTIONTYPE, ActionTypes } from './actions'
import { combineReducers, AnyAction } from 'redux'
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
const login = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.loginSuccess:
      return true
    case ActionTypes.loginFail:
      return false
    default:
      return state
  }
}
const changeTestData1 = (state, action) => {
  return state
}
export const todo = (state: any[] = [], action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.addTodo:
      return action.payload.length > 1 ? [...action.payload] : [...state, ...action.payload]
    case ActionTypes.deleteTodo:
      return [...state.filter(item => item.id !== action.payload)]
    default:
      return state
  }
}
const reducers = combineReducers({ testData: changeTestData, user: changeUsername, token: changeToken, todo, login })
export default reducers
