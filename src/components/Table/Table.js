import React from "react"
import './Table.css'

const Logo = ({ iban }) => {
  const bank = iban.substring(0, 4)

  return <span className={`logo ${bank}`}>{bank}</span>
}

const Table = ({ data, columns }) => {
  return <table>
    <thead><th></th>{columns.map(({ label }) => <th>{label}</th>)}</thead>
    <tbody>
      {data.map((dataRow) => {
        let type = ''
        if (dataRow.status === 'blocked') {
          type = 'blocked'
        }
        if (!dataRow.iban.match('FR')) {
          type = 'foreign'
        }
        if (dataRow.balance.match('-')) {
          type = 'negative'
        }

        return (
          <tr className={type}><td><Logo iban={dataRow.iban} /></td>{columns.map(
            ({ accessor }) => (<td>{dataRow[accessor]}</td>)
          )}
          </tr>)
      }
      )}
    </tbody>
  </table>
}

export default Table