import React from 'react'
import './styles.css';

const Header = ({cartCount}) => {
  return (
    <>
    <div className='header'>
    
      <h1>Shoe-Store</h1>
      <div className='headercart'>
      <i className="fa-solid fa-cart-shopping"></i>
      <p>{cartCount}  CART</p>
      </div>
      </div>
    </>
  )
}

export default Header;