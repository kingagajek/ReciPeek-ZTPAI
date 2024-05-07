package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.NutritionDTO;
import com.recipeek.backend.model.Nutrition;
import org.springframework.stereotype.Component;

@Component
public class NutritionMapper {

    public NutritionDTO toDTO(Nutrition nutrition) {
        NutritionDTO dto = new NutritionDTO();
        dto.setCalories(nutrition.getCalories());
        dto.setFat(nutrition.getFat());
        dto.setSaturatedFat(nutrition.getSaturatedFat());
        dto.setCarbohydrates(nutrition.getCarbohydrates());
        dto.setSugars(nutrition.getSugars());
        dto.setFiber(nutrition.getFiber());
        dto.setProtein(nutrition.getProtein());
        dto.setSalt(nutrition.getSalt());

        return dto;
    }
}
