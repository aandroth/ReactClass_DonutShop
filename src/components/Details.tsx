import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Donut from '../models/Donut';
import DonutDetails from '../models/DonutDetails';
import { getDonutDetails } from '../services/DonutService';
import './Details.css'

const Details = () => {
    const id: string | undefined = useParams().id;
    const [donutDetails, setDonutDetails] = useState<DonutDetails | null>(null);

    useEffect(()=>{
        getDonutDetails(id!).then((response) => {
            setDonutDetails(response);
        })
    }, [donutDetails])
    
  return (
    <div className='Details'>
        <h2>{donutDetails?.name}</h2>
        <img src={donutDetails?.photo} style={{width:"100px", height:"100px"}} alt="img not found" />
        <p>Extras:</p>
        <ul>
            {donutDetails && donutDetails?.extras.map
                (
                    (extra, index) => 
                    {
                        return <p>{extra}{(index == donutDetails.extras.length) ? ",":""}</p>;
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
