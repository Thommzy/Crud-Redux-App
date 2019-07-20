import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import TestReducer from "../../Features/TestArea/testReducer";
import eventReducers from "../../Features/Event/eventReducers";

const rootReducer = combineReducers({
  form: FormReducer,
  test: TestReducer,
  events: eventReducers
});

export default rootReducer;
