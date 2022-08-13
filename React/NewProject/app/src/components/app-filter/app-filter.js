// import { Component } from 'react'
// import './app-filter.css'

// class AppFilter extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             filter: 'all'
//         }
//     }
    
//     onFilterChange = (e) => {
//         this.setState({
//             filter: e.target.name
//         })
//         this.props.onUpdateFilter(e.target.name);
//     }

//     render() {
//         const {filter} = this.state;
//         return ( // также встроенные в bootstrap классы
//         <div className="btn-group"> 
//             <button
//             className={"btn " + (filter === 'all' ? 'btn-light' : 'btn-outline-light')}
//             type='button'
//             name='all'
//             onClick={this.onFilterChange}>
//                 Все сотрудники
//             </button>
//             <button
//             className={"btn " + (filter === 'rise' ? 'btn-light' : 'btn-outline-light')}
//             type='button'
//             name='rise'
//             onClick={this.onFilterChange}>
//                 Сотрудники на повышение
//             </button>
//             <button
//             className={"btn " + (filter === '$' ? 'btn-light' : 'btn-outline-light')}
//             type='button'
//             name='$'
//             onClick={this.onFilterChange}>
//                 З/П больше 1000$
//             </button>

//         </div>
//     )
//     }
// }

// export default AppFilter;
import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотруднки'},
        {name: 'rise', label: 'Сотрудники на повышение'},
        {name: '$', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
            className={`btn ${clazz}`}
            type='button'
            name={name}
            onClick={() => props.onUpdateFilter(name)}>
                {label}
            </button>
        )
    })

    return ( // также встроенные в bootstrap классы
        <div className="btn-group"> 
            {buttons}
        </div>
    )
}

export default AppFilter;