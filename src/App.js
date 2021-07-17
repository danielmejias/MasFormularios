import React from "react";
import "./App.css";
import PersonCard from "./componentes/PersonCard";

function App() {
  return (
    <div class="centered">
      <PersonCard
        lastName={"Apellido1"}
        firstName={"Nombre1"}
        age={10}
        hairColor={"Brown"}
      />
      <PersonCard
        lastName={"Apellido2"}
        firstName={"Nombre2"}
        age={20}
        hairColor={"Black"}
      />
      <PersonCard
        lastName={"Apellido3"}
        firstName={"Nombre3"}
        age={30}
        hairColor={"Red"}
      />
      <PersonCard
        lastName={"Apellido4"}
        firstName={"Nombre4"}
        age={40}
        hairColor={"Blonde"}
      />
    </div>
  );
}
export default App;
