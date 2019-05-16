import { takeEvery, call, put } from 'redux-saga/effects'
import GameApp from '../../core/game/GameApp'
import { addTodo, ActionTypes, deleteTodo } from './actions'
const getAllTodo = async () => GameApp.fetch.get('/all')

const postAddTodo = async payload =>
  GameApp.fetch.post('/add', {
    message: payload,
  })

const postDeleteTodo = async payload =>
  GameApp.fetch.post('/delete', {
    id: payload,
  })

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
function* watchRequestTodo() {
  yield takeEvery(ActionTypes.getTodoRequest, getTodos)
  yield takeEvery(ActionTypes.addTodoRequest, addTodos)
  yield takeEvery(ActionTypes.deleteTodoRequest, deleteTodos)
}


export default function* rootSaga() {
  yield* [watchRequestTodo()]
}
