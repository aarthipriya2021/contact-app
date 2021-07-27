import { createStore } from "redux";
import contactReducer from "./contactReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(contactReducer, composeWithDevTools())

export default store;