package com.recipeek.backend.controller;

import com.recipeek.backend.dto.IngredientDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
public class IngredientController {

    @GetMapping
    public ResponseEntity<List<IngredientDTO>> getAllIngredients() {
        // TODO: pobieranie wszystkich składników
        return ResponseEntity.ok().build();
    }

    @PostMapping
    public ResponseEntity<String> addIngredient(@RequestBody IngredientDTO ingredientDTO) {
        // TODO: dodawanie nowego składnika
        return ResponseEntity.status(HttpStatus.CREATED).body("Ingredient added successfully.");
    }

    @GetMapping("/{id}")
    public ResponseEntity<IngredientDTO> getIngredientById(@PathVariable Integer id) {
        // TODO: pobieranie składnika o danym ID
        return ResponseEntity.ok(new IngredientDTO());
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateIngredient(@PathVariable Integer id, @RequestBody IngredientDTO ingredientDTO) {
        // TODO: aktualizacja składnika
        return ResponseEntity.ok("Ingredient updated successfully.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteIngredient(@PathVariable Integer id) {
        // TODO: usuwanie składnika
        return ResponseEntity.ok("Ingredient deleted successfully.");
    }
}
