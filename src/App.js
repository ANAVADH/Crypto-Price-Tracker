
import {useEffect,useState} from 'react';
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from './Track'





function App() {

  

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

 const handleChange = (e) =>{
setSearch(e.target.value)

 };
 
 //filtering
// making the effort less connection
const filteSearch = track.filter(track =>
  track.name.toLowerCase().includes(search.toLowerCase())
)

// return statement of the app.js


  return (
    <div className="coin-app">
      <div className='coin-search'>
        <div className='container justify-content-center'>
      <h1 className='coin-text text-center p-5'>Price-Tracker</h1>
     
         <form>
         <input type="text" className="coin-input" placeholder="Search here" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange}/>
       </form>
   </div>
   </div>
   {filteSearch.map(coin =>{
     return <Coin key={coin.id} name={coin.name}  symbol={coin.symbol} image={coin.image} volume={coin.total_volume} price={coin.current_price} priceChange={coin.price_change_percentage_24h} marketCap={coin.market_cap}/> 
   })}
    <p className='d'>Designed by Anavadh</p>
 </div>
 
  );
}



export default App;
