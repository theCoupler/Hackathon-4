import React from 'react';
import { useState, useEffect } from 'react'
import './App.scss'
import Footer from './Footer';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {

  const [searchQueryArtist, setSearchQueryArtist] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  
  useEffect( () => {
    if (searchQueryArtist!=[]) {
    getData()
    }
     }, [searchQueryArtist, resultsPerPage]
  )
    async function getData() {
      const response = await fetch(
        `http://musicbrainz.org/ws/2/artist?query=${searchQueryArtist}&limit=${resultsPerPage}&fmt=json`
      )
      const data = await response.json();

      setSearchResults(data.artists)
    }

  return (
    <>
      <Navigation/>

      <SearchBar 
      setSearchQueryArtist = { setSearchQueryArtist }
      setResultsPerPage = { setResultsPerPage }
      resultsPerPage = { resultsPerPage } 
      />
      
      <SearchResults 
      searchResults  = { searchResults }
      />
      
      <Footer/>
    </>
  )
}

export default App