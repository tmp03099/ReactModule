import './App.css';
import { Routes, Route} from 'react-router-dom';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
import Main from './pages/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Main/>} />

        <Route path="/currencies" element={<Currencies/>} />

        <Route path="/price/:symbol" element={<Price/>} />

      </Routes>
      
    </div>
  );
}

export default App;
