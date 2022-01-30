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
    <div>

      <form >
        <input type='text' onChange={onChange} />
        {!!results.length &&
          <div >
            {results.map((result) => <div onClick={() => { setSelectedResult(result) }}>{result.properties.label}</div>)}
          </div>
        }
      </form>
      <div style={{ flex: 1 }}>
        {!_.isEmpty(selectedResult) &&
          <div>
            {_.chain(selectedResult).get('properties').pick(['housenumber', 'street', 'postcode', 'city']).map((value, key) => <div>{key} : {value}</div>).value()}

          </div>
        }
      </div>


    </div>
  </>
}
export default Address