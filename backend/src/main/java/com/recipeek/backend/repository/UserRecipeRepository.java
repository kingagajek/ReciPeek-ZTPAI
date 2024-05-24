package com.recipeek.backend.repository;

import com.recipeek.backend.model.UserRecipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserRecipeRepository extends JpaRepository<UserRecipe, Integer> {
    List<UserRecipe> findByUserId(Integer userId);
    @Transactional
    void deleteByRecipeId(Integer recipeId);
}
