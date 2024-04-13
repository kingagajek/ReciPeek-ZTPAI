package com.recipeek.backend.controller;

import com.recipeek.backend.dto.IngredientDTO;
import com.recipeek.backend.dto.RecipeDTO;
import com.recipeek.backend.dto.RecipeIngredientDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @GetMapping
    public List<RecipeDTO> getAllRecipes() {
        // TODO: pobieranie danych z bazy danych
        return List.of(
                new RecipeDTO()
                        .setId(1)
                        .setTitle("Spaghetti Carbonara")
                        .setDescription("Klasyczne włoskie danie z boczkiem i śmietaną.")
                        .setIngredients(List.of(
                                new RecipeIngredientDTO()
                                        .setIngredient(new IngredientDTO().setId(1).setName("makaron"))
                        ))
                        .setCookTime(30),
                new RecipeDTO()
                        .setId(2)
                        .setTitle("Sushi Maki")
                        .setDescription("Tradycyjne japońskie rolki ryżowe z rybą.")
                        .setIngredients(List.of(
                                new RecipeIngredientDTO()
                                        .setIngredient(new IngredientDTO().setId(2).setName("ryż na sushi"))
                        ))
                       .setCookTime(90)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecipeDTO> getRecipeById(@PathVariable Integer id) {
        // TODO: szukanie przepisu w bazie danych
        return null;
    }

    @PostMapping
    public ResponseEntity<Object> addRecipe(@RequestBody RecipeDTO recipeDTO) {
        // TODO: zapisywanie przepisu w bazie
        return ResponseEntity.status(HttpStatus.CREATED).body("Recipe created successfully.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateRecipe(@PathVariable Integer id, @RequestBody RecipeDTO recipeDTO) {
        // TODO: aktualizowanie przepisu w bazie danych
        return ResponseEntity.ok("Recipe updated successfully.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteRecipe(@PathVariable Integer id) {
        // TODO: usuwanie przepisu z bazy danych
        return ResponseEntity.ok("Recipe deleted successfully.");
    }
}
