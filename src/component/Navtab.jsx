import React, { useState } from 'react'

const Navtab = () => {
    const [show, setShow] = useState(1)
    function fg(xc) {
        setShow(xc)
    }
    return (
        <div>
            <div className=' col-8'>
                <ul className=' d-flex justify-content-between'>

                    <li onClick={() => { fg(1) }}>
                        tab1
                    </li>
                    <li onClick={() => { fg(2) }}>
                        tab2
                    </li>
                    <li onClick={() => { fg(3) }}>
                        tab3
                    </li>
                </ul>
                <div className={show === 1 ? "navtabblock" : "navtabnone"}>
                    <h3>tabone</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ipsum voluptatem sit incidunt dicta sapiente deserunt obcaecati dolor illo necessitatibus magni qui itaque, delectus dolorum quia labore. Ipsa, rerum libero?</p>
                </div>
                <div className={show === 2 ? "navtabblock" : "navtabnone"}>
                    <h3>tabtwo</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ipsum voluptatem sit incidunt dicta sapiente deserunt obcaecati dolor illo necessitatibus magni qui itaque, delectus dolorum quia labore. Ipsa, rerum libero?</p>
                </div>      <div className={show === 3 ? "navtabblock" : "navtabnone"}>
                    <h3>tabthree</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ipsum voluptatem sit incidunt dicta sapiente deserunt obcaecati dolor illo necessitatibus magni qui itaque, delectus dolorum quia labore. Ipsa, rerum libero?</p>
                </div>
            </div>
        </div>
    )
}

export default Navtab