import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'

import search from '../../assets/search.png'
import uplaod_icon from '../../assets/upload.png'
import more_icon from'../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import log2 from '../../assets/log2.png'



const Navbar = (props) => {
    const setSidebar = props.setSidebar;
  
    return (
        <nav className="flex-div"> 
            <div className="nav-left flex-div">
                <img src={menu_icon} alt="menu icon" onClick={()=>setSidebar(prev=>!prev)}></img>
                <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 97.75 40"
            width="50"
            height="40"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  fill="#ff0000"
                  d="M93.8 4.91a12.29 12.29 0 00-8.65-8.68C79.66-4 48.86-4 48.86-4s-30.8 0-36.3 1.77A12.29 12.29 0 003.91 4.91C2.14 10.41 2.14 20 2.14 20s0 9.59 1.77 15.09a12.29 12.29 0 008.65 8.68c5.5 1.77 36.3 1.77 36.3 1.77s30.8 0 36.3-1.77a12.29 12.29 0 008.65-8.68c1.77-5.5 1.77-15.09 1.77-15.09s0-9.59-1.77-15.09zM39.16 28.06V11.94L58.32 20z"
                />
              </g>
            </g>
          </svg>
                <h1>Congo<span>Tube !</span></h1>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" name="search" placeholder="Search ... " />
                    <img src={search} alt="search" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={uplaod_icon} alt="upload" />
                <img src={more_icon} alt="more" />
                <img src={notification_icon} alt="notification" />
                <img src={profile_icon} alt="profile" className="user-icon" />
            </div>
        </nav>
    )
}

export default Navbar;
