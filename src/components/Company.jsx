import React from "react";
import { useSelector } from "react-redux";
import { checkDateTimeRange, getCommonValues, groupByDay } from "../helpers";
import {
  CompanyContainer,
  DayContainer,
  ReservationContainer,
  Title,
} from "../styles";
import { Reservation } from "./Reservation";
import { TimeSlot } from "./TimeSlot";

export const Company = ({ name, timeslots, companyId }) => {
  // select pieces of state from global store
  const state = useSelector((state) => state);
  const reservations = state.map((compState) => compState.timeslot);
  const companyState = state.find((item) => item.id === companyId);
  const bookedTimeslot = companyState.timeslot;

  // find days to group by
  const days = getCommonValues(timeslots);
  const groupedByDay = days.map((day) => groupByDay(timeslots, day));

  return (
    <div style={{ margin: "0 auto" }}>
      <Title>{name}</Title>
      {bookedTimeslot ? (
        <Reservation companyId={companyId} bookedTimeslot={bookedTimeslot} />
      ) : (
        <ReservationContainer>No Reservation</ReservationContainer>
      )}
      <CompanyContainer>
        {groupedByDay?.map((day) => (
          <DayContainer key={day}>
            <p>{day[0].start_time.slice(0, 10)}</p>
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
