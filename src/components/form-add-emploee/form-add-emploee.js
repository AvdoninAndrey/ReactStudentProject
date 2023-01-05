import { Component } from 'react';
import './form-add-emploee.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEmploee: '',
      salaryEmploee: '',
    };
  }
  onChangeValue = (event) => {
    if (event.target.name === 'salaryEmploee') {
      event.target.value = event.target.value.replace(/^0/i, '');
      event.target.value = event.target.value.replace(/\D/gi, '');
    } else if (event.target.name === 'nameEmploee') {
      event.target.value = event.target.value.replace(
        /[^A-Z | ^А-Я | \s]/gi,
        ''
      );
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.nameEmploee, this.state.salaryEmploee);
    this.setState(() => ({
      nameEmploee: '',
      salaryEmploe: '',
    }));
  };

  render() {
    const { nameEmploee, salaryEmploee } = this.state;

    return (
      <div className="form-add-emploee">
        <h3>Добавьте нового сотрудника</h3>
        <form className="d-flex add-form" onSubmit={this.onSubmitForm}>
          <input
            className="form-control new-post-label"
            type="text"
            placeholder="ФИО сотрудника"
            name="nameEmploee"
            value={nameEmploee}
            onChange={this.onChangeValue}
          />
          <input
            className="form-control new-post-label"
            type="text"
            placeholder="Зарплата в рублях"
            name="salaryEmploee"
            value={salaryEmploee}
            onChange={this.onChangeValue}
          />

          <button className="btn btn-outline-light" type="submit">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
