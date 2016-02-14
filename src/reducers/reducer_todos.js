
//save string values to vars
const ADD_TODO = 'ADD_TODO';
const UPDATE_TEXT = 'UPDATE_TEXT';
const REMOVE_TODO = 'REMOVE_TODO';

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
//action that updates input text
export const UpdateText = (text) => {
  return {
    type: UPDATE_TEXT,
    text
  };
}

// export const RemoveToDo = (id) => {
//   return {
//     type: REMOVE_TODO,
//     id
//   };
// }

//initial state of items and text
const initialState = {
  items: [],
  text: ''
}
//A pure function that takes the current/prev state
//and an action, and returns the next state
//Reducer controls the state, and is where state lives.
export const ToDoState = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      state = dotProp.set(state, 'items', items => [...items, { text: action.text, id: action.id }]);
      console.log(state, action);
      return state;
    case UPDATE_TEXT:
      state.UpdateText = action.text;
      return state;
  default:
    return state;
  }
}
