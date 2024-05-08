package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.*;
import com.recipeek.backend.model.Recipe;
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
        if (recipe.getRatings() != null) {
            dto.setRatings(recipe.getRatings().stream()
                    .map(ratingMapper::toDTO)
                    .collect(Collectors.toList()));
        }
        return dto;
    }

    public Recipe toEntity(RecipeDTO recipeDTO) {
        Recipe recipe = new Recipe();
        recipe.setId(recipeDTO.getId());
        recipe.setTitle(recipeDTO.getTitle());
        recipe.setDescription(recipeDTO.getDescription());
        recipe.setCookTime(recipeDTO.getCookTime());

        return recipe;
    }
}
