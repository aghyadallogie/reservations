import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reservationReducer } from "./reducers";

export const RESERVE_TIMESLOT = "RESERVE_TIMESLOT";
export const CANCEL_RESERVATION = "CANCEL_RESERVATION";

export const myStore = createStore(reservationReducer, composeWithDevTools());
