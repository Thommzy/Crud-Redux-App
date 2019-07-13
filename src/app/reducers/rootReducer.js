import { combineReducers } from "redux";
import TestReducer from "../../Features/TestArea/testReducer";
import eventReducers from "../../Features/Event/eventReducers";

const rootReducer = combineReducers({
  test: TestReducer,
  events: eventReducers
});

export default rootReducer;
