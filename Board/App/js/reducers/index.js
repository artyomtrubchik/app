import { combineReducers } from "redux";
import CreateBoardReducer from "./createBoardReducer";

const rootReducer = combineReducers({
    createBoard: CreateBoardReducer,
})

export default rootReducer;