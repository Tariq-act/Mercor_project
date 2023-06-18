import React from 'react'
import './sidebar.css'
import { ReactComponent as Close } from '../../assets/sidebar-close.svg'
import { ReactComponent as BrandIcon } from '../../assets/brand-logo.svg'


import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg'
import { ReactComponent as MessageIcon } from '../../assets/message-icon.svg'
import { ReactComponent as TaskIcon } from '../../assets/task-icon.svg'
import { ReactComponent as MemberIcon } from '../../assets/member-icon.svg'
import { ReactComponent as Setting } from '../../assets/setting-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'
import { ReactComponent as ThreeDotIcon } from '../../assets/three-dot-icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='header'>
        <span>
          <BrandIcon />
          <h1>
            Project M.
          </h1>
        </span>
        <Close />
      </div>


      <div className="sidebar_content">
        <ul>
          <li><HomeIcon /> <span>Home</span>  </li>
          <li> <MessageIcon /> <span>Messages</span>  </li>
          <li> <TaskIcon /> <span>Tasks</span> </li>
          <li> <MemberIcon /> <span>Members</span> </li>
          <li> <Setting /> <span>Settings</span> </li>
        </ul>
      </div>

      <hr />

      <div className="projects">
        <div className="project_head">
          <p>My Projects</p>
          <AddIcon />
        </div>
        <ul className='project_list'>
          <li>
            <span> <div className='dot dot_1'></div> Mobile</span>
            <ThreeDotIcon />
          </li>
          <li>
            <span><div className='dot dot_2'></div> Website Redesign</span>
            <ThreeDotIcon />
          </li>
          <li>
            <span><div className='dot dot_3'></div> Design System</span>
            <ThreeDotIcon />
          </li>
          <li>
            <span><div className='dot dot_4'></div> Wireframes</span>
            <ThreeDotIcon />
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar