import { useParams } from "react-router-dom";
import axios  from 'axios';
import { useState, useEffect } from "react";

function Price () {
    //creating a state variable to hold the coin data
    const [coin, setCoin] = useState(null);

    //accesing the params obj to get the symbol params
    const params = useParams();
    console.log(params);

    // const apiKey = '41D65364-D5D8-4678-94BB-48075AF65DD9';
    // const apiKey = "2FFA9750-D2ED-40B9-ACBD-D1C027E35041";
    const apiKey = process.env.REACT_APP_API_KEY;
    const symbol = params.symbol;

    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    
 
    //function to fetch the data from the coin api
    const getCoin = async () => {
        try{
            const res = await axios.get(url);
            console.log(res.data);
            setCoin(res.data);

        }catch(error){
            console.error(error);
        }
    }

    //call the getCoin function when the component render the frist time
    useEffect(()=>{
        getCoin();
    },[])

    //return jsx if we have data in state
    const loaded = () =>{
        return(
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>$ {coin.rate}</h2>
            </div>
        )
    }

    //return some JSX to show that we're still waiting for the data
    const loading = () => <h1>Loading...</h1>;

    // if coin and coin.rate true will run loaded(), otherwise run loading
    return coin && coin.rate ? loaded() : loading();
}
export default Price;