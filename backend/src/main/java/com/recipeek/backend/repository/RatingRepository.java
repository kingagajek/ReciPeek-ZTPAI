package com.recipeek.backend.repository;

import com.recipeek.backend.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {
    List<Rating> findByRecipeId(Integer recipeId);
    @Transactional
    void deleteByRecipeId(Integer recipeId);
    List<Rating> findByUserId(Integer userId);
}