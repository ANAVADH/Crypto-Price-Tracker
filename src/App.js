import {useEffect,useState} from 'react';
import axios from 'axios'
import './App.css';
import Coin from './Coin';




function App() {

  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false

  const [track,setTrack] = useState([]);
  const [search,setSearch] = useState('');

useEffect(()=>{

  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res=>{

    setTrack(res.data)
    console.log(res.data)

  }).catch(err => console.log(err))
},[]);
//taking the conseptual value from the working event....

 const handleClick = e =>{
setSearch(e.target.value)

 };

const filteSearch = track.filter(track =>
  track.name.toLowerCase().includes(search.toLowerCase())
)


  return (
    <div className="CoinApp">
      <div className='container'>
      <h1 className='coin-text text-center p-5'>Price-Tracker</h1>
         <form>
              <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="&#xf002; Search here" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleClick}/>
              
              </div>
       </form>
   </div>
   {filteSearch.map(coin =>{
     return <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} volume={coin.total_volume} price={coin.current_price} priceChange={coin.price_change_percentage_24h} marketCap={coin.market_cap}/> 
   })}
 </div>
  );
}

export default App;
