import { createStore } from 'redux';
import ReducerItems from './reducer_items';

//because the state will change, use let.
let store = createStore(ReducerItems);

console.log(ReducerItems);
console.log(store);
