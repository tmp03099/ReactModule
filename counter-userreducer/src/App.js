import { createContext, useReducer } from 'react';
import Homepage from './pages/Homepage';
import './App.css';

// Init our context
export const Mycontext = createContext(null);

function App() {

  // Init the useReducer
  // we need to pass a reducer function and the initial state
  // It can be a number or obj 
  const initialState = 0

  const [state, dispatch] = useReducer(reducer, initialState);

  //Reducer function which will have all the logic to update the state
  function reducer(state, action){
    const {type, payload} = action;
    console.log(action);
    switch(type){
      case 'add':
        return state + 1;
      case 'subtract':
        return state - 1;
      case 'ADD_FIVE':
        if (payload){
          return state + payload;
        }
      default:
        return state;

    }
  }

  return (

    <Mycontext.Provider value= { {state ,dispatch }}>

      <div className="App">
        <Homepage/>
      </div>

    </Mycontext.Provider>

  );
}

export default App;
