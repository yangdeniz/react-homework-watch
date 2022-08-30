import { useState } from 'react';
import './watch-form.css';

function WatchForm(props) {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState('');

  const isTimezoneValid = () => timezone >= -12 && timezone <= 12;

  const onClick = () => {
    if (!name || !isTimezoneValid())
      return;
    props.onAdd({name, timezone});
    setName('');
    setTimezone('');
  }

  return (
    <div className='watches-form'>
      <div className='watches-input'>
        <label htmlFor='name'>Название</label>
        <input id='name' type='text' value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className={`watches-input ${isTimezoneValid() ? '' : ' invalid'}`}>
        <label htmlFor='timezone'>Временная зона</label>
        <input id='timezone' type='number' min='-12' max='12' value={timezone} onChange={e => setTimezone(e.target.value)} />
      </div>
      <button className='watches-btn' onClick={onClick}>Добавить</button>
    </div>
  )
}

export default WatchForm;