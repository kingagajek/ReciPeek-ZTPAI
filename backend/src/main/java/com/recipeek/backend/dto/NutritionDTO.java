package com.recipeek.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NutritionDTO {
    private Double kcal;
    private Double fat;
    private Double saturates;
    private Double carbs;
    private Double sugars;
    private Double fiber;
    private Double protein;
    private Double salt;
}