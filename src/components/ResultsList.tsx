import Donut from '../models/Donut';
import Result from './Result';
import './ResultsList.css'

interface Props {
    donuts: Donut[];
}

const ResultsList = ({donuts}: Props) => {
  return (
    <div className='ResultsList'>
        <ul>
            {donuts.map((donut)=> (
                <Result donut={donut} key={donut.id}/>
            ))}
        </ul>
    </div>
  )
};

export default ResultsList;
