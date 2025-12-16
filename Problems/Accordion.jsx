import { useState } from 'react';


function Accordion({ items }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    if(items?.length === 0) return (<p>No items in the list</p>)
    return (
        <div className="accordion">
            {items?.map((item, index) =>
            (
                <div key={index}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h1 className='accordion-title'>{item.title}</h1>
                        <p onClick={() => handleAccordion(index)} style={{ cursor: "pointer" }}>
                            {activeIndex == index ? "⬆️" : "⬇️"}
                        </p>
                    </div>
                    {
                        activeIndex == index && (
                            <div>
                                <p className='accordion-content'>{item.content}</p>
                            </div>
                        )
                    }
                </div>
            )
            )}
        </div>
    )
}

export default Accordion;