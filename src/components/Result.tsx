import { Link } from 'react-router-dom';
import Donut from '../models/Donut';
import './Result.css'

interface Props {
    donut: Donut;
  }
  
const Result = ({donut}: Props) => {
  return (
    <li className='Result'>
        <Link to={`/${encodeURIComponent(donut.id)}`}>        
          <p>{donut.name}</p>
        </Link>
    </li>
  )
};

export default Result;
