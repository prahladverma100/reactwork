// import React from 'react'
// import { useReducer } from 'react';

// const Usereducer = () => {
//     let counter = 0;
//     const counter1 = (state, action) => {
//         if (action.type === 'incre') {
//             return state + 1;
//         }
//         if (action.type === 'decri') {
//             return (state - 1);
//         }
//         if (action.type === 'reset') {
//             return (state = 0);
//         };
//     }
//     const [state, dispatch] = useReducer(counter1, counter);
//     return (
//         <div>
//             <h1>{state}</h1>
//             <button onClick={() => dispatch({ type: 'incre' })}>incre</button>
//             <button onClick={() => dispatch({ type: 'decri' })}>decri</button>
//             <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
//         </div>
//     );
// };

// export default Usereducer
 