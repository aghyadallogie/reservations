import styled from "styled-components";

export const TimeSlotContainer = styled.div`
cursor: pointer;
padding: 10px 20px;
margin: 10px;
border-radius: 4px;
background: #FAF5E4;
text-align: center;
font-size: 17px;
letter-spacing: .5px;

  i {
    padding-left: 5px;
  }
`;

export const DeleteIcon = styled.i`
  padding-top: 6px;
  cursor: pointer;
  color: #ff6363;
  margin-left: 15px;
  font-size: 25px;
`;

export const Container = styled.div`
  display: flex;
  background-color; #FAF5E4;
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: 20px;
  height: 20px;
  text-align: center;
  letter-spacing: 3px;
  color: #125b50;
  border-bottom: 2px solid #125b50;
  padding-bottom: 30px;
`;

export const Reservation = styled.div`
  font-size: 18px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 10px 10px;
  border-radius: 10px;

  i {
    padding-left: 7px;
  }

  span {
    letter-spacing: 2px;
  }
`;

export const CompanyContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 80vh;
  padding: 0 10px;
`;

export const DayContainer = styled.div`
  background: #125b50;
  margin: "10px 10px";
  border-radius: 4px;
  color: #125b50;
  margin: 5px 0;
`;
