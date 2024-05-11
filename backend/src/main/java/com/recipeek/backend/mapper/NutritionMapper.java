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
    public Nutrition toEntity(NutritionDTO dto) {
        Nutrition nutrition = new Nutrition();
        nutrition.setCalories(dto.getCalories());
        nutrition.setFat(dto.getFat());
        nutrition.setSaturatedFat(dto.getSaturatedFat());
        nutrition.setCarbohydrates(dto.getCarbohydrates());
        nutrition.setSugars(dto.getSugars());
        nutrition.setFiber(dto.getFiber());
        nutrition.setProtein(dto.getProtein());
        nutrition.setSalt(dto.getSalt());

        return nutrition;
    }
}
