import { takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import GameApp from '../../core/game/GameApp'
import { addTodo, ActionTypes, deleteTodo, changeUsername, changeToken } from './actions'
import { store } from './store'
const getAllTodo = async () => GameApp.fetch.get('/all')

const postAddTodo = async payload =>
  GameApp.fetch.post('/add', {
    message: payload,
  })

const postDeleteTodo = async payload =>
  GameApp.fetch.post('/delete', {
    id: payload,
  })
const postLogin = async payload => GameApp.fetch.post('/login', payload)
const postRegister = async payload => GameApp.fetch.post('/register', payload)
function* getTodos() {
  const result = yield call(getAllTodo)
  yield put(addTodo(result.map(item => ({ id: item.id, message: item.message }))))
}
function* addTodos(action) {
  const { id, message } = yield call(postAddTodo, action.payload)
  yield put(addTodo([{ id, message }]))
}
function* deleteTodos(action) {
  const { id } = yield call(postDeleteTodo, action.payload)
  yield put(deleteTodo(id))
}
function* login(action) {
  const result = yield call(postLogin, action.payload)
  console.log(result)
  if (result.code === 200) {
    console.log('login success')
    store.dispatch(changeUsername(result.result.username))
    store.dispatch(changeToken(result.result.token))
    store.dispatch({ type: ActionTypes.loginSuccess })
  } else {
    console.log('login fail')
  }
}

function* register(action) {
  const result = yield call(postRegister, action.payload)
  console.log(result)
}
function* watchRequestTodo() {
  yield takeLatest(ActionTypes.getTodoRequest, getTodos)
  yield takeLatest(ActionTypes.addTodoRequest, addTodos)
  yield takeLatest(ActionTypes.deleteTodoRequest, deleteTodos)
  yield takeLatest(ActionTypes.loginRequest, login)
  yield takeLatest(ActionTypes.registerRequest, register)
}

export default function* rootSaga() {
  yield* [watchRequestTodo()]
}
