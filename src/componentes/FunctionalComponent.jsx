import React, { useState } from 'react';
import ButtonPro from '../components/ButtonPro';

const FunctionalComponent = () => {

    const [temperature, setTemperatura] = useState(false)

    // const handlerTemperature = () => setTemperatura(!temperature);

    return (
        <div>
            <h1>Hoy hace mucho {!temperature ? 'frio' : 'calor'}</h1>
            <ButtonPro temperature={temperature} setTemperatura={setTemperatura} />
        </div>

    )
}

export default FunctionalComponent;
