package com.recipeek.backend.repository;

import com.recipeek.backend.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
    Page<Recipe> findAllByOrderByViewsDesc(Pageable pageable);
    Page<Recipe> findAllByOrderByCreatedAtDesc(Pageable pageable);
    Page<Recipe> findByTitleContainingIgnoreCase(String title, Pageable pageable);
}
