import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    // const elements = data.map((item, i) => { // где i - номер по порядку (на случай, если id бэкендом не предусмотрен)
    const elements = data.map(item => {

        const {id, ...itemProps} = item; // ...itemProps - деструктуризация оставшихся свойств
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem 
                key={id} // id должен быть уникальным только среди соседей
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, [e.currentTarget.getAttribute('data-toggle')])}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;