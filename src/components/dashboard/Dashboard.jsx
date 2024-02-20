import React, { useState } from 'react';
import Lights from '../lights/Lights';
import smartHomeData from '../../smartHomeData';
import Climate from '../climate/Climate';
import Blinds from '../blinds/Blinds';
import Energy from '../energy/Energy';

const DashBoard = ({data}) => {
    const klima = data.climate;
    const elekro = data.energyConsumption;

    return (
        <>
            <main className="dashboard">
                <Lights ligths={data.lights} />
                <Climate temperature={klima.temperature} humidity={klima.humidity} />
                <Blinds state={data.Blinds}/>
                <Energy electricity={elekro.electricity} water={elekro.water} />
            </main>

        </>
    )
}
export default DashBoard;

/* <div class="lights">
<Light />
</div> */
