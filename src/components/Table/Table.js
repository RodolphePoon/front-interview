import React from "react"

const Table = ({ data, columns }) => {
  return <table><thead>{columns.map(column => <th>{column}</th>)}</thead>
    <tbody>{data.map(dataRow => <tr>{columns.map(column => <td>{JSON.stringify(dataRow[column])}</td>)}</tr>)}</tbody></table>
}

export default Table