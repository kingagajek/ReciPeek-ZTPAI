package com.recipeek.backend.repository;

import com.recipeek.backend.model.Cuisine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CuisineRepository extends JpaRepository<Cuisine, Integer> {
    @Override
    Optional<Cuisine> findById(Integer integer);
}
