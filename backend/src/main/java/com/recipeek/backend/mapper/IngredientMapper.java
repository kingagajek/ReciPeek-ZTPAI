package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.IngredientDTO;
import com.recipeek.backend.model.Ingredient;
import org.springframework.stereotype.Component;

@Component
public class IngredientMapper {

    public IngredientDTO toDTO(Ingredient ingredient) {
        if (ingredient == null) {
            return null;
        }
        IngredientDTO dto = new IngredientDTO();
        dto.setId(ingredient.getId());
        dto.setName(ingredient.getName());
        return dto;
    }

    public Ingredient toEntity(IngredientDTO ingredientDTO) {
        if (ingredientDTO == null) {
            return null;
        }
        Ingredient ingredient = new Ingredient();
        ingredient.setId(ingredientDTO.getId());
        ingredient.setName(ingredientDTO.getName());
        return ingredient;
    }

}