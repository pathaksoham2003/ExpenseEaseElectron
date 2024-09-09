import React from 'react'
import Logo from '../assets/ExpenseEase.png?react'

const CompanyLogo = (className) => {
  return <img className={`${className}`} src={Logo} />
}

export default CompanyLogo
