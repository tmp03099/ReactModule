import { useState } from 'react';

function Counter(){

    // State variable
    // useState is the initial setup counter is the current state
    // setCounter is what we want to update counter to
    const  [counter, setCounter] = useState(0)

    const handleClick = () =>{
        setCounter (counter + 1);
        // counter ++;
        // console.log('Clicked');
    }

    const handleClicktwo = () =>{
        setCounter ( counter + 2);
    }

    const multipleThree = () =>{
        setCounter ( counter * 3);
    }

    const divideFive = () =>{
        setCounter (counter % 5 );
    }


    return(
        <div>
            <h2>Counter: {counter}</h2>

            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClicktwo}>Click me +2</button>
            <button onClick={multipleThree}>Click me multiple 3</button>
            <button onClick={divideFive}>divide 5</button>

        </div>
    )
}
export default Counter;