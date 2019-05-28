import { state } from './state'
export enum ACTIONTYPE {
  CHANGE_TESTDATA1 = 1,
  CHANGE_TESTDATA2,
  CHANGE_USERNAME,
  CHANGE_TOKEN,
}
export const ActionTypes = {
  loginRequest: 'loginRequest',
  loginSuccess: 'loginSuccess',
  loginFail: 'loginFail',
  getTodoRequest: 'getTodoRequest',
  addTodoRequest: 'addTodoRequest',
  addTodo: 'addTodo',
  deleteTodo: 'deleteTodo',
  deleteTodoRequest: 'deleteTodoRequest',
  registerRequest: 'registerRequest',
}
export const changeData1 = data1 => {
  return {
    type: ACTIONTYPE.CHANGE_TESTDATA1,
    testData: { ...state.testData, data1 },
  }
}
export const changeData2 = data2 => {
  return {
    type: ACTIONTYPE.CHANGE_TESTDATA2,
    testData: { ...state.testData, data2 },
  }
}
export const changeUsername = name => {
  return {
    type: ACTIONTYPE.CHANGE_USERNAME,
    user: { name },
  }
}
export const changeToken = token => {
  return {
    type: ACTIONTYPE.CHANGE_TOKEN,
    token,
  }
}

export const actionRequest = (type, payload?) => ({
  type,
  payload,
})
export const addTodo = payload => ({
  type: ActionTypes.addTodo,
  payload,
})
export const deleteTodo = payload => ({
  type: ActionTypes.deleteTodo,
  payload,
})
