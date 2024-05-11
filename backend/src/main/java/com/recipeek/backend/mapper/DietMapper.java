package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.DietDTO;
import com.recipeek.backend.model.Diet;
import org.springframework.stereotype.Component;

@Component
public class DietMapper {

    public DietDTO toDTO(Diet diet) {
        if (diet == null) {
            return null;
        }
        return new DietDTO(diet.getId(), diet.getType());
    }

    public Diet toEntity(DietDTO dietDTO) {
        if (dietDTO == null) {
            return null;
        }
        Diet diet = new Diet();
        diet.setId(dietDTO.getId());
        diet.setType(dietDTO.getType());
        return diet;
    }
}