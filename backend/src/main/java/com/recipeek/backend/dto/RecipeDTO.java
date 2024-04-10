package com.recipeek.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

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
    private Integer mealTypeId;
    private Integer difficultyId;
    private Integer cuisineId;
}
