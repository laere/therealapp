//create store
import { createStore } from 'redux';
//save string values to vars
const ADD_TODO = 'ADD_TODO';
const UPDATE_TEXT = 'UPDATE_TEXT';

//the action is whats performed to alter state
function AddToDo(text) {
  //addItem is an action creator and nees to return an action
  //an object with a type property
  return {
    type: ADD_TODO,
    text
  };
}
//action that updates input text
function UpdateText(text) {
  return {
    text
  };
}

//export actions
export const actions = {
  AddToDo: AddToDo,
  UpdateText: UpdateText
}

//initial state of items and text
const initialState = {
  items: [],
  text: ''
}
//A pure function that takes the current/prev state
//and an action, and returns the next state
//Reducer controls the state, and is where state lives.
//Adds a new to do item
//state is initialstate
export function ToDoState(state = initialState, action) {
  //looks at the action type
  //returns current state plus the new state
  switch(action.type) {
    case ADD_TODO:
      //if add_todo action update stat.items with item text
      state.items = state.items.concat({text: action.text});
      return state;
  //returns state by default
    case UPDATE_TEXT:
      state.UpdateText = action.text;
      return state;
  default:
    return state;
  }
}

let store = createStore(ToDoState);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
//logging initial state.
console.log(store);
//dispatching to do items.
// store.dispatch(AddToDo('Learning redux'));
// store.dispatch(AddToDo('this is fucking hard!!!'));

//stop listening for updates
unsubscribe();
