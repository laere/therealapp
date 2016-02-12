//A pure function that takes the current/prev state
//and an action, and returns the next state
//Reducer controls the state, and is where state lives.
export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return [...state, {text: action.text }];
  default:
    return state;
  }
}
