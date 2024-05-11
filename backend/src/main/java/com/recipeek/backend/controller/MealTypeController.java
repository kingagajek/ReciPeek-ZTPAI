package com.recipeek.backend.controller;

import com.recipeek.backend.dto.MealTypeDTO;
import com.recipeek.backend.service.MealTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mealTypes")
@RequiredArgsConstructor
public class MealTypeController {
    private final MealTypeService mealTypeService;

    @GetMapping
    public ResponseEntity<List<MealTypeDTO>> getAllMealTypes() {
        List<MealTypeDTO> mealTypes = mealTypeService.findAll();
        return ResponseEntity.ok(mealTypes);
    }

    @PostMapping
    public ResponseEntity<MealTypeDTO> addMealType(@RequestBody MealTypeDTO mealTypeDTO) {
        MealTypeDTO savedMealType = mealTypeService.addMealType(mealTypeDTO);
        return new ResponseEntity<>(savedMealType, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MealTypeDTO> getMealTypeById(@PathVariable Integer id) {
        MealTypeDTO mealType = mealTypeService.findMealTypeById(id);
        if (mealType != null) {
            return ResponseEntity.ok(mealType);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<MealTypeDTO> updateMealType(@PathVariable Integer id, @RequestBody MealTypeDTO mealTypeDTO) {
        MealTypeDTO updatedMealType = mealTypeService.updateMealType(id, mealTypeDTO);
        if (updatedMealType != null) {
            return ResponseEntity.ok(updatedMealType);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMealType(@PathVariable Integer id) {
        boolean isDeleted = mealTypeService.deleteMealType(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}