package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.CuisineDTO;
import com.recipeek.backend.model.Cuisine;
import org.springframework.stereotype.Component;

@Component
public class CuisineMapper {

    public CuisineDTO toDTO(Cuisine cuisine) {
        if (cuisine == null) {
            return null;
        }
        CuisineDTO dto = new CuisineDTO();
        dto.setId(cuisine.getId());
        dto.setName(cuisine.getName());
        return dto;
    }

    public Cuisine toEntity(CuisineDTO cuisineDTO) {
        if (cuisineDTO == null) {
            return null;
        }
        Cuisine cuisine = new Cuisine();
        cuisine.setId(cuisineDTO.getId());
        cuisine.setName(cuisineDTO.getName());
        return cuisine;
    }
}