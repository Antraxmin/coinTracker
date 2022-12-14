import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(1);  // initial loading state
  const [coins, setCoins] = useState([]);     // coin object state
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=>{
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
      <ul>
        {coins.map(
          (coin) => <li>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</li>
        )}
      </ul>}
    </div>
  );
}

export default App;
