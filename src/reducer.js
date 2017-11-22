// export default function(state = Map(), action) {
//   switch (action.type) {
//     case 'CHANGE_CHARACTER':
//       return (setState(state, action.state));
//     case 'TOGGLE_COMPLETE':
//       return toggleComplete(state, action.itemId);
//     case 'CHANGE_FILTER':
//       return changeFilter(state, action.filter);
//     case 'EDIT_ITEM':
//       return editItem(state, action.itemId);
//     case 'CANCEL_EDITING':
//       return cancelEditing(state, action.itemId);
//     case 'DONE_EDITING':
//       return doneEditing(state, action.itemId, action.newText);
//     case 'CLEAR_COMPLETED':
//       return clearCompleted(state);
//     case 'ADD_ITEM':
//       return addItem(state, action.text);
//     case 'DELETE_ITEM':
//       return deleteItem(state, action.itemId);
//   }
//   return state;
// }