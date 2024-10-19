import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'

const Feed = () => {
  return (
    <div className='feed'>
       
        <Link to={'video/25/430'} className="card">
            <img src={thumbnail1} alt="thumbnail" />
            <h2>Best Movie right now</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>
        
        <Link to={'video/25/430'} className="card">
            <img src={thumbnail2} alt="thumbnail" />
            <h2>Best Movie right now</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>
        <Link to={'video/25/430'} className="card">
            <img src={thumbnail3} alt="thumbnail" />
            <h2>Best Movie right now</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>
        <Link to={'video/25/430'} className="card">
            <img src={thumbnail4} alt="thumbnail" />
            <h2>Best Movie right now</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>
        <Link to={'video/25/430'} className="card">
            <img src={thumbnail5} alt="thumbnail" />
            <h2>Best Movie right now</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>
        <Link to={'video/25/430'} className="card">
            <img src={thumbnail6} alt="thumbnail" />
            <h2>Best Movie right now</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>
        <Link to={'video/25/430'} className="card">
            <img src={thumbnail7} alt="thumbnail" />
            <h2>Best Movie right now</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>
        <Link to={'video/25/430'} className="card">
            <img src={thumbnail8} alt="thumbnail" />
            <h2>Best Movie right now</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>
            
       
        

    </div>
  )
}

export default Feed