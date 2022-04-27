import { CANCEL_RESERVATION, RESERVE_TIMESLOT } from "..";

const initialState = [
  { id: 1, timeslot: null },
  { id: 2, timeslot: null },
  { id: 3, timeslot: null },
];

export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_TIMESLOT:
      return [
        ...state.filter((item) => item.id !== action.payload.companyId),
        {
          ...state.find((item) => item.id === action.payload.companyId),
          timeslot: action.payload.timeslot,
        },
      ];
    case CANCEL_RESERVATION:
      return [
        ...state.filter((item) => item.id !== action.payload),
        {
          ...state.find((item) => item.id === action.payload),
          timeslot: null,
        },
      ];

    default:
      return state;
  }
};
