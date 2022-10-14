import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import './Header.css'

const Header = () => {
    const {items} = useContext(CartContext);
    

  return (
    <div className='Header'>
        <Link to={`/`}>
            <h2>Home</h2>
        </Link>
        <Link to={`/cart`}>
            <h2>Cart: {items.length}</h2>
        </Link>
    </div>
  )
};

export default Header;
