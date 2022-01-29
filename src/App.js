import React from 'react';
import './App.css';
import Table from "./components/Table"
import data from "./data.json"

const COLUMNS = ['name', 'status', 'iban', 'balances']
function App() {
  return (
    <div >
      <Table data={data.accounts} columns={COLUMNS} />
    </div>
  );
}

export default App;
