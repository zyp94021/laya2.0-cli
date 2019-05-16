import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
import { state } from './state'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)
const store = createStore(reducers, state as any, enhancer)
sagaMiddleware.run(rootSaga)
export default store
