import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState("");
    const [disableDecrement, setDisableDecrement] = useState(true);
    const [disableIncrement, setDisableIncrement] = useState(false);
    const [error,setError]= useState("");
    const handleIncrement = () => {
        if(!step){
            setError("enter steps to increment");
            return;        
        }
        setCount(prev => prev + Number(step))
        setError("")
    }
    const handleDecrement = () => {
        if(!step){
            setError("enter steps to decrement");
            return;
        }
        setCount(prev => prev - Number(step))
        setError("")
        }
    
    const handleSteps = (e) => {
        const value = e.target.value;
        if(value===""){
            setStep("");
            return;
        }
        const num= Number(value);
        if(!isNaN(num) && num >0){
            setStep(num)
        }
    }

    useEffect(() => {
        setDisableDecrement(count<step);
        setDisableIncrement(step>100000);
    }, [count,step])

    return (
        <div className="counterContainer">
            <h1>Counter App</h1>
            
            <label>Enter steps to increment or decrement</label>
            <input id="step" onChange={(e) => { handleSteps(e) }} value={step} className="stepInp"></input>
            <div className="counterBtns">
                <button onClick={handleIncrement} disabled={disableIncrement} style={{backgroundColor:`${disableIncrement ? "gray" :"rgb(230, 134, 65)"}`,}}>Increment</button>
            <button onClick={handleDecrement} disabled={disableDecrement} style={{backgroundColor:`${disableDecrement ? "gray" :"rgb(230, 134, 65)"}`,}}>Decrement</button>
            <button onClick={() => { setCount(0);setError("");setStep("") }} style={{backgroundColor:"rgb(230, 134, 65)"}}>Reset</button>
            </div>
            <p id="count">{count}</p>
            <p id="error">{error}</p>
        </div>
    )
}
export default Counter;