import { useContext } from "react";
import { Mycontext } from "../App";
function Counter(){

    const ctx = useContext(Mycontext);

    // dispatch an action -> {type: 'add', payload: null}
    return (
        <div>
            <h1>Counter: {ctx.state}</h1>
    
            <button onClick={() => ctx.dispatch({type:'add', payload:null})}>Add</button>
            <button onClick={() => ctx.dispatch({type:'subtract', payload:null})}>Subtract</button>
            <button onClick={() => ctx.dispatch( {type: 'ADD_FIVE', payload: 5})}>Add 5</button>
        </div>

    )

}
export default Counter;