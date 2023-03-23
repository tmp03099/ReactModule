import './App.css';
import { useState, useEffect } from 'react';
import { getCharacters } from './services/disney-api';
import SearchCharacter from './components/SearchCharacter';
import { Routes, Route } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const disneyData = async() => {
      console.log("disneyData")
      const data = await getCharacters('Mickey Mouse');
      setCharacter(data);
    }
    disneyData();
      
  },[])

  return (
    <div className="App">
      <h1>DISNEY CHARACTERS</h1>
      <NavBar/>
      <SearchCharacter searchChar={getCharacters} setChar={setCharacter}/>
      {/* <div>
          {character.map((item, idx)=>(
            <Disney character={item} key={idx}/>
          ))}
      </div> */}

      <Routes>

        <Route path='/' element={<Home character={character}/>}/>

        <Route path='/feedback' element={<Feedback/>}/>

      </Routes>
        
    </div>
  );
}

export default App;

