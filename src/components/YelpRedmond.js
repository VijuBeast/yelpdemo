import React from 'react'
import {Nav, NavLink, NavMenu} from './NavbarElement'

const YelpRedmond = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to='/review'>San Francisco</NavLink>
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

export default YelpRedmond