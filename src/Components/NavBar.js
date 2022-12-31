import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
   <nav>
    <Link to='/addloan'>Add Loan</Link>
    <Link to='/search'>Search</Link>
   </nav>
  )
}
