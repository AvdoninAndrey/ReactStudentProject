import { Component } from 'react';

import './app-filter.css';

import btnsFilters from './filters';

class AppFilter extends Component { 

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {filterNameActive, onUpdateFilter} = this.props;
       console.log(filterNameActive);
        const buttonsFiltres = btnsFilters.map(btn => {
            const clazz = (btn.name === filterNameActive) ? 'btn btn-light' : 'btn btn-outline-light';
            return (
                <button
                    type="button"
                    className={clazz}
                    name={btn.name}
                    key={btn.name}
                    onClick={() => onUpdateFilter(btn.name)}>
                    {btn.labelText}
                </button>
            ) 
          }
        )
        return (
            <div className="app-filter">
              {buttonsFiltres}
            </div>
        )
    }
}

export default AppFilter;