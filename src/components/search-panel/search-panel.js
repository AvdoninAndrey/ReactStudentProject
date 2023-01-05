import './search-panel.css';

const SearchPanel = (props) => {
  const { onSearch } = props;

  return (
    <div className="search-panel">
      <input
        className="form-control search-input"
        type="text"
        placeholder="Найти сотрудника"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchPanel;
