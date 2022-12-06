import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import portfolioData from '../../datat/portfoliio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
          <p>Here is and overview of the projects.</p>

          <div className="item">
            <img src="../../assets/images/football.png" alt="" />
            <h2 className="portfolio-page">Bordem Bakery</h2>
          </div>

          {/* <div>{renderPortfolio()}</div> */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
