import React from "react"
import './Logo.css'
const Logo = ({ iban }) => {
  const bank = iban.substring(0, 4)
  return <span className={`logo ${bank}`}>{bank}</span>
}
export default Logo