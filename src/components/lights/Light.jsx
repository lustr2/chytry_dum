import React, {useState} from 'react';
import offUrl from './light-off.svg';
import onUrl from './light-on.svg';

const Light = ({name, state}) => {
    const [stavZarovky, setStavZarovky] = useState(state==='on' ? 'on' : 'off');

    return (
        <>
         <div className="light__icon" key={name} onClick={() => (stavZarovky==='on' ? setStavZarovky('off'): setStavZarovky('on'))}>
            <img src={stavZarovky==='on' ? onUrl : offUrl}
                 alt={stavZarovky==='on' ? 'On' : 'Off'} /> 
         </div>
        </>
    )
}
export default Light;