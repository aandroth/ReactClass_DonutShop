import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import Donut from '../models/Donut';
import DonutDetails from '../models/DonutDetails';
import { getDonutDetails } from '../services/DonutService';
import './Details.css'

const Details = () => {
    const id: string | undefined = useParams().id;
    const [donutDetails, setDonutDetails] = useState<DonutDetails | null>(null);

    useEffect(()=>{
        getDonutDetails(id!).then((response) => {
            var donutDetails = response;
            if(id) {
                donutDetails.id = id;
                donutDetails.price = 1.00;
            }
            setDonutDetails(donutDetails);
        })
    }, [])
    const {addItem} = useContext(CartContext);
    
    const addToCart = () => {
        console.log("Calling add");
        
        console.log(donutDetails);
        if(donutDetails) addItem(donutDetails);
        console.log("Called add");
    }

  return (
    <div className='Details'>
        <h1>{donutDetails?.name}</h1>
        {donutDetails && <button onClick={()=>addToCart()}>Add to Cart</button>}
        <img src={donutDetails?.photo} style={{width:"100px", height:"100px"}} alt="img not found" />
        <p>Extras:</p>
        <ul>
            {donutDetails && donutDetails?.extras.map
                (
                    (extra, index) => 
                    {
                        return <p key={index}>{extra}{(index == donutDetails.extras.length) ? ",":""}</p>;
                    }
                )
            }
        </ul>
        <p>Calories:</p>
        {donutDetails?.calories}
    </div>
  )
};

export default Details;
