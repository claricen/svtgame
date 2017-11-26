function changeConfidant(state, confidant) {
  return {...state, confidant};
}

function setState(state, newState) {
  console.log(state);
  return {...state, newState};
}

export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'CHANGE_CONFIDANT':
      return changeConfidant(state, action.confidant);
  }
  return state;
}