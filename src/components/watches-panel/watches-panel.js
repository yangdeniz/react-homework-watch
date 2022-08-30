import { useState } from 'react';
import WatchForm from './watch-form/watch-form';
import WatchesList from './watches-list/watches-list';

function WatchesPanel() {
    const [watches, setWatches] = useState([]);

    const addWatch = watch => setWatches(prev => prev.some(x => x.name === watch.name)
      ? prev.map(x => x.name === watch.name ? watch : x)
      : [...prev, watch]);
    const removeWatch = name => setWatches(prev => prev.filter(watch => watch.name !== name));

    return (
      <div className='watch-panel'>
        <WatchForm onAdd={addWatch} />
        <WatchesList items={watches} onRemove={removeWatch} />
      </div>
    );
}

export default WatchesPanel;