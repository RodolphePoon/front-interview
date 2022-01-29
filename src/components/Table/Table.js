import React from "react"
import './Table.css'

const Logo = ({ iban }) => {
  const bank = iban.substring(0, 4)

  return <span className={`logo ${bank}`}>{bank}</span>
}

const Table = ({ data, columns }) => {
  return <table><thead><th></th>{columns.map(({ label }) => <th>{label}</th>)}</thead>
    <tbody>{data.map(dataRow => <tr><td><Logo iban={dataRow.iban} /></td>{columns.map(({ accessor }) => <td>{dataRow[accessor]}</td>)}</tr>)}</tbody></table>
}

export default Table