package com.recipeek.backend.repository;

import com.recipeek.backend.model.Nutrition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface NutritionRepository extends JpaRepository<Nutrition, Integer> {
    Optional<Nutrition> findByRecipeId(Integer recipeId);
    @Transactional
    void deleteByRecipeId(Integer recipeId);
}