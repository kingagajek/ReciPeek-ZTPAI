package com.recipeek.backend.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class RecipeIngredientRequest {
    private Integer ingredientId;
    private Double quantity;
    private String measurement;
}
