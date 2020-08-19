import React from "react";
import ReactDOM from "react-dom";
import { createStore} from "redux";
import { Provider } from "react-redux";
import Child from './child';


const INTIAL_DATA = {
  city: "NewYork",
  exp: 10.5,
};

function reducer(state = INTIAL_DATA, action) {
  //alert(JSON.stringify(action));
  console.log("reducer");
  if (action.type === "Citychange")
   {
     state.city = action.payload;
      var new_state = { ...state };
      return new_state;
  }
  else 
  {
    return state;
  }
}

const store=createStore(reducer);

const jsx = (
  <Provider store={store}>
    <Child />
  </Provider>
);

ReactDOM.render(
  jsx,
  document.getElementById("root")
);


