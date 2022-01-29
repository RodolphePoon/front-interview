import React, { useState, useEffect } from "react"
import Logo from "../Logo"
import './Table.css'


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
      <thead><th key='logo'></th>{columns.map(({ label, accessor }) => <th key={accessor}>{label}<input onChange={onChange(accessor)} value={filter[accessor]} /></th>)}</thead>
      <tbody>
        {showedData.map((account, i) => {
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
            <tr key={i} className={type}><td key={`${i} logo`}><Logo iban={account.iban} /></td>{columns.map(
              ({ accessor }) => (<td key={`${i} ${accessor}`}>{account[accessor]}</td>)
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