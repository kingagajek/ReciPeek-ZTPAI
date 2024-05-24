package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.*;
import com.recipeek.backend.dto.request.RecipeRequest;
import com.recipeek.backend.model.*;
import com.recipeek.backend.service.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class RecipeMapper {

    @Autowired
    private RatingMapper ratingMapper;

    public RecipeDTO toDTO(Recipe recipe) {
        RecipeDTO dto = new RecipeDTO();
        dto.setId(recipe.getId());
        dto.setTitle(recipe.getTitle());
        dto.setDescription(recipe.getDescription());
        dto.setCookTime(recipe.getCookTime());
        dto.setServingSize(recipe.getServingSize());
        dto.setDifficulty(new DifficultyDTO(recipe.getDifficulty().getId(), recipe.getDifficulty().getLevel()));
        dto.setMealType(new MealTypeDTO(recipe.getMealType().getId(), recipe.getMealType().getName()));
        dto.setCuisine(new CuisineDTO(recipe.getCuisine().getId(), recipe.getCuisine().getName()));
        dto.setDiet(new DietDTO(recipe.getDiet().getId(), recipe.getDiet().getType()));
        if (recipe.getRatings() != null) {
            dto.setRatings(recipe.getRatings().stream()
                    .map(ratingMapper::toDTO)
                    .collect(Collectors.toList()));
        }
        dto.setPictureUrl(FileUtils.readFile(recipe.getPictureUrl()));
        return dto;
    }

    public Recipe toEntity(RecipeDTO recipeDTO) {
        Recipe recipe = new Recipe();
        recipe.setId(recipeDTO.getId());
        recipe.setTitle(recipeDTO.getTitle());
        recipe.setDescription(recipeDTO.getDescription());
        recipe.setCookTime(recipeDTO.getCookTime());
        recipe.setServingSize(recipeDTO.getServingSize());
        if (recipeDTO.getDifficulty() != null) {
            Difficulty difficulty = new Difficulty();
            difficulty.setId(recipeDTO.getDifficulty().getId());
            difficulty.setLevel(recipeDTO.getDifficulty().getLevel());
            recipe.setDifficulty(difficulty);
        }

        if (recipeDTO.getMealType() != null) {
            MealType mealType = new MealType();
            mealType.setId(recipeDTO.getMealType().getId());
            mealType.setName(recipeDTO.getMealType().getName());
            recipe.setMealType(mealType);
        }

        if (recipeDTO.getCuisine() != null) {
            Cuisine cuisine = new Cuisine();
            cuisine.setId(recipeDTO.getCuisine().getId());
            cuisine.setName(recipeDTO.getCuisine().getName());
            recipe.setCuisine(cuisine);
        }

        if (recipeDTO.getDiet() != null) {
            Diet diet = new Diet();
            diet.setId(recipeDTO.getDiet().getId());
            diet.setType(recipeDTO.getDiet().getType());
            recipe.setDiet(diet);
        }

        return recipe;
    }

    public Recipe toEntity(RecipeRequest recipeRequest) {
        return new Recipe()
                .setTitle(recipeRequest.getTitle())
                .setDescription(recipeRequest.getDescription())
                .setCookTime(recipeRequest.getCookTime())
                .setServingSize(recipeRequest.getServingSize());
    }
}