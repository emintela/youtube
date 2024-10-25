import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import game from '../../assets/game_icon.png'

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={sidebar ? 'sidebar' : 'small-sidebar'}>
      <div className='shortcut-links'>
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory('Congo RDC Lingala Politique Congolaise')}>
          <img src={home} alt='' />
          <p>Accueil</p>
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory('Politique RDC politique congolaise lingala francais')}>
          <img src={game} alt='' />
          <p>Politique</p>
        </div>
        <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory('Sports RD Congo football leopards basketball judo')}>
          <img src={sports} alt='' />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory('musique rd congo rumba ngwasuma fally ferree koffi jb werra')}>
          <img src={music} alt='' />
          <p>Musique</p>
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory('Theatre RD Congo Humour RD Congo')}>
          <img src={entertainment} alt='' />
          <p>Theatre</p>
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory('Predications RD Congo Pasteurs RD Congo Eglise RD Congo')}>
          <img src={tech} alt='' />
          <p>Eglises</p>
        </div>
        <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory('Musique chretienne RD Congo')}>
          <img src={music} alt='' />
          <p>Zik Religieuse</p>
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt='' />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory('News Locale RDCongo kinshasa katanga')}>
          <img src={news} alt='' />
          <p>Divers</p>
        </div>
      </div>

      {/* Subscribed List */}
      <hr />
      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className='side-link' onClick={() => setCategory(0)}>
          <img src={jack} alt='Jack' />
          <p>Jack Pie</p>
        </div>
        <div className='side-link' onClick={() => setCategory(0)}>
          <img src={simon} alt='Mr beast' />
          <p>Mr Beast</p>
        </div>
        <div className='side-link' onClick={() => setCategory(0)}>
          <img src={tom} alt='justin bieber' />
          <p>Justin Bieber</p>
        </div>
        <div className='side-link' onClick={() => setCategory(0)}>
          <img src={megan} alt='cafts' />
          <p>5-Minute Crafts</p>
        </div>
        <div className='side-link' onClick={() => setCategory(0)}>
          <img src={cameron} alt='nas daily' />
          <p>Nas Daily</p>
        </div>
      </div>

      {/* Sticky bottom bar on small devices */}
      <div className="bottom-bar">
        <img src={home} alt="home" onClick={() => setCategory('Congo RDC Lingala Politique Congolaise')} />
        <img src={game} alt="game" onClick={() => setCategory('Politique RDC politique congolaise lingala francais')} />
        <img src={sports} alt="sports" onClick={() => setCategory('Sports RD Congo football leopards basketball judo')} />
        <img src={music} alt="music" onClick={() => setCategory('musique rd congo rumba ngwasuma fally ferree koffi jb werra')} />
        <img src={news} alt="news" onClick={() => setCategory('News Locale RDCongo kinshasa katanga')} />
      </div>
    </div>
  )
}

export default Sidebar
