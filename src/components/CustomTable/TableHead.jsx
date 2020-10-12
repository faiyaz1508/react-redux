import React from 'react'
import './table.css'

export default function TableHead(column = []) {
    return (
        <thead>
            {
              column.column.length ? column.column.map(heading => <th>{heading}</th>) : ''
            }
        </thead>
    )
}
