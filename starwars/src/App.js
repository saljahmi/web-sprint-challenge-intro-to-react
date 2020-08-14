import React, {useState} from 'react';
import {useEffect} from 'react'
import axios from 'axios';
import './App.css';
import styled from "styled-components";

import Character from './components/Character'

const Characters = styled.ul`
  width: 80%;
  margin: 0 auto;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/?')
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => {
        debugger
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <Characters>
        {characters.map((char) => (
          <Character key={char.name} endpoint={char.url} />
        ))}
      </Characters> */}
    </div>
  );
}

export default App;
