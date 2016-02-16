import dotProp from 'dot-prop-immutable';
//save string values to vars
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const GET_TODO = 'GET_TODO';
const POST_TODO = 'POST_TODO';

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

export const GetTodos = (item) => {
  return {
    type: GET_TODO,
    item
  }
}

export const PostTodo = (item) => {
  return {
    type: POST_TODO,
    item
  }
}
//initial state of items and text
const initialState = {
  items: [],
}
//A pure function that takes the current/prev state
//and an action, and returns the next state
//Reducer controls the state, and is where state lives.
export const ToDoState = (state = initialState, action) => {
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
    case POST_TODO:
      return state;
    case GET_TODO:
      return state;
  default:
    return state;
  }
}
