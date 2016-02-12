//the action is whats performed to alter state
export function addToDo(text) {
  //addItem is an action creator and nees to return an action
  //an object with a type property
  return {
    type: 'ADD_TODO',
    text
  };
}
