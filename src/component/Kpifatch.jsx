import React, { useEffect, useState } from 'react'

const Kpifatch = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        const gfdd = async () => {
            const api = await fetch('https://jsonplaceholder.typicode.com/todos');
            const name = await api.json();
            console.log(name)
            setState(name);
        }
        gfdd();
    });

    return (
        <div>
            {state.map((n, id) => {
                return (
                    <div key={id}>{n.title}</div>
                );
            })}
        </div>
    )
}

export default Kpifatch