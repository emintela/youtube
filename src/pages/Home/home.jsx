import React, { useState, useEffect } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import { useParams } from 'react-router-dom'

const Home = (props) => {
  const { query } = useParams() // Get the search query from the URL
  const [category, setCategory] = useState(query || "Congo RDC Lingala Politique Congolaise") // Default category

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
          category={category} // Pass category to Feed for search
        />
      </div>
    </>
  )
}

export default Home
