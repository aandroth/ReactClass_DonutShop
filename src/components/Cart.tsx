import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import DonutDetails from '../models/DonutDetails';
import './Cart.css'
import ResultsList from './ResultsList';

const Cart = () => {
    
    const {items, removeItem} = useContext(CartContext);
    
    const sumCalories = (): number => {
        var calories = 0;
        items.forEach(item => {
            calories += Number(item.calories);
        });
        return calories;
    }

  return (
    <div className='Cart'>
        <h1>Shopping Cart</h1>
        <table>
            <tr><td><h2>Donut</h2></td>
                <td><h2>Calories</h2></td>
                <td><h2>Price</h2></td></tr>
            {items.map((item) => (
                <tr> 
                    <td>{item.name}</td>
                    <td>{item.calories}</td>
                    <td>{item.price}</td>
                    <td><button onClick={()=>removeItem(item.id)}>Remove Item</button></td>
                </tr>
            ))}
        </table>
        <p>Total Calories: {sumCalories()}</p>
        <p>Total Price: ${items.length}</p>
    </div>
  )
};

export default Cart;
