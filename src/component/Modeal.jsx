import React, { useState } from 'react'

const Modeal = () => {
  const [model, Setmodel] = useState(true);
  const del = () => {
    Setmodel(true)
  } 
  return (
    <div className=' min-vh-100 justify-content-center d-flex align-items-center'>
      <div className=' position-relative'>
        <button onClick={() => Setmodel(false)}>modal</button>

        <div className={`box ${model ? 'd-none' : 'd-block'}`}>
          <p className=' text-white '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dolorum odit inventore, vero placeat fuga tenetur blanditiis sequi. Iusto praesentium asperiores sapiente corporis at unde nisi. Necessitatibus cupiditate quaerat magni.</p>
          <button onClick={del} className=''>clos</button>
        </div> 

      </div>
    </div>
  )
}

export default Modeal