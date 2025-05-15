import { useEffect, useState } from "react";

const Pagination = () => {

    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const apiData = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonApiData = await apiData.json();
            setData(jsonApiData);
        }
        fetchData();
    }, [])

    const ITEMS_PER_PAGE = 2;
    const numberOfPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const start = (pageNumber-1)*ITEMS_PER_PAGE;
    const end = pageNumber*ITEMS_PER_PAGE;
    

    const handlePrev = () =>{
        if(pageNumber > 1){
            setPageNumber((prev) => prev -1)
        }
    }
    const handleNext = () =>{
        if(pageNumber  < numberOfPages){
            setPageNumber((prev) => prev +1)
        }
    }
    
    return (
        <div>
            <div>
                {data.slice(start,end).map((item)=>
                (<div className="paginate-items" key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    </div>))}
            </div>

            <div className="pagination-bar">
                <button onClick={handlePrev} disabled={pageNumber === 1} className="page-number">Prev</button>
                {Array.from({ length: numberOfPages }, (_, i) => (
                    <button key={i} onClick={() => setPageNumber(i+1)}  className={`page-number ${pageNumber === i+1 ? "active" : ""}`}>{i + 1}</button>
                ))}
                <button onClick={handleNext} disabled={pageNumber === numberOfPages} className="page-number">Next</button>
            </div>
        </div>
    )
}
export default Pagination;