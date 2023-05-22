// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = item

  return (
    <li className="container">
      <div className="imgContainer">
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
