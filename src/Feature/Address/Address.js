import _ from "lodash"
import React, { useEffect, useState } from "react"
import { search } from "./Services/service"

const Address = () => {

  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedResult, setSelectedResult] = useState({})

  useEffect(() => {
    const getData = async () => {
      const res = await search(query)
      setResults(res.features)
    }
    if (query)
      getData()

  }, [query])

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  return <>
    <div style={{ display: "flex", flexDirection: "row", padding: "30px", width: "800px" }}>
      <form className="form-group" style={{ margin: '30px 30px 0 30px', flex: 1 }}>
        <input type='text' style={{ marginBottom: "10px", width: "100%" }} onChange={onChange} />
        {!!results.length &&
          <div className="card card-body card-text">
            {results.map((result) => <div onClick={() => { setSelectedResult(result) }}>{result.properties.label}</div>)}
          </div>
        }
      </form>
      <div style={{ flex: 1 }}>
        {!_.isEmpty(selectedResult) &&
          <div className="card card-body card-text" style={{ border: 'none', backgroundColor: "rgb(245,245,245)" }}>
            {_.chain(selectedResult).get('properties').pick(['housenumber', 'street', 'postcode', 'city']).map((value, key) => <div><span style={{ color: "#6540FE" }}>{key}</span> : <b>{value}</b></div>).value()}

          </div>
        }
      </div>
    </div>
  </>
}
export default Address