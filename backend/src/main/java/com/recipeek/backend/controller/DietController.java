package com.recipeek.backend.controller;

import com.recipeek.backend.dto.DietDTO;
import com.recipeek.backend.service.DietService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diets")
@RequiredArgsConstructor
public class DietController {
    private final DietService dietService;

    @GetMapping
    public ResponseEntity<List<DietDTO>> getAllDiets() {
        List<DietDTO> diets = dietService.findAll();
        return ResponseEntity.ok(diets);
    }

    @PostMapping
    public ResponseEntity<DietDTO> addDiet(@RequestBody DietDTO dietDTO) {
        DietDTO savedDiet = dietService.addDiet(dietDTO);
        return new ResponseEntity<>(savedDiet, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DietDTO> getDietById(@PathVariable Integer id) {
        DietDTO diet = dietService.findDietById(id);
        if (diet != null) {
            return ResponseEntity.ok(diet);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<DietDTO> updateDiet(@PathVariable Integer id, @RequestBody DietDTO dietDTO) {
        DietDTO updatedDiet = dietService.updateDiet(id, dietDTO);
        if (updatedDiet != null) {
            return ResponseEntity.ok(updatedDiet);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDiet(@PathVariable Integer id) {
        boolean isDeleted = dietService.deleteDiet(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}