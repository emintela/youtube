import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

const home = (props) => {
  return (
    <>
        <Sidebar sidebar={props.sidebar}/>
        <div className= {props.sidebar ? "container":"large-container"}>
          
          <Feed/>
        </div>
    </>
  )
}

export default home