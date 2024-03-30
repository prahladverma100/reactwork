import React from 'react'

const Props1_01 = (propspass) => {
    console.log(propspass);
    const ytre = { mobile: 87654321, gamil: 'kjhgfdsgfdsvcx' };
    const arr = ['rahul,anil,manoj,jatin'];

    return (
        <div className=' container'>
            <p>my name is prahlad {propspass.name} {propspass.id}</p>
            <p>age:{propspass.age}</p>
            <p>gender:{propspass.gender === true ? 'male' : 'female'}</p>
            <p>child:{propspass.child === true ? 'yes' : 'no'}</p>
            <p>mobile:{propspass.trewtre.mobile }</p>
            <p>gamil:{propspass.trewtre.gamil}</p>
            <p>rahul:0{propspass.arr['0'] }</p>
        </div>
    )
}

export default Props1_01