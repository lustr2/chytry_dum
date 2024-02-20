import React, {useState} from 'react';
import blindO from './blinds-open.svg';
import blindC from './blinds-closed.svg';

const Blinds = ({state}) => {
    const [stavZaluzii, setStavZaluzii] = useState(state);

    return (
        <>
			<div className="blinds">
				<div className="blinds__icon">
					<img src={stavZaluzii !='open' ? blindO : blindC} />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
                    {stavZaluzii != 'open' ? <div><button className="button button--active" onClick={() => (stavZaluzii ==='open' ? setStavZaluzii('closed') :  setStavZaluzii('open'))
                                   }>Otevreno</button>
                   <button className="button" 
                           onClick={() => (stavZaluzii ==='closed' ? setStavZaluzii('open') :  setStavZaluzii('closed'))
                       }>Zavreno</button></div>

                                            : <div><button className="button" onClick={() => (stavZaluzii ==='open' ? setStavZaluzii('closed') :  setStavZaluzii('open'))
                                        }>Otevreno</button>
                        <button className="button button--active" 
                                onClick={() => (stavZaluzii ==='closed' ? setStavZaluzii('open') :  setStavZaluzii('closed'))
                            }>Zavreno</button></div>
                    }
				</div>
			</div>
        </>
    )
}

export default Blinds;

{/* <button className="button button--active" 
                           
onClick={() => (stavZaluzii ==='open' ? setStavZaluzii('closed') :  setStavZaluzii('open'))
        }>Otevřeno</button>
<button className="button" 
onClick={() => (stavZaluzii ==='closed' ? setStavZaluzii('open') :  setStavZaluzii('closed'))
}>Zavřeno</button> */}

