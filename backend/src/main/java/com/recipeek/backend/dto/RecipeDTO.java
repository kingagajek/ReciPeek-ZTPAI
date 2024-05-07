package com.recipeek.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.hibernate.usertype.CompositeUserType;

import java.util.List;

@Data
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDTO {
    private Integer id;
    private String title;
    private String description;
    private Integer cookTime;
    private Integer servingSize;
    private MealTypeDTO mealType;
    private DifficultyDTO difficulty;
    private CuisineDTO cuisine;
    private List<RecipeIngredientDTO> ingredients;
    private List<InstructionDTO> instructions;
}
