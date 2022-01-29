import React from "react"

const Table = ({ data, columns }) => {
  return <table><thead>{columns.map(({ label }) => <th>{label}</th>)}</thead>
    <tbody>{data.map(dataRow => <tr>{columns.map(({ accessor }) => <td>{dataRow[accessor]}</td>)}</tr>)}</tbody></table>
}

export default Table