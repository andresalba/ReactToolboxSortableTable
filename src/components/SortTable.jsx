import React, {useState} from 'react';
import MockData from '../MOCK_DATA.json';

export default function SortTable() {
    const [data, setData] = useState(MockData);
    const [order, setOrder] = useState('asc');
    const sorting = (col) => {
        if (order === 'asc') {
            setOrder('desc');
            setData([...data].sort((a, b) => a[col] > b[col] ? 1 : -1));
        } else {
            setOrder('asc');
            setData([...data].sort((a, b) => a[col] < b[col] ? 1 : -1));
        }
    }
  return (
    <div className='container'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th onClick={()=>sorting("first_name")}>First Name</th>
                    <th onClick={()=>sorting("last_name")}>Last Name</th>
                    <th onClick={()=>sorting("email")}>Email</th>
                    <th onClick={()=>sorting("gender")}>Gender</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
