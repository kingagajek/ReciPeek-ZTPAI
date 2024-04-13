package com.recipeek.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class RecipeIngredientDTO {
//    private Integer recipeId;
    private IngredientDTO ingredient;
    private Double quantity;
    private String measurement;
}