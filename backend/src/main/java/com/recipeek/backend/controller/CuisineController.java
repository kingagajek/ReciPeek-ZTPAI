package com.recipeek.backend.controller;

import com.recipeek.backend.dto.CuisineDTO;
import com.recipeek.backend.service.CuisineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cuisines")
@RequiredArgsConstructor
public class CuisineController {
    private final CuisineService cuisineService;

    @GetMapping
    public ResponseEntity<List<CuisineDTO>> getAllCuisines() {
        List<CuisineDTO> cuisines = cuisineService.findAll();
        return ResponseEntity.ok(cuisines);
    }

    @PostMapping
    public ResponseEntity<CuisineDTO> addCuisine(@RequestBody CuisineDTO cuisineDTO) {
        CuisineDTO savedCuisine = cuisineService.addCuisine(cuisineDTO);
        return new ResponseEntity<>(savedCuisine, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CuisineDTO> getCuisineById(@PathVariable Integer id) {
        CuisineDTO cuisine = cuisineService.findCuisineById(id);
        if (cuisine != null) {
            return ResponseEntity.ok(cuisine);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<CuisineDTO> updateCuisine(@PathVariable Integer id, @RequestBody CuisineDTO cuisineDTO) {
        CuisineDTO updatedCuisine = cuisineService.updateCuisine(id, cuisineDTO);
        if (updatedCuisine != null) {
            return ResponseEntity.ok(updatedCuisine);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCuisine(@PathVariable Integer id) {
        boolean isDeleted = cuisineService.deleteCuisine(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}