import React from "react";
import './table.css';
import TableHead from './TableHead';
import TableRow from './TableRow'

export default function Table({column=[], data = []}) {
  return (
    <div>
      <table style={{width:"100%"}}>
          <TableHead  column = {column}/>
          {
              data && data.length ? data.map(rows => <TableRow rows = {rows}/>): ''
          }
      </table>
    </div>
  );
}
