package com.recipeek.backend.repository;

import com.recipeek.backend.model.Difficulty;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DifficultyRepository extends JpaRepository<Difficulty, Integer> {
    @Override
    Optional<Difficulty> findById(Integer integer);
}
