import { Link } from 'react-router-dom';
import Donut from '../models/Donut';
import './Result.css'

interface Props {
    donut: Donut;
  }
  
const Result = ({donut}: Props) => {
  return (
    <li className='Result'>
        <h2>{donut.name}</h2>
        <Link to={`/gifs/${encodeURIComponent(donut.id)}`}>
        </Link>
    </li>
  )
};

export default Result;
