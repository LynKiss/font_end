import counterReducer from "./counter"
import cartReducer from "./cart";

import { combineReducers } from "redux"
const allReducers = combineReducers({
    counterReducer,
    cartReducer,
})
export default allReducers
