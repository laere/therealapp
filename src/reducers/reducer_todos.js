import dotProp from 'dot-prop-immutable';
//save string values to vars
const ADD_TODO = 'ADD_TODO';

let nextId = 0;
//the action is whats performed to alter state
//addItem is an action creator and nees to return an action
export const AddTodo = (text) =>  {
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  };
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
      state = dotProp.set(state, 'items', items => [...items, {text: action.text, id: action.id }])
      console.log(state, action);
      return state;
  default:
    return state;
  }
}
