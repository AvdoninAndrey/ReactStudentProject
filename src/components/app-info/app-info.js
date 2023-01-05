import './app-info.css';

const AppInfo = (props) => {
  const { data } = props;
  const countEmploees = data.length;
  const countEmploeesPremia = data.filter((emploee) => emploee.increase).length;

  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании</h1>
      <h2>Общее число сотрудников: {countEmploees}</h2>
      <h2>Премию получат: {countEmploeesPremia}</h2>
    </div>
  );
};
export default AppInfo;
