import Watch from './watch/watch';
import './watches-list.css';

function WatchesList(props) {
  return (
    <div className='watches-list'>
      {props.items.map(item => <Watch key={item.name} {...item} onRemove={props.onRemove} />)}
    </div>
  )
}

export default WatchesList;