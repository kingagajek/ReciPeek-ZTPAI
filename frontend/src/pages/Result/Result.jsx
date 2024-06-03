import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SortButton from '../../components/SortButton/SortButton';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import classes from './Result.module.css';

export default function Result() {
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('id');
  const [order, setOrder] = useState('ASC');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  const fetchRecipes = async () => {
    const params = new URLSearchParams();

    for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
            const value = filters[key];

            if (Array.isArray(value)) {
                value.forEach(val => params.append(key, val));
            } else {
                params.append(key, value);
            }
        }
    }

    const filtersParams = params.toString();
    try {
      const response = query
        ? await axios.get(`http://localhost:8080/api/recipes/search?query=${query}&${filtersParams}&sort=${sort}&order=${order}`)
        : await axios.get('http://localhost:8080/api/recipes', { params: { ...filters, sort } });
      setRecipes(response.data.content || []);
    } catch (error) {
      console.error('Failed to fetch recipes', error);
      setRecipes([]);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [query, filters, sort, order]);

  const handleSortChange = (event) => {
    setSort(event.target.value.split("-")[0]);
    setOrder(event.target.value.split("-")[1]);
  };

  const handleFilterChange = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  return (
    <>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.sortAndFilterButtons}>
          <SortButton onSortChange={handleSortChange} />
          <FilterMenu onApplyFilters={handleFilterChange} />
        </div>
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
    </>
  );
}