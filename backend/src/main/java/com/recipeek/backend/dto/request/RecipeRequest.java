package com.recipeek.backend.dto.request;

import com.recipeek.backend.dto.NutritionDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import com.recipeek.backend.dto.RecipeIngredientDTO;
import com.recipeek.backend.dto.InstructionDTO;

import java.util.List;

@Data
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class RecipeRequest {
    private Integer id;
    private String title;
    private String description;
    private Integer cookTime;
    private Integer servingSize;
    private Integer mealTypeId;
    private Integer difficultyId;
    private Integer cuisineId;
    private List<RecipeIngredientRequest> ingredients;
    private List<InstructionDTO> instructions;
    private NutritionDTO nutrition;
}
