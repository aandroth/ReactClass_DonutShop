import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Donut from '../models/Donut';
import { getDonuts } from '../services/DonutService';
import './Home.css'
import ResultsList from './ResultsList';

const Home = () => {    
    
    const [donuts, setDonuts] = useState<Donut[]>([]);

    useEffect(()=> {
            getDonuts().then((response)=>{setDonuts(response.results)})
        }
    );

  return (
    <div className='Main'>
        <ResultsList donuts={donuts}/>
    </div>
  )
};

export default Home;
