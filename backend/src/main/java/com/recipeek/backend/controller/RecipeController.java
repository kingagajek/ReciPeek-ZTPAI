package com.recipeek.backend.controller;

import com.recipeek.backend.dto.RecipeDTO;
import com.recipeek.backend.service.RecipeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
@AllArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;
    @GetMapping
    public List<RecipeDTO> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @PostMapping
    public RecipeDTO addRecipe(@RequestBody RecipeDTO recipeDTO) {
        return recipeService.addRecipe(recipeDTO);
    }
}
