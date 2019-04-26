import { createStore } from 'redux'
import reducers from './reducer'
import { state } from './state'
const store = createStore(reducers, state as any)
export default store
