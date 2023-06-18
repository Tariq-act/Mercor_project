import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { ReactComponent as CalenderIcon } from '../../assets/nav/calendar-2.svg'
import { ReactComponent as MessageNotify } from '../../assets/nav/message-question.svg'
import { ReactComponent as Notification } from '../../assets/nav/notification.svg'
import { ReactComponent as ArrowDown } from '../../assets/nav/arrow-down.svg'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="search_input">
        <SearchIcon className='icon' />
        <input type="text" name="search" id="search" placeholder='Search for anything...' />
      </div>

      <div className="nav_content">
        <ul>
          <li className='icon' > <CalenderIcon /> </li>
          <li className='icon' > <MessageNotify /> </li>
          <li className='icon' > <Notification /> </li>
        </ul>

        <div className="profile_info">
          <div>
            <h1>Anima Agrawal</h1>
            <p>U.P, India</p>
          </div>
          <div className="img-profile">
            <img src={require("../../assets/nav/profileImage.png")} alt="" />
            <ArrowDown />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Navbar