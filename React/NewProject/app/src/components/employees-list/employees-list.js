import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => {

    // const elements = data.map((item, i) => { // где i - номер по порядку (на случай, если id бэкендом не предусмотрен)
    const elements = data.map(item => {

        const {id, ...itemProps} = item; // ...itemProps - деструктуризация оставшихся свойств
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem key={id} {...itemProps}/> // id должен быть уникальным только среди соседей
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;