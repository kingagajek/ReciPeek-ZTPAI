import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SortAndFilterButtons from '../../components/SortAndFilterButtons/SortAndFilterButtons';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import classes from './Result.module.css';

export default function Result() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = query
          ? await axios.get(`http://localhost:8080/api/recipes/search?query=${query}`)
          : await axios.get('http://localhost:8080/api/recipes');
        setRecipes(response.data.content || []);
      } catch (error) {
        console.error('Failed to fetch recipes', error);
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, [query]);

  const handleSortChange = (event) => {
    console.log('Sorting:', event.target.value);
  };

  const handleFilterClick = () => {
    console.log('Filters clicked');
  };

  return (
    <div className={classes.mainContainer}>
      <Header />
      <SortAndFilterButtons onSortChange={handleSortChange} onFilterClick={handleFilterClick} />
      <div className={classes.recipeGrid}>
        {Array.isArray(recipes) && recipes.map(recipe => (
          <a key={recipe.id} className={classes.recipeCardLink} href={`/recipe/${recipe.id}`}>
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              image={recipe.pictureUrl}
              rating={recipe.rating}
              cookTime={recipe.cookTime}
              level={recipe.difficulty?.level || 'Unknown'}
              description={recipe.description}
              showDescription={true}
              showFullRating={true}
              backgroundColor="#fff"
              isResultPage={true}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
