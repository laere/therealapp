import dotProp from 'dot-prop-immutable';
import axios from 'axios';
//save string values to vars
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
// const LOAD_TODO = 'LOAD_TODO';
// const POST_TODO = 'POST_TODO';
// const REQUEST_TODOS = 'REQUEST_TODOS';
const FETCH_TODOS = 'FETCH_TODOS';

let nextId = 0;
let index = 0;
//the action is whats performed to alter state
//addItem is an action creator and nees to return an action
export const AddTodo = (text) =>  {
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  };
}

export const RemoveTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}

// export const RequestTodos = (items) => {
//   return {
//     type: REQUEST_TODOS,
//     items
//   }
// }
//
// export const LoadTodos = (items) => {
//   return {
//     type: LOAD_TODO,
//     res: res.items
//   }
// }
//
// export const PostTodo = (item) => {
//   return {
//     type: POST_TODO,
//     item
//   }
// }

export const FetchData = () => {
  const req = axios.get('http://localhost:3000/todo/');
  return {
    type: FETCH_TODOS,
    payload: req
  }
}

//initial state of items and text
const initialState = {
  items: [],
}
//A pure function that takes the current/prev state
//and an action, and returns the next state
//Reducer controls the state, and is where state lives.
export const TodoState = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      state = dotProp.set(state, 'items', items => [...items, { text: action.text, id: action.id }])
      console.log('This is my state after ADD_TODO : ' + state, action);
      return state;
    case REMOVE_TODO:
      state = dotProp.delete(state, `items.${index}`)
      console.log(index);
      console.log(state, action);
      return state;
    case FETCH_TODOS:
      console.log(action.payload.data);
      const data = action.payload.data;
      state = dotProp.set(state, 'items', data);
      return state;
  default:
    return state;
  }
}
