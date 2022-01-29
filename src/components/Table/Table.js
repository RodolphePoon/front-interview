import React, { useState, useEffect } from "react"
import './Table.css'
const Logo = ({ iban }) => {
  const bank = iban.substring(0, 4)

  return <span className={`logo ${bank}`}>{bank}</span>
}

const MAX_PER_PAGE = 2

const Table = ({ data, columns }) => {

  const [showedData, setShowedData] = useState([])
  const [filter, setFilter] = useState({})
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  useEffect(() => {
    const startIndex = (page - 1) * MAX_PER_PAGE
    const endIndex = startIndex + MAX_PER_PAGE

    const filteredData = data.filter(data => {
      const keep = Object.keys(filter).reduce((prevKeep, key) => {
        const regExp = new RegExp(filter[key], 'i');
        const currKeep = !!data[key].match(regExp)
        return prevKeep && currKeep
      }, true)
      return keep
    })
    if (filteredData.length + 1 < endIndex && filteredData.length < data.length) {
      setPage(1)
    }

    const newMaxPage = Math.trunc(filteredData.length / MAX_PER_PAGE) + filteredData.length % MAX_PER_PAGE
    setMaxPage(newMaxPage)
    const newShowedData = filteredData.slice(startIndex, endIndex)
    setShowedData(newShowedData)
  }, [data.length, page, JSON.stringify(filter)])

  const onChange = (key) => (e) => {
    const value = e.target.value
    const newFilter = Object.assign({}, filter, { [key]: value })
    setFilter(newFilter)
  }



  return <>
    <table>
      <thead><th></th>{columns.map(({ label, accessor }) => <th>{label}<input onChange={onChange(accessor)} value={filter[accessor]} /></th>)}</thead>
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