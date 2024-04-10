package com.recipeek.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRecipeDTO {
    private Integer id;
    private Integer userId;
    private Integer recipeId;
    private Date savedAt;
}