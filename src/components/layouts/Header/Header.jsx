import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <div className="header">
            <h1>Forms | Esteban</h1>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}
