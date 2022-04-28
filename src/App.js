import "./App.css";
import { useEffect, useState } from "react";
import { Company } from "./components/Company";
import { Container } from "./styles";

function App() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/timeSlots`)
      .then((res) => res.json())
      .then((res) => setCompanies(res))
      .catch((err) => setError(err));
  }, []);

  return (
    <Container>
      {error ? (
        <div style={{ margin: "0 auto" }}>
          <h1>{error?.message || "Something went wrong!"}</h1>
        </div>
      ) : (
        companies?.map((comp) => (
          <Company
            key={comp.id}
            name={comp.name}
            timeslots={comp.time_slots}
            companyId={comp.id}
          />
        ))
      )}
    </Container>
  );
}

export default App;
