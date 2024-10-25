import React, { useState, useEffect } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import { useParams } from 'react-router-dom'

const Home = (props) => {
  const { query } = useParams() 
  const [category, setCategory] = useState(query || "Congo RDC Lingala Politique Congolaise") // Default category to some congolese words

  // Update category when query changes
  useEffect(() => {
    if (query) {
      setCategory(query)
    }
  }, [query])

  return (
    <>
      <Sidebar 
        sidebar={props.sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={props.sidebar ? "container" : "large-container"}>
        <Feed 
          category={category} // here the category can be passed as props to be used by other components
        />
      </div>
    </>
  )
}

export default Home
