package com.recipeek.backend.repository;

import com.recipeek.backend.model.MealType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MealTypeRepository extends JpaRepository<MealType, Integer> {
    @Override
    Optional<MealType> findById(Integer integer);
}
