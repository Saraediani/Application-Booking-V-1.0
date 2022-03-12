import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineUserSwitch  } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';



export default function Navbar ()  {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    
      
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='col-12 d-flex justify-content-between navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

            <div className='d-flex ul_right'>
            
                <li class="nav-item1">
               <a class="nav-link active" href="#">UserName</a>
            </li>
           <li class="nav-item1">
            <a class="nav-link" href="#"><AiOutlineUserSwitch size="25" /></a>
           </li>
          

            </div>
        </div>
        <nav className={!sidebar ? 'nav-menu' : 'nav-menu active'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

