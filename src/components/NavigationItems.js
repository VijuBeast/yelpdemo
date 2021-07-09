import React from 'react'
import {Nav, NavLink, NavMenu} from './NavbarElement'

const Navigation = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to='/review'>Write A Review</NavLink>
      </NavMenu>
      <NavMenu>
        <NavLink to='/events'>Events</NavLink>
      </NavMenu>
      <NavMenu>
        <NavLink to='/talk'>Talk</NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Navigation