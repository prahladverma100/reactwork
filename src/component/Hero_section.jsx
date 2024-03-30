// import React from 'react'
// import { Container } from 'react-bootstrap'

// const Hero_section = () => {
//   return (
//       <div>
//           <Container>
//               <h1>Hello world</h1>
//           </Container>
//     </div>
//   )
// }
// export default Hero_section
import React, { useEffect, useState } from "react";

const Hero_section = () => {
    const [dogImage, setDogImage] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/0")

            .then((response) => response.json())
            .then((data) => setDogImage(data.message));
    }, []);
    return (
        <div className="App">
            {/* 5. Using dogImage as the src for our image */}
            {dogImage &&
                dogImage.map((dog) => (
                    <img width={"300px"} height={"300px"} src={dog}></img>
                ))}
        </div>
    );
};

export default Hero_section;




// import React, { useReducer } from "react";

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return { count: state.count + 1 };
//         case "DECREMENT":
//             return { count: state.count - 1 };
//         case "RESET":
//             return { count: 0 };
//         default:
//             return state;
//     }
// };

// const Hero_section = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div>
//             <p>Count: {state.count}</p>
//             <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//             <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//             <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//         </div>
//     );
// };

// export default Hero_section;