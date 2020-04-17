import { createStore } from 'redux'
import cakeReduce from './CakeReducer';
const store = createStore(cakeReduce)

export default store