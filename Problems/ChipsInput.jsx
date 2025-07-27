import React, { useState } from "react";
function ChipsInput() {
  const [inputText, setInputText] = useState("")
  const [chipInputs, setChipInputs] = useState([])

  const handleChipInput = (e) => {
    if (e.key === 'Enter' && inputText.trim().length > 0) {

      setChipInputs([...chipInputs, inputText])
      setInputText("")
    }
  }

  const deleteChip = (text) => {

    const index = chipInputs.indexOf(text);

    if (index !== -1) {
      const filteredArray = [...chipInputs.slice(0, index), ...chipInputs.slice(index + 1)]
      setChipInputs(filteredArray)
    }

  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputText}
        onChange={(e) => { setInputText(e.target.value) }}
        onKeyDown={(e) => handleChipInput(e)}
      />

      <div className="chips-container">
        {chipInputs.map((text) => (
          <div className="chip">
            <p>{text}<span onClick={() => deleteChip(text)}>X</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;