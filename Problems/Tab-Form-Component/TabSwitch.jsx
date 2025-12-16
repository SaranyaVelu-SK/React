import { useState } from 'react';
import tabsData from './tabsData';


const TabSwitch = () => {

    const [activeTab, setActiveTab] = useState(0);

    const [data, setData] = useState({
        name: "",
        age: "",
        email: "",
        interests: [],
        theme: "dark"
    });

    const handleTabSwitch = (index) => {
        setActiveTab(index)
    }

    const handlePrev = () =>{
        setActiveTab(activeTab-1)
    }
    const handleNext = () =>{
        setActiveTab(activeTab+1)
    }
    const handleSubmit = () =>{
        console.log(data)
    }
    const ActiveComponent = tabsData[activeTab].component;

    return (
        <div className="tabContainer">
            <div className="tabHeader">
                {tabsData?.map((d, index) => (
                    <div key={index} className="tabHeadings" onClick={() => handleTabSwitch(index)} style={{backgroundColor:`${activeTab==index ? "darksalmon":""}`}}>{d.name}</div>
                ))}
            </div>
            <div className='activeComp'>
                <ActiveComponent data={data} setData={setData} />
            </div>
            <div className="navBtns">
                {activeTab>0 && <button className='tabHeadings' onClick={handlePrev}> Prev</button>}
                {activeTab < tabsData.length-1 && <button className='tabHeadings' onClick={handleNext}>Next</button>}
                {activeTab == tabsData.length-1 && <button className='tabHeadings' onClick={handleSubmit}>Submit</button>}
            </div>

        </div>
    )

}

export default TabSwitch;