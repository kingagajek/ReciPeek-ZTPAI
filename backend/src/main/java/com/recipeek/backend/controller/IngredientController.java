package com.recipeek.backend.controller;

import com.recipeek.backend.dto.IngredientDTO;
import com.recipeek.backend.service.IngredientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
@RequiredArgsConstructor
public class IngredientController {
    private final IngredientService ingredientService;

    @GetMapping
    public ResponseEntity<List<IngredientDTO>> getAllIngredients() {
        List<IngredientDTO> ingredients = ingredientService.findAll();
        return ResponseEntity.ok(ingredients);
    }

    @PostMapping
    public ResponseEntity<IngredientDTO> addIngredient(@RequestBody IngredientDTO ingredientDTO) {
        IngredientDTO savedIngredient = ingredientService.addIngredient(ingredientDTO);
        return new ResponseEntity<>(savedIngredient, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<IngredientDTO> getIngredientById(@PathVariable Integer id) {
        IngredientDTO ingredient = ingredientService.findIngredientById(id);
        if (ingredient != null) {
            return ResponseEntity.ok(ingredient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<IngredientDTO> updateIngredient(@PathVariable Integer id, @RequestBody IngredientDTO ingredientDTO) {
        IngredientDTO updatedIngredient = ingredientService.updateIngredient(id, ingredientDTO);
        if (updatedIngredient != null) {
            return ResponseEntity.ok(updatedIngredient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIngredient(@PathVariable Integer id) {
        boolean isDeleted = ingredientService.deleteIngredient(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
