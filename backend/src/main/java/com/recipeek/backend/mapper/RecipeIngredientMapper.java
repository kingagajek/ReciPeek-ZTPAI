package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.RecipeIngredientDTO;
import com.recipeek.backend.model.RecipeIngredient;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class RecipeIngredientMapper {
    @Autowired
    private IngredientMapper ingredientMapper;

    public RecipeIngredientDTO toDTO(RecipeIngredient recipeIngredient) {
        RecipeIngredientDTO dto = new RecipeIngredientDTO();
        dto.setIngredient(ingredientMapper.toDTO(recipeIngredient.getIngredient()));
        dto.setQuantity(recipeIngredient.getQuantity());
        dto.setMeasurement(recipeIngredient.getMeasurement());
        return dto;
    }
}