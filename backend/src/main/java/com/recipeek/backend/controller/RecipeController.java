package com.recipeek.backend.controller;

import com.recipeek.backend.dto.NutritionDTO;
import com.recipeek.backend.dto.RecipeDTO;
import com.recipeek.backend.dto.request.RecipeRequest;
import com.recipeek.backend.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@RequestMapping("/api/recipes")
@RequiredArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;
    @GetMapping
    public ResponseEntity<Page<RecipeDTO>> getAllRecipes(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "20") int size,
            @RequestParam(name = "sort", defaultValue = "id") String sortBy,
            @RequestParam(name = "order", defaultValue = "asc") String order,
            @RequestParam(name = "mealType", required = false) List<Integer> mealTypeIds,
            @RequestParam(name = "difficulty", required = false) List<Integer> difficultyIds,
            @RequestParam(name = "diet", required = false) List<Integer> dietIds,
            @RequestParam(name = "cuisine", required = false) List<Integer> cuisineIds,
            @RequestParam(name = "time", required = false) List<String> times,
            @RequestParam(name = "rating", required = false) List<String> ratings) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order), sortBy));
        Page<RecipeDTO> recipes = recipeService.findAllRecipes(pageable, mealTypeIds, difficultyIds, dietIds, cuisineIds, times, ratings);
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<RecipeDTO>> searchRecipes(
            @RequestParam String query,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "20") int size,
            @RequestParam(name = "sort", defaultValue = "id") String sortBy,
            @RequestParam(name = "order", defaultValue = "asc") String order,
            @RequestParam(name = "mealType", required = false) List<Integer> mealTypeIds,
            @RequestParam(name = "difficulty", required = false) List<Integer> difficultyIds,
            @RequestParam(name = "diet", required = false) List<Integer> dietIds,
            @RequestParam(name = "cuisine", required = false) List<Integer> cuisineIds,
            @RequestParam(name = "time", required = false) List<String> times,
            @RequestParam(name = "rating", required = false) List<String> ratings) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order), sortBy));
        Page<RecipeDTO> recipes = recipeService.searchRecipes(query, pageable, mealTypeIds, difficultyIds, dietIds, cuisineIds, times, ratings);
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecipeDTO> getRecipeById(@PathVariable Integer id) {
        return ResponseEntity.ok(recipeService.findRecipeById(id));
    }

    @PostMapping
    public ResponseEntity<Integer> addRecipe(@RequestBody RecipeRequest recipeRequest, @AuthenticationPrincipal UserDetails userDetails) {
        Integer savedRecipeId = recipeService.saveRecipe(recipeRequest, userDetails.getUsername());
        return ResponseEntity.ok(savedRecipeId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Integer> updateRecipe(@PathVariable Integer id, @RequestBody RecipeRequest recipeRequest, @AuthenticationPrincipal UserDetails userDetails) {
        Integer updatedRecipeId = recipeService.updateRecipe(id, recipeRequest);
        return ResponseEntity.ok(updatedRecipeId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Integer id) {
        recipeService.deleteRecipe(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}/nutrition")
    public ResponseEntity<NutritionDTO> getNutritionByRecipeId(@PathVariable Integer id) {
        NutritionDTO nutrition = recipeService.findNutritionByRecipeId(id);
        if (nutrition == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(nutrition);
    }

    @GetMapping("/recommended")
    public ResponseEntity<Page<RecipeDTO>> getRecommendedRecipes(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "views"));
        Page<RecipeDTO> recipes = recipeService.findRecommendedRecipes(pageable);
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/recent")
    public ResponseEntity<Page<RecipeDTO>> getRecentRecipes(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<RecipeDTO> recipes = recipeService.findRecentRecipes(pageable);
        return ResponseEntity.ok(recipes);
    }

    @PostMapping(value = "/picture/{id}", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadRecipePicture(
            @PathVariable("id") Integer recipeId,
            @RequestPart("file") MultipartFile file
    ) {
        recipeService.uploadPicture(recipeId, file);
        return ResponseEntity.accepted().build();
    }

}
