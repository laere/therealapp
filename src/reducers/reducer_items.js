
//the action is whats performed to alter state
export function addToDo(text) {
  //addItem is an action creator and nees to return an action
  //an object with a type property
  return {
    type: 'ADD_TODO',
    text
  };
}

//A pure function that takes the current/prev state
//and an action, and returns the next state
//Reducer controls the state, and is where state lives.

//Adds a new to do item
export default function(state = [], action) {
  //looks at the action type
  //returns current state plus the new state
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text }];
  //returns state by default
  default:
    return state;
  }
}
