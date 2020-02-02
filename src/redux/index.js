import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export function increment() {
  return (dispatch, getState) => {
    const state = getState();
    if (state % 2 === 0) {
      dispatch({ type: "INCREMENT" });
    } else {
      setTimeout(() => {
        dispatch({ type: "INCREMENT" });
      }, 3000);
    }
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

function countReducer(count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}

const store = createStore(countReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
