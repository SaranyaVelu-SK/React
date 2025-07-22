import React, { useState } from "react";


function Accordion({ items }) {

    const [activeIndex, setActiveIndex] = useState(null)

    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    if (items?.length === 0) return <p> No items available</p>
    return (
        <div className="accordion">
            {items?.map((item, index) => (
                <div style={{width:"600px"}} key={index}>
                    <div onClick={() => handleAccordion(index)} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h1 className="accordion-title">{item?.title}</h1>
                        {(activeIndex === index) ? <p style={{ cursor: "pointer" }}>⬆️</p> : <p style={{ cursor: "pointer" }}>⬇️</p>}
                    </div>
                    {(activeIndex === index) && <div className="accordion-content">{item?.content}</div>}
                </div>
            ))
            }
        </div>
    )
}

export default Accordion;