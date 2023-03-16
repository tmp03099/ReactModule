import './App.css';
import Card from './components/Card';
import cardData from './components/data';
import "./index.css";

function App() {
  return (
    <div className="App">
        <h1>Bootstrap Cards To Component Example</h1>
        <section className="cards">
          {cardData.map((ele,index)=>
            <Card {...ele} key={index}/>
          )}
        </section>
    </div>
  );
}

export default App;
