package com.recipeek.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@NoArgsConstructor
public class RecipeDTO {
    private Integer id;
    private String title;
    private String description;
    private Integer cookTime;
    private Integer servingSize;
}
