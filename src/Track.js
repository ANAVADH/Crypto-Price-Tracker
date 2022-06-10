import './coin.scss'

function Coin({name,symbol,price,volume,priceChange,marketCap,image}) {
  return (

    <div>
<section className="wrapper">
    <section className="row-fadeIn-wrapper">
      <article className="row fadeIn nfl">
        <ul>
          
          <li>{name}</li>
          <li><img src={image} alt='crypto app'className='immage'></img>{symbol}</li>
          <li>${price}</li>
          <li>{priceChange < 0 ?(
              <p className="Danger">{priceChange.toFixed(2)}%</p>
          ):(
            <p className="Success">{priceChange.toFixed(2)}%</p>
        )}</li>
          <li>${volume.toLocaleString()}</li>
        </ul>
        <ul className="more-content">
          <li>${marketCap.toLocaleString()}</li>
        </ul>
      </article>
    </section>
    </section>
   </div>
  )
}

export default Coin


// export default Track