package com.recipeek.backend.repository;

import com.recipeek.backend.model.Diet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DietRepository extends JpaRepository<Diet, Integer> {
    @Override
    Optional<Diet> findById(Integer integer);
}
