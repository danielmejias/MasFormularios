import React from "react";

const ButtonPro = (props) => {
  console.log("🚀 ~ file: ButtonPro.jsx ~ line 4 ~ ButtonPro ~ props", props);

  const { setTemperatura, temperature } = props;

  return (
    <div>
      <h3>{temperature ? "frio" : "calor"}</h3>
      <button onClick={() => setTemperatura(!temperature)}>
        Cambiar temperatura
      </button>
      
    </div>
  );
};

export default ButtonPro;
