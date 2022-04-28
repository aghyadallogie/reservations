import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkDateTimeRange, formatDateTime } from "../helpers";
import { reserveTimeSlotAction } from "../store/actions";
import { TimeSlotContainer } from "../styles";

export const TimeSlot = ({ timeslot, companyId, bookedTimeslot, booked }) => {
  const { start_time, end_time } = timeslot;

  const state = useSelector((state) => state);
  const reservations = state.map((compState) => compState.timeslot);

  const dispatch = useDispatch();

  // prevent selection of overlaping time slots
  const makeReservation = () => {
    if (reservations.find((item) => checkDateTimeRange(item, timeslot))) {
      alert("Unavailable Time Slot!");
    } else {
      dispatch(reserveTimeSlotAction({ companyId, timeslot }));
    }
  };

  return (
    <TimeSlotContainer
      onClick={makeReservation}
      bg={booked ? "gray" : ""}
      borders={bookedTimeslot === timeslot ? "2px solid whitesmoke" : ""}
    >
      <p>
        {formatDateTime(start_time).slice(10)}
        <i className="angle double right icon"></i>
        {formatDateTime(end_time).slice(10)}
      </p>
    </TimeSlotContainer>
  );
};
