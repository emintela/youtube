import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

const Home = (props) => {

  // variables to set the category clicked by user and use it on different components
  const [category,setCategory]= useState("Congo RDC Francais Lingala Politique Congolaise")
  
  
  return (
    <>
        <Sidebar sidebar={props.sidebar}
          category = {category}
          setCategory = {setCategory}
        />
        <div className= {props.sidebar ? "container":"large-container"}>
          
          <Feed 
            category={category}
          />
        </div>
    </>
  )
}

export default Home