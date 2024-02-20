import React from 'react';
import Light from './Light';

const Lights = ({ligths}) => {

    return (
        <>
          {ligths.map(l => 
            <div className="light" key={l.name}>
                <Light name={l.name} state={l.state} />
                <div className="light__name">
                    {l.name}
                </div>
			</div>
            )
          }
        </>
    )
}

export default Lights;