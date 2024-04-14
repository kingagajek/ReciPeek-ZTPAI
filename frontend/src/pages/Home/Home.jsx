import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import chickenwWrap from '../../assets/images/chicken-wrap.jpg'
import star from '../../assets/icons/star.png'
import time from '../../assets/icons/time.svg'
import difficulty from '../../assets/icons/difficulty.svg'

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className="main-container">
        <div className="recommended-recipes">
          <h2 className="recipe-grid-title">Recommended</h2>
          <div className="recipe-grid">
            <div className="recipe-card">
              <img className="recipe-thumbnail" src={chickenwWrap} alt="Chicken Wrap" />
              <div className="recipe-meta">
                <div className="recipe-title">
                  <div className="recipe-rating">
                    <img className="star-icon" src={star} alt="star-icon" />
                    <span>4.5</span>
                  </div>
                  <h3>Chicken Wrap</h3>
                </div>
                <div className="recipe-info">
                  <div className="time-info">
                    <img className="recipe-info-icon" src={time} alt="time-icon" />
                    <span>30 mins</span>
                  </div>
                  <div className="difficulty-info">
                    <img className="recipe-info-icon" src={difficulty} alt="difficulty-icon" />
                    <span>Easy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="recent-recipes">
          <h2 className="recipe-grid-title">Most recent recipes</h2>
          <div className="recipe-grid">
          </div>
        </div>
      </div>
    </>
  );
}
