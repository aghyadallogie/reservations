import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkDateTimeRange,
  formatDateTime,
  getCommonValues,
  groupBy,
} from "../helpers";
import { cancelReservationAction } from "../store/actions";
import {
  CompanyContainer,
  DayContainer,
  DeleteIcon,
  Reservation,
  Title,
} from "../styles";
import { TimeSlot } from "./TimeSlot";

export const Company = ({ name, timeslots, companyId }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const reservations = state.map((compState) => compState.timeslot);
  const companyState = state.find((item) => item.id === companyId);
  const bookedTimeslot = companyState.timeslot;

  const days = getCommonValues(timeslots);
  const groupedByDay = days.map((day) => groupBy(timeslots, day));

  return (
    <div style={{ margin: "0 auto" }}>
      <Title>{name}</Title>
      {bookedTimeslot ? (
        <div>
          <Reservation>
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
          </Reservation>
        </div>
      ) : (
        <Reservation>No Reservation</Reservation>
      )}
      <CompanyContainer>
        {groupedByDay?.map((day) => (
          <DayContainer key={day}>
            {day.map((ts) => (
              <TimeSlot
                key={ts.start_time}
                timeslot={ts}
                companyId={companyId}
                bookedTimeslot={bookedTimeslot}
                booked={reservations.find((item) =>
                  checkDateTimeRange(item, ts)
                )}
              />
            ))}
          </DayContainer>
        ))}
      </CompanyContainer>
    </div>
  );
};
