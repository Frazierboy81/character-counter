import { useState } from "react";

function Toggler() {

    const [isOn, setIsOn] = useState(false)

    return(

        <div>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
            <p>Status {isOn ? 'On' : 'Off'}</p>

           {isOn && <div style= {{backgroundColor: 'pink'}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>}
        </div>
    )
}

export default Toggler;