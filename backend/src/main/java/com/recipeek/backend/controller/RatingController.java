package com.recipeek.backend.controller;

import com.recipeek.backend.dto.RatingDTO;
import com.recipeek.backend.service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ratings")
@RequiredArgsConstructor
public class RatingController {

    private final RatingService ratingService;

    @PostMapping
    public ResponseEntity<RatingDTO> addRating(@RequestBody RatingDTO ratingDTO) {
        RatingDTO createdRating = ratingService.addRating(ratingDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRating);
    }

    @GetMapping("/{recipeId}")
    public ResponseEntity<List<RatingDTO>> getRatingsByRecipeId(@PathVariable int recipeId) {
        List<RatingDTO> ratings = ratingService.getRatingsByRecipeId(recipeId);
        return ResponseEntity.ok(ratings);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RatingDTO> updateRating(@PathVariable int id, @RequestBody RatingDTO updatedRating) {
        RatingDTO rating = ratingService.updateRating(id, updatedRating);
        return ResponseEntity.ok(rating);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRating(@PathVariable int id) {
        ratingService.deleteRating(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/average/{recipeId}")
    public ResponseEntity<Map<String, Object>> getAverageRatingWithCount(@PathVariable int recipeId) {
        Map<String, Object> averageRatingWithCount = ratingService.getAverageRatingWithCountForRecipe(recipeId);
        return ResponseEntity.ok(averageRatingWithCount);
    }
}
