
import dotProp from 'dot-prop-immutable';
import axios from 'axios';

//location of the todos API
const API = 'http://localhost:3000/todo/';
//save string values to vars
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const POST_TODO = 'POST_TODO';
const FETCH_TODOS = 'FETCH_TODOS';

let nextId = 0;
let index = 0;

//addItem is an action creator and needs to return an action
//actions are plain javascript objects
export const AddTodo = (text) => {

  const post = axios.post(API, { text });
  //logging purposes
  post.then(function(response) {
    if(response)
      return console.log(response);
  }, function(err) {
    if(err)
      return console.log('Error posting data...');
  });

    return {
      type: ADD_TODO,
      id: nextId++,
      payload: text
    }
}

export const RemoveTodo = (id) => {
  const remove = axios.delete(API + id);
  return {
    type: REMOVE_TODO,
    id
  };
}
//grab todos on load
export const FetchTodos = () => {
  const req = axios.get(API);
  return {
    type: FETCH_TODOS,
    payload: req
  };
}

const initialState = {
  items: [],
}

//A pure function that takes the current/prev state
//and an action, and returns the next state
//Reducer controls the state, and is where state lives.
export const TodoState = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      state = dotProp.set(state, 'items', items => [...items, { text: action.payload }])
      console.log(state, action);
      return state;
    case REMOVE_TODO:
      state = dotProp.delete(state, `items.${index}`);
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
