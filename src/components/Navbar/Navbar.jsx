import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import uplaod_icon from '../../assets/upload.png'
import more_icon from'../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const Navbar = (props) => {
    const setSidebar = props.setSidebar
  
    return (

    <nav className="flex-div"> 
        <div className="nav-left flex-div">
            <img src={menu_icon} alt="menu icon" onClick={()=>setSidebar(prev=>prev===false?true:false)}></img>
            <img src={logo} alt="logo"></img>
            
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                     <input type="text" name="search" placeholder="Search ... ">
                    
                    </input>
                    <img src={search} alt="search"></img>
            </div>
            
        </div>

        <div className="nav-right" flex-div>
            <img src={uplaod_icon} alt="uplaod"></img>
            <img src={more_icon} alt="more"></img>
            <img src={notification_icon} alt="notification"></img>
            <img src={profile_icon} alt="profile" className='user-icon'></img>

        </div>
    </nav>
  )
}

export default Navbar