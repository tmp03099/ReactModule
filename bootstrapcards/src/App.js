import './App.css';
import Card from './components/Card';

import "./index.css";
import data from './data';

function App() {
  const cards = data.map((ele, i) =>{
    return(
    <Card 
        // img={ele.img}
        // title={ele.title}
        // text={ele.text}
        // url={ele.url}
        {...ele} key={i}/> //{...ele} can pass many key:value's down instead of writing like title={ele.title} img={ele.img}
    );
  })
  console.log(cards);

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}

export default App;
