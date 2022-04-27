import { CANCEL_RESERVATION, RESERVE_TIMESLOT } from "..";

export const reserveTimeSlotAction = (reservation) => {
  return { type: RESERVE_TIMESLOT, payload: reservation };
};

export const cancelReservationAction = (companyId) => ({
  type: CANCEL_RESERVATION,
  payload: companyId,
});
