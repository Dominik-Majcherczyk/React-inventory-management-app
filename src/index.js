import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ReduxProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
