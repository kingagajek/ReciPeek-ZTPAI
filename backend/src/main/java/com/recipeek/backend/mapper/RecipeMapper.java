package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.RecipeDTO;
import com.recipeek.backend.model.Recipe;
import org.springframework.stereotype.Component;

@Component
public class RecipeMapper {

    public RecipeDTO toDTO(Recipe recipe) {
        RecipeDTO dto = new RecipeDTO();
        dto.setId(recipe.getId());
        dto.setTitle(recipe.getTitle());
        dto.setDescription(recipe.getDescription());
        dto.setCookTime(recipe.getCookTime());

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
