package com.recipeek.backend.controller;

import com.recipeek.backend.dto.RatingDTO;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@NoArgsConstructor
@AllArgsConstructor
@RequestMapping("/api/ratings")
public class RatingController {
    @PostMapping
    public ResponseEntity<String> addRating(@RequestBody RatingDTO rating) {
        // TODO: zapisywanie oceny w bazie
        return ResponseEntity.status(HttpStatus.CREATED).body("Rating added successfully.");
    }

    @GetMapping("/{recipeId}")
    public ResponseEntity<String> getRatingsByRecipeId(@PathVariable int recipeId) {
        // TODO: oceny przypisane do przepisu
        return ResponseEntity.ok("Ratings for recipe " + recipeId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateRating(@PathVariable int id, @RequestBody RatingDTO updatedRating) {
        // TODO: aktualizacja oceny w bazie
        return ResponseEntity.ok("Rating updated successfully for ID " + id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRating(@PathVariable int id) {
        // TODO: usuwanie oceny z bazy
        return ResponseEntity.ok("Rating deleted successfully for ID " + id);
    }

}
