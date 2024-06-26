package com.recipeek.backend.repository;

import com.recipeek.backend.model.Instruction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface InstructionRepository extends JpaRepository<Instruction, Integer> {
    List<Instruction> findByRecipeId(Integer recipeId);
    @Transactional
    void deleteByRecipeId(Integer recipeId);
}
