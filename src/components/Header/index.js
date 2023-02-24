// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-items">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo1"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        className="nav-logout"
        alt="nav logout"
      />
    </div>
    <div className="symbal-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        className="nav-logout"
        alt="nav logout"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        className="nav-products"
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        className="nav-cart"
        alt="nav cart"
      />
    </div>
    <div className="higher-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo2"
        alt="website logo"
      />
      <div className="right-container">
        <h1 className="home">Home</h1>
        <h1 className="home">Products</h1>
        <h1 className="home">Cart</h1>
        <button className="logout" type="button">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
