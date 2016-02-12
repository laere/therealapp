//create store
import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const UPDATE_TEXT = 'UPDATE_TEXT';

//the action is whats performed to alter state
function addToDo(text) {
  //addItem is an action creator and nees to return an action
  //an object with a type property
  return {
    type: ADD_TODO,
    text
  };
}

function updateText(text) {
  return {
    text
  };
}

//export actions
export const actions = {
  addToDo: addToDo,
  updateText: updateText
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
function toDo_App(state = initialState, action) {
  //looks at the action type
  //returns current state plus the new state
  switch(action.type) {
    case ADD_TODO:
      //if add_todo action update stat.items with item text
      state.items = state.items.concat({text: action.text});
      return state;
  //returns state by default
    case UPDATE_TEXT:
      state.updateText = action.text;
      return state;
  default:
    return state;
  }
}

let store = createStore(toDo_App);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
//logging initial state.
console.log(store);
//dispatching to do items.
store.dispatch(addToDo('Learning redux'));
store.dispatch(addToDo('this is fucking hard!!!'));

//stop listening for updates
unsubscribe();
