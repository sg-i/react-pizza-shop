import { createStore } from 'redux';
import rootReducer from './reducers';
// const initialize = {
//   value: 0,
//   name: 'pizza',
// };

// const counterReducer = (state = initialize, action) => {
//   if (action.type === 'SET_INC') {
//     return { value: state.value + 1, name: action.payload };
//   }
//   return state;
// };

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => console.log(store.getState()));

export default store;
