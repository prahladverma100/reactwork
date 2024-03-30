import React, { useState } from 'react';
const Accordi = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
        { title: 'Section 1', content: 'Content for Section 1' },
        { title: 'Section 2', content: 'Content for Section 2' },
        { title: 'Section 3', content: 'Content for Section 3' },
    ];

    return (
        <div className='mt-5 container mb-5 py-5'>
            {accordionItems.map((item, index) => (
                <div key={index}>
                    <div onClick={() => handleAccordionClick(index)}
                        style={{
                            cursor: 'pointer', padding: '10px', border: '1px solid #ccc', marginBottom: '5px',
                            backgroundColor: activeIndex === index ? '#eee' : 'transparent',
                        }}>
                        {item.title}
                    </div>
                    {activeIndex === index && (
                        <div style={{ padding: '10px' }}>{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};
export default Accordi;