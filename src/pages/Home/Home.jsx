import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import './Home.css'; //

const Home = (props) => {
  const [category, setCategory] = useState("Congo RDC Lingala Politique Congolaise");
  const { searchQuery } = useParams(); // Retrieve search query from URL
 

    
  

  return (
    <>
      
      <Sidebar 
        sidebar={props.sidebar}
        category={category}
        setCategory={setCategory}

        
      />
      <div className={props.sidebar ? "container" : "large-container"}>
        <Feed 
          category={category} 
          // here the category can be passed as props to be used by other components
          searchQuery={searchQuery}
        />
      </div>
    </>
  )
}

export default Home
