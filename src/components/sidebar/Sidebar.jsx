import React, { useState } from 'react'
import './sidebar.css'
import { ReactComponent as Close } from '../../assets/sidebar/sidebar-close.svg'
import { ReactComponent as BrandIcon } from '../../assets/sidebar/brand-logo.svg'


import { ReactComponent as HomeIcon } from '../../assets/sidebar/home-icon.svg'
import { ReactComponent as MessageIcon } from '../../assets/sidebar/message-icon.svg'
import { ReactComponent as TaskIcon } from '../../assets/sidebar/task-icon.svg'
import { ReactComponent as MemberIcon } from '../../assets/sidebar/member-icon.svg'
import { ReactComponent as Setting } from '../../assets/sidebar/setting-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/sidebar/add-icon.svg'
import { ReactComponent as ThreeDotIcon } from '../../assets/sidebar/three-dot-icon.svg'
import { ReactComponent as Light } from '../../assets/sidebar/light.svg'
import { ReactComponent as Lamp } from '../../assets/sidebar/lamp-on.svg'

const Sidebar = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const listItems = [
    { id: 1, title: 'Mobile' },
    { id: 2, title: 'Website Redesign' },
    { id: 3, title: 'Design System' },
    { id: 4, title: 'Wireframes' },
  ];
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
          {
            listItems.map((item, index) => (<li key={item.id} onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}>
              <span> <div className={`dot dot_${index + 1}`}></div> {item.title}</span>
              {activeIndex === item.id && <ThreeDotIcon />}
            </li>))
          }
        </ul>
      </div>


      <div className='custom_block' >
        <div className='circle' >
          <Light className='light_icon' />
        </div>
        <div className='block_content'>
          <h3>Thoughts Time</h3>
          <p>
            We don’t have any notice for you, till then you can share your thoughts with your peers.
          </p>
          <button>Write a message</button>
        </div>
      </div>

    </div>
  )
}

export default Sidebar