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
    </div>
  );
}

export default App;
