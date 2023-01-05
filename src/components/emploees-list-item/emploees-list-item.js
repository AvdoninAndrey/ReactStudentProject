import './emploees-list-item.css';

const EmploeesListItem = (props) => {
  const { nameEmploee, salaryEmploee, increase, like, onDelete, onToggleProp } =
    props;

  let classNames = 'list-group-item d-flex justify-content-between';
  if (increase) {
    classNames += ' increase';
  }
  if (like) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span
        onClick={onToggleProp}
        className="list-group-item-label"
        data-toggle="like"
      >
        {nameEmploee}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={'Зарплата: ' + salaryEmploee + ' P'}
        disabled="disabled"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          onClick={onToggleProp}
          data-toggle="increase"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" onClick={onDelete} className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmploeesListItem;
