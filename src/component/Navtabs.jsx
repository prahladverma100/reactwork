import React, { useState } from 'react'

const Navtabs = () => {
    const [state, setState] = useState('tab1')
    const tabclick = (heandel) => {
        setState(heandel)
    }
    return (
        <div>
            <div className=' container '>
                <div className=' d-flex justify-content-center justify-content-between'>
                    <button className={`px-3 ${state === "tab1" ? "bg-black text-white" : ""}`} onClick={() => tabclick('tab1')} >tab1</button>
                    <button className={`px-3 ${state === "tab2" ? "bg-black text-white" : ""}`} onClick={() => tabclick('tab2')} >tab2</button>
                    <button className={`px-3 ${state === "tab3" ? "bg-black text-white" : ""}`} onClick={() => tabclick('tab3')} >tab3</button>
                    <button className={`px-3 ${state === "tab4" ? "bg-black text-white" : ""}`} onClick={() => tabclick('tab4')} >tab4</button>
                </div>
                <div>

                    <p className={`${state === 'tab1' ? "" : "d-none"}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit pariatur quam et dolores </p>
                    <p className={`${state === 'tab2' ? "" : "d-none"}`}> tab2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit pariatur quam et dolores </p>
                    <p className={`${state === 'tab3' ? "" : "d-none"}`}>tab3 ipsum, dolor sit amet consectetur adipisicing elit. Suscipit pariatur quam et dolores </p>
                    <p className={`${state === 'tab4' ? "" : "d-none"}`}>tab4 ipsum, dolor sit amet consectetur adipisicing elit. Suscipit pariatur quam et dolores </p>
                </div>
            </div>
        </div>
    )
}

export default Navtabs