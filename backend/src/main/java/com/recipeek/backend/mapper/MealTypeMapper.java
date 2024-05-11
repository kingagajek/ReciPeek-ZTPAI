package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.MealTypeDTO;
import com.recipeek.backend.model.MealType;
import org.springframework.stereotype.Component;

@Component
public class MealTypeMapper {
    public MealTypeDTO toDTO(MealType mealType) {
        if (mealType == null) {
            return null;
        }
        return new MealTypeDTO(mealType.getId(), mealType.getName());
    }

    public MealType toEntity(MealTypeDTO mealTypeDTO) {
        if (mealTypeDTO == null) {
            return null;
        }
        MealType mealType = new MealType();
        mealType.setId(mealTypeDTO.getId());
        mealType.setName(mealTypeDTO.getName());
        return mealType;
    }
}