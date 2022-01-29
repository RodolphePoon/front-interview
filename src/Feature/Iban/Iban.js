import React from 'react';
import Table from "./components/Table"
import rawData from "../../data.json"
import _ from "lodash"


const parseData = (data) => data.map((d) => {

  const parsed = _.chain(d).pick(['name', 'status', 'iban']).value()
  parsed.balance = _.chain(d).get('balances.0.balanceAmount').map().join(' ').replace('EUR', '€').value()
  return parsed
})
const COLUMNS = [{ label: "Nom de compte", accessor: "name" }, { label: "Status du compte", accessor: "status" }, { label: "IBAN du compte", accessor: "iban" }, { label: "Balance du compte", accessor: "balance" }]
function Iban() {
  const data = parseData(rawData.accounts)
  return (
    <div >
      <Table data={data} columns={COLUMNS} />
    </div>
  );
}

export default Iban;
