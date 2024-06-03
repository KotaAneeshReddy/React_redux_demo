import { combineReducers } from "redux";
import cakeReducer from "./Cakes/CakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";

export const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer
})