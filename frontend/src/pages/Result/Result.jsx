import React from 'react';
import './Result.css';
import chickenwWrap from '../../assets/images/chicken-wrap.jpg'
import star from '../../assets/icons/star.png'
import time from '../../assets/icons/time.svg'
import difficulty from '../../assets/icons/difficulty.svg'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Result() {
  return (
    <div className="main-container">
        <Header />
        <SearchBar />
      <div className="option-buttons">
        <select className="sort-button" name="sort" id="sort">
          <option value="rating-DESC">Rating: highest to lowest</option>
          <option value="rating-ASC">Rating: lowest to highest</option>
          <option value="time-DESC">Preparation time: highest to lowest</option>
          <option value="time-ASC">Preparation time: lowest to highest</option>
        </select>
        <button className="filter-button">Filters</button>
      </div>

      <div className="recipe-grid">
        <a className="recipe-card-link" href="/recipe?recipe_id=1">
          <div className="recipe-card">
            <img className="recipe-picture" src={chickenwWrap} alt="Chicken wrap" />
            <div className="recipe-meta">
              <h3 className="recipe-title">Recipe name</h3>
              <p className="recipe-description">Description</p>
              <div className="recipe-info">
                <div className="time-info">
                  <img className="recipe-info-icon" src={time} alt="time-icon" />
                  <span> 30 mins</span>
                </div>
                <div className="difficulty-info">
                  <img className="recipe-info-icon" src={difficulty} alt="difficulty-icon" />
                  <span>easy</span>
                </div>
              </div>
              <div className="recipe-rating">
                <img className="star-icon" src={star} alt="star-icon" />
                <span>4.5</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
