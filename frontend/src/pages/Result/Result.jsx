import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortAndFilterButtons from '../../components/SortAndFilterButtons/SortAndFilterButtons';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import classes from './Result.module.css';

export default function Result() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/recipes');
        setRecipes(response.data.content || []);
      } catch (error) {
        console.error('Failed to fetch recipes', error);
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, []);

  const handleSortChange = (event) => {
    console.log('Sorting:', event.target.value);
  };

  const handleFilterClick = () => {
    console.log('Filters clicked');
  };

  return (
    <div className={classes.mainContainer}>
      <Header />
      <SearchBar />
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
