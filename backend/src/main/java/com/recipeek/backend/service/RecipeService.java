package com.recipeek.backend.service;

import com.recipeek.backend.dto.RecipeDTO;
import com.recipeek.backend.model.Recipe;
import com.recipeek.backend.repository.RecipeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public List<RecipeDTO> getAllRecipes() {
        return recipeRepository.findAll().stream()
                .map(recipe -> new RecipeDTO()
                        .setId(recipe.getId())
                        .setTitle(recipe.getTitle())
                        .setDescription(recipe.getDescription()))
                .collect(Collectors.toList());
    }

    public RecipeDTO addRecipe(RecipeDTO recipeDTO) {
        Recipe recipe = new Recipe()
                .setTitle(recipeDTO.getTitle())
                .setDescription(recipeDTO.getDescription());
        Recipe savedRecipe = recipeRepository.save(recipe);
        return new RecipeDTO()
                .setId(savedRecipe.getId())
                .setTitle(savedRecipe.getTitle())
                .setDescription(savedRecipe.getDescription());
    }
}
