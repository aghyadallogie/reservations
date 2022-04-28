import React from "react";
import { useDispatch } from "react-redux";
import { formatDateTime } from "../helpers";
import { cancelReservationAction } from "../store/actions";
import { DeleteIcon, ReservationContainer } from "../styles";

export const Reservation = ({ bookedTimeslot, companyId }) => {
  const dispatch = useDispatch();
  return (
    <ReservationContainer>
      <div>
        <span>
          {formatDateTime(bookedTimeslot.start_time).slice(0, 10)}
          <br />
        </span>
        <span>
          {formatDateTime(bookedTimeslot.start_time).slice(10)}
          <i className="angle double right icon"></i>
          {formatDateTime(bookedTimeslot.end_time).slice(10)}
        </span>
      </div>
      <DeleteIcon
        onClick={() => dispatch(cancelReservationAction(companyId))}
        className="trash icon"
      ></DeleteIcon>
    </ReservationContainer>
  );
};
