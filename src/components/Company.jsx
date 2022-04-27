import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkDateTimeRange,
  formatDateTime,
  getCommonValues,
  groupBy,
} from "../helpers";
import { cancelReservationAction } from "../store/actions";
import { styles } from "../styles";
import { TimeSlot } from "./TimeSlot";

export const Company = ({ name, timeslots, companyId }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const reservations = state.map((compState) => compState.timeslot);
  const companyState = state.find((item) => item.id === companyId);
  const bts = companyState.timeslot;

  const days = getCommonValues(timeslots);
  const groupedByDay = days.map((day) => groupBy(timeslots, day));

  return (
    <div className="App">
      <h1>{name}</h1>
      {bts && (
        <div style={styles.bookedTimeSlot}>
          <div>
            <h2>RESERVATION: </h2>
            <p style={styles.reservation}>
              {formatDateTime(bts.start_time)}
              <i
                style={{ paddingLeft: "5px" }}
                className="angle double right icon"
              ></i>
              {formatDateTime(bts.end_time).slice(10)}
              <i
                style={styles.cancelBtn}
                onClick={() => dispatch(cancelReservationAction(companyId))}
                className="window close icon"
              ></i>
            </p>
          </div>
        </div>
      )}
      <div style={styles.company}>
        {groupedByDay?.map((day) => (
          <div key={day} style={styles.day}>
            {day.map((ts) => (
              <TimeSlot
                key={ts.start_time}
                timeslot={ts}
                companyId={companyId}
                bookedTimeslot={bts}
                booked={reservations.find((item) =>
                  checkDateTimeRange(item, ts)
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
