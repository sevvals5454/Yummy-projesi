import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../foto/makarna.webp';
import '../styles/Home.css';
export default function Home() {
  return (
    <div className='mainPage'
      style={{ backgroundImage: `url(${Banner})` }}>
      <div className='order'>
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  )
}
