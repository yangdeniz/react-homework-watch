import { useEffect, useState } from 'react';
import moment from 'moment';
import WatchDisplay from './watch-display/watch-display';
import './watch.css';

function Watch(props) {
  const getCurrentTime = () => moment.utc().add(props.timezone, 'h');
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timerId = setTimeout(() => setTime(getCurrentTime()), 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <div className='watch'>
      <span className='watch-name'>{props.name}</span>
      <div className='watch-item'>
        <WatchDisplay hours={time.hour()} minutes={time.minute()} seconds={time.second()} />
        <button className='watch-remove' onClick={() => props.onRemove(props.name)}>x</button>
      </div>
      <span className='watch-time'>{time.format('HH:mm:ss')}</span>
    </div>
  );
}

export default Watch;