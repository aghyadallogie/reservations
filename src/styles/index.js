import styled from "styled-components";

export const TimeSlotContainer = styled.div`
  height: 50px;
  cursor: pointer;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;
  background: #faf5e4;
  text-align: center;
  font-size: 17px;
  letter-spacing: 0.5px;
  background: ${({ bg }) => bg};
  border: ${({ borders }) => borders};

  &:hover {
    border: 2px solid #ff6363;
  }

  i {
    padding-left: 5px;
  }
`;

export const DeleteIcon = styled.i`
  cursor: pointer;
  color: #ff6363;
  padding-top: 6px;
  padding-left: 10px;
  font-size: 25px;

  &:hover {
    color: red;
  }
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

export const ReservationContainer = styled.div`
  display: flex;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 10px 10px;
  border-radius: 10px;
  text-align: center;

  i {
    padding-left: 7px;
  }

  span {
    letter-spacing: 2px;
  }
`;

export const CompanyContainer = styled.div`
  width: 20vw;
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
  margin: 10px 0;

  > p {
    color: white;
    text-align: center;
    padding-top: 15px;
    font-size: 18px;
    letter-spacing: 3px;
  }
`;
