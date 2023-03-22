import './App.css';
import Disney from './components/Disney';
import { useState, useEffect } from 'react';
import { getCharacters } from './services/disney-api';
import SearchCharacter from './components/SearchCharacter';

function App() {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const disneyData = async() => {
      const data = await getCharacters();
      const newData = data.data
      console.log(newData);
      setCharacter(newData);
    }
    disneyData();
      
  },[])

  return (
    <div className="App">
      <h1>DISNEY CHARACTERS</h1>
      <SearchCharacter />
      <div>
          {character.map((item, idx)=>(
            <Disney character={item} key={idx}/>
          ))}
      </div>
        
    </div>
  );
}

export default App;
