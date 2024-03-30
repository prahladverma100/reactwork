import React, { useState } from 'react'

const Counter = () => {
    const [color, Setcolor1] = useState(0);
    const [savevalues, setSavevalues] = useState([]);
    const as = () => {
        Setcolor1(color + 1);
    };
    const sa = () => {
        Setcolor1(color - 1);
    }

    const re = () => {
        Setcolor1(0);
    }

    const save = () => {
        Setcolor1(0);
        setSavevalues([...savevalues, color]);
    }
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={as} className=' bg-primary'>incerment</button>
            <button onClick={sa} className=' bg-light'>Decriment</button>
            <button onClick={re} className=''>reset</button>
            <button onClick={save}>save</button>
            <div>
            <h2>saved value</h2>
            <ul>
                    {savevalues.map((value) => { 
                        return (<li>{value}</li>)
         })}
                </ul></div>
            {/* <button onClick={as}> like{color}</button> */}
        </div>
    )
}

export default Counter
