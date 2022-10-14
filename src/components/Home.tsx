import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Donut from '../models/Donut';
import Results from '../models/Results';
import { getDonuts } from '../services/DonutService';
import './Home.css'
import ResultsList from './ResultsList';
import SearchForm from './SearchForm';

const Home = () => {    
    
    const [donuts, setDonuts] = useState<Donut[]>([]);
    const [searchParams] = useSearchParams();
    const term = searchParams.get("term");

    useEffect(()=> {
        console.log("got:"+term);
        if(term){
            getDonuts()
            .then((response)=>setDonuts(response.results));
        }
        else {
            console.log("No search term")
            getDonuts().then((response)=>{setDonuts(response.results)})
        }
    }, [term]);

  return (
    <div className='Main'>
        <SearchForm />
        <ResultsList donuts={donuts}/>
    </div>
  )
};

export default Home;
