package com.recipeek.backend.controller;

import com.recipeek.backend.model.*;
import com.recipeek.backend.service.FilterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/filters")
@RequiredArgsConstructor
public class FilterController {

    private final FilterService filterService;

    @GetMapping("/mealTypes")
    public ResponseEntity<List<MealType>> getMealTypes() {
        return ResponseEntity.ok(filterService.getMealTypes());
    }

    @GetMapping("/difficulties")
    public ResponseEntity<List<Difficulty>> getDifficulties() {
        return ResponseEntity.ok(filterService.getDifficulties());
    }

    @GetMapping("/diets")
    public ResponseEntity<List<Diet>> getDiets() {
        return ResponseEntity.ok(filterService.getDiets());
    }

    @GetMapping("/cuisines")
    public ResponseEntity<List<Cuisine>> getCuisines() {
        return ResponseEntity.ok(filterService.getCuisines());
    }
}