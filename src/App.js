import React from "react";
import "./App.css";
import PersonCard from "./componentes/PersonCard";

function App() {
  return (
    <div class="centered">
      <PersonCard
        lastName={"Doe"}
        firstName={"Joe"}
        age={45}
        hairColor={"Black"}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        age={88}
        hairColor={"Brown"}
      />
    </div>
  );
}
export default App;
