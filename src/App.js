import "./App.css";
import { useEffect, useState } from "react";
import { Company } from "./components/Company";
import { styles } from "./styles";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/timeSlots`)
      .then((res) => res.json())
      .then((res) => setCompanies(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.container}>
      {companies?.map((comp) => (
        <Company key={comp.id} name={comp.name} timeslots={comp.time_slots} companyId={comp.id} />
      ))}
    </div>
  );
}

export default App;
