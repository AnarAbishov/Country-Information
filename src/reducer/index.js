import {combineReducers} from "redux";
import countryReducer from "./countryReducer";
import getCountryReducer from "./getCountryReducer";




export default combineReducers({
    countryReducer,
    getCountryReducer
})