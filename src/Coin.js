import React from 'react'
import './coin.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Coin=({name,symbol,price,volume,image,priceChange,marketCap})=> {
  return (
    <div className='container rounded'>
     <div className='coin-row'>
         <div className='coin-column w-55 justify-content-center text-center  '>
         <table className="d-flex justify-content-center">
         <tbody>
         <tr>
      {/* <th scope="row"></th> */}
      <td><h2><img className='' src={image} alt="crypto-coins"></img>  {name}</h2></td>
      <td><p>{symbol}</p></td>
      <td>{priceChange < 0 ?(
              <p className="Danger">{priceChange.toFixed(2)}%</p>
          ):(
            <p className="Success">{priceChange.toFixed(2)}%</p>
        )} </td>
      <td><p>Mkt-cap: ${marketCap.toLocaleString()}</p>
      </td>
      <td>${price}</td>
      <td className=''>${volume.toLocaleString()}</td>
    </tr>
 
  </tbody>
</table>
         </div>
     </div>

    </div>
  );
};

export default Coin