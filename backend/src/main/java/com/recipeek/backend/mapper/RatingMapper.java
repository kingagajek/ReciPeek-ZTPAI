package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.RatingDTO;
import com.recipeek.backend.model.Rating;
import org.springframework.stereotype.Component;

@Component
public class RatingMapper {

    public RatingDTO toDTO(Rating rating) {
        return new RatingDTO(rating.getId(), rating.getValue(),
                rating.getRecipe().getId(), rating.getUser().getId());
    }
}
