import { useEffect, useState } from "react";
import './SearchBar.scss'

export default function SearchBar({ setSearchQueryArtist, setResultsPerPage }) {

    const [searchState, setSearchState] = useState("");

    const handleChange = (e) => {
        setSearchState(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            document.querySelector('.btn').click()
        }
      }

    useEffect(() => {
        
    },[])

    return (
    <>
    <div className="search">
        <h2>Music Artists Search</h2>
        <div className="search-bar">
            <input type="text" placeholder="find your artist..." onChange={ handleChange} onKeyDown={ handleKeyDown }/>
            <div className="search-bar__pageSelect">
                <label htmlFor="results_per_page">Results per page</label>
                <select name="results_per_page" id="results_per_page" onChange={ (e) => {
                    setResultsPerPage(e.target.value)
                }}>
                    <option value="10" defaultChecked>10</option>
                    <option value="20">20</option>
                    <option value="40">40</option>
                </select>
            </div>
            <br />
            
            <button className="btn" onClick={ () => setSearchQueryArtist(searchState) }>Search</button>
        </div>
        </div>
    </>
    )

} 