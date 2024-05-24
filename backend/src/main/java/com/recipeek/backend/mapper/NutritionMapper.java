package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.NutritionDTO;
import com.recipeek.backend.model.Nutrition;
import org.springframework.stereotype.Component;

@Component
public class NutritionMapper {
    public NutritionDTO toDTO(Nutrition nutrition) {
        NutritionDTO dto = new NutritionDTO();
        dto.setKcal(nutrition.getKcal());
        dto.setFat(nutrition.getFat());
        dto.setSaturates(nutrition.getSaturates());
        dto.setCarbs(nutrition.getCarbs());
        dto.setSugars(nutrition.getSugars());
        dto.setFiber(nutrition.getFiber());
        dto.setProtein(nutrition.getProtein());
        dto.setSalt(nutrition.getSalt());

        return dto;
    }
    public Nutrition toEntity(NutritionDTO dto) {
        Nutrition nutrition = new Nutrition();
        nutrition.setKcal(dto.getKcal());
        nutrition.setFat(dto.getFat());
        nutrition.setSaturates(dto.getSaturates());
        nutrition.setCarbs(dto.getCarbs());
        nutrition.setSugars(dto.getSugars());
        nutrition.setFiber(dto.getFiber());
        nutrition.setProtein(dto.getProtein());
        nutrition.setSalt(dto.getSalt());

        return nutrition;
    }
}
