package com.recipeek.backend.controller;

import com.recipeek.backend.dto.RecipeDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private List<RecipeDTO> recipes = new ArrayList<>(); // Tymczasowa "baza danych" do celów demonstracyjnych

    @GetMapping
    public List<RecipeDTO> getAllRecipes() {
        // TODO: pobieranie dane z bazy danych
        return recipes;
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecipeDTO> getRecipeById(@PathVariable Long id) {
        // TODO: szukanie przepisu w bazie danych
        return recipes.stream()
                .filter(recipe -> recipe.getId().equals(id))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<RecipeDTO> addRecipe(@RequestBody RecipeDTO recipeDTO) {
        // TODO: zapisywanie przepisu w bazie
        recipes.add(recipeDTO);
        return new ResponseEntity<>(recipeDTO, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RecipeDTO> updateRecipe(@PathVariable Long id, @RequestBody RecipeDTO recipeDTO) {
        // TODO: aktualizowanie przepisu w bazie danych
        return ResponseEntity.ok(recipeDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        // TODO: usuwanie przepisu z bazy danych
        return ResponseEntity.ok().build();
    }
}
