import { useState } from "react";


const AutocompleteSearchBar = () => {
    const [searchKey, setSearchKey] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const data = [
        "apple", "banana", "cherry", "date", "grape",
        "kiwi", "lemon", "mango", "orange", "pineapple"
    ];

    const handleChange = (k) => {
        const key = k.target.value;
        setSearchKey(key);
        const answer = data.filter((sug) => sug.toLowerCase().includes(key.toLowerCase()))
        setSuggestions(answer)
        console.log(answer)
    }
    return (
        <div>
            <label htmlFor="searchKey">Search for item : </label>
            <input type="text" id="searchKey" name="searchWord" value={searchKey} onChange={(e) => handleChange(e)}></input>
            <ul>
                {suggestions.length === 0 ? <>
                    <p>No results found</p></> :
                    suggestions.map((sug, index) => (
                        <li key={index} onClick={() => { setSearchKey(sug) }} on>{sug}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default AutocompleteSearchBar;