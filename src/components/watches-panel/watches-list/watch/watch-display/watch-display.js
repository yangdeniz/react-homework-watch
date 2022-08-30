import { useEffect, useRef } from 'react';
import './watch-display.css';

function WatchDisplay(props) {
  const hourArrow = useRef();
  const minuteArrow = useRef();
  const secondArrow = useRef();

  const rotateHourArrow = () => {
    const currentHour = props.hours > 12 ? props.hours - 12 : props.hours;
    const currentMinute = props.minutes;
    const angle = currentHour * 30 + currentMinute * 0.5;
    hourArrow.current.style.transform = `rotate(${angle}deg)`;
    hourArrow.current.style.transformOrigin = 'bottom';
  };

  const rotateMinuteArrow = () => {
    const currentMinute = props.minutes;
    const angle = currentMinute * 6;
    minuteArrow.current.style.transform = `rotate(${angle}deg)`;
    minuteArrow.current.style.transformOrigin = 'bottom';
  };

  const rotateSecondArrow = () => {
    const currentSecond = props.seconds;
    const angle = currentSecond * 6;
    secondArrow.current.style.transform = `rotate(${angle}deg)`;
    secondArrow.current.style.transformOrigin = 'bottom';
  };

  useEffect(() => {
    rotateHourArrow();
    rotateMinuteArrow();
    rotateSecondArrow();
  })

  return (
    <div className='watch-display'>
      <div className='watch-display-point watch-display-point-0'></div>
      <div className='watch-display-point watch-display-point-5'></div>
      <div className='watch-display-point watch-display-point-10'></div>
      <div className='watch-display-point watch-display-point-15'></div>
      <div className='watch-display-point watch-display-point-20'></div>
      <div className='watch-display-point watch-display-point-25'></div>
      <div className='watch-display-point watch-display-point-30'></div>
      <div className='watch-display-point watch-display-point-35'></div>
      <div className='watch-display-point watch-display-point-40'></div>
      <div className='watch-display-point watch-display-point-45'></div>
      <div className='watch-display-point watch-display-point-50'></div>
      <div className='watch-display-point watch-display-point-55'></div>
      <div ref={hourArrow} className='watch-arrow watch-arrow-hour'></div>
      <div ref={minuteArrow} className='watch-arrow watch-arrow-minute'></div>
      <div ref={secondArrow} className='watch-arrow watch-arrow-second'></div>
    </div>
  );
}

export default WatchDisplay;