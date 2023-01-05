import './emploess-list.css';
import EmploessListItem from '../emploees-list-item/emploees-list-item';

const EmploessList = ({ data, onDelete, onToggleProp }) => {
  const elementsList = data.map((emploee) => {
    const { id, ...items } = emploee;
    return (
      <EmploessListItem
        key={id}
        onDelete={() => onDelete(id)}
        onToggleProp={(event) =>
          onToggleProp(event.currentTarget.getAttribute('data-toggle'), id)
        }
        {...items}
      />
    );
  });

  return <ul className="app-list list-group">{elementsList}</ul>;
};

export default EmploessList;
