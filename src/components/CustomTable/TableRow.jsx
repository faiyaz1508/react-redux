import React from 'react'
import './table.css';

export default function TableRow({rows = {}}) {
    console.log(Object.keys(rows).length)
    return (
       <tr>
           {
               Object.keys(rows).length ? Object.keys(rows).map(row => <td>{rows[row]}</td>) : ""
           }
       </tr>
    )
}
