import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className='js-navbar'>
            <ul>
            <li>
                <NavLink to="/"><span>Day 1</span></NavLink>
            </li>
            <li>
                <NavLink to="day2"><span>Day 2</span></NavLink>
            </li>
            <li>
                <NavLink to="day3"><span>Day 3</span></NavLink>
            </li>
            </ul>
        </nav>
    </>
  )
}
