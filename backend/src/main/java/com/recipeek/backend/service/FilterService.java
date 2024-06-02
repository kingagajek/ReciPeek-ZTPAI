package com.recipeek.backend.service;

import com.recipeek.backend.model.*;
import com.recipeek.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FilterService {

    private final MealTypeRepository mealTypeRepository;
    private final DifficultyRepository difficultyRepository;
    private final DietRepository dietRepository;
    private final CuisineRepository cuisineRepository;

    public List<MealType> getMealTypes() {
        return mealTypeRepository.findAll();
    }

    public List<Difficulty> getDifficulties() {
        return difficultyRepository.findAll();
    }

    public List<Diet> getDiets() {
        return dietRepository.findAll();
    }

    public List<Cuisine> getCuisines() {
        return cuisineRepository.findAll();
    }
}