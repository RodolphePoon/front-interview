import React, { useState, useEffect } from "react"
import './Table.css'
const Logo = ({ iban }) => {
  const bank = iban.substring(0, 4)

  return <span className={`logo ${bank}`}>{bank}</span>
}

const MAX_PER_PAGE = 2

const Table = ({ data, columns }) => {

  const [showedData, setShowedData] = useState([])

  const [page, setPage] = useState(1)
  const maxPage = Math.trunc(data.length / MAX_PER_PAGE) + data.length % MAX_PER_PAGE



  useEffect(() => {
    const startIndex = (page - 1) * MAX_PER_PAGE
    const endIndex = startIndex + MAX_PER_PAGE
    const newShowedData = data.slice(startIndex, endIndex)
    setShowedData(newShowedData)
  }, [data.length, page])




  return <>
    <table>
      <thead><th></th>{columns.map(({ label }) => <th>{label}</th>)}</thead>
      <tbody>
        {showedData.map((account) => {
          let type = ''
          if (account.status === 'blocked') {
            type = 'blocked'
          }
          if (!account.iban.match('FR')) {
            type = 'foreign'
          }
          if (account.balance.match('-')) {
            type = 'negative'
          }

          return (
            <tr className={type}><td><Logo iban={account.iban} /></td>{columns.map(
              ({ accessor }) => (<td>{account[accessor]}</td>)
            )}
            </tr>)
        }
        )}
      </tbody>
    </table>
    <button disabled={page === 1} onClick={() => setPage(page - 1)}>-</button>
    <button disabled={page === maxPage} onClick={() => setPage(page + 1)}>+</button>
    <span>Page number {page}</span>
  </>
}

export default Table