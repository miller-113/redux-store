import { combineReducers } from "redux";

import title from "./title";
import counter from "./counter";

export default combineReducers({
    counter, 
    title
})