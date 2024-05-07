package com.recipeek.backend.service;

import com.recipeek.backend.dto.NutritionDTO;
import com.recipeek.backend.dto.RecipeDTO;
import com.recipeek.backend.mapper.InstructionMapper;
import com.recipeek.backend.mapper.RecipeIngredientMapper;
import com.recipeek.backend.mapper.RecipeMapper;
import com.recipeek.backend.mapper.NutritionMapper;
import com.recipeek.backend.model.Nutrition;
import com.recipeek.backend.model.Recipe;
import com.recipeek.backend.repository.InstructionRepository;
import com.recipeek.backend.repository.NutritionRepository;
import com.recipeek.backend.repository.RecipeIngredientRepository;
import com.recipeek.backend.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final NutritionRepository nutritionRepository;
    private final RecipeIngredientRepository recipeIngredientRepository;
    private final InstructionRepository instructionRepository;
    private final RecipeMapper recipeMapper;
    private final NutritionMapper nutritionMapper;
    private final RecipeIngredientMapper recipeIngredientMapper;
    private final InstructionMapper instructionMapper;

    @Autowired
    public RecipeService(RecipeRepository recipeRepository,
                         RecipeMapper recipeMapper,
                         NutritionRepository nutritionRepository,
                         RecipeIngredientMapper recipeIngredientMapper,
                         InstructionMapper instructionMapper,
                         NutritionMapper nutritionMapper,
                         RecipeIngredientRepository recipeIngredientRepository,
                         InstructionRepository instructionRepository) {
        this.recipeRepository = recipeRepository;
        this.recipeMapper = recipeMapper;
        this.nutritionRepository = nutritionRepository;
        this.recipeIngredientMapper = recipeIngredientMapper;
        this.instructionMapper = instructionMapper;
        this.nutritionMapper = nutritionMapper;
        this.recipeIngredientRepository = recipeIngredientRepository;
        this.instructionRepository = instructionRepository;
    }

    public Page<RecipeDTO> findAllRecipes(Pageable pageable) {
        return recipeRepository.findAll(pageable)
                .map(recipeMapper::toDTO);
    }

    public RecipeDTO findRecipeById(Integer id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        return recipe.map(r -> {
            RecipeDTO dto = recipeMapper.toDTO(r);
            dto.setIngredients(recipeIngredientRepository.findByRecipeId(id)
                    .stream()
                    .map(recipeIngredientMapper::toDTO)
                    .collect(Collectors.toList()));
            dto.setInstructions(instructionRepository.findByRecipeId(id)
                    .stream()
                    .map(instructionMapper::toDTO)
                    .collect(Collectors.toList()));
            return dto;
        }).orElseThrow(() -> new RuntimeException("Recipe not found with id: " + id));
    }

    public RecipeDTO addRecipe(RecipeDTO recipeDTO) {
        Recipe recipe = recipeMapper.toEntity(recipeDTO);
        Recipe savedRecipe = recipeRepository.save(recipe);
        return recipeMapper.toDTO(savedRecipe);
    }

    public RecipeDTO updateRecipe(Integer id, RecipeDTO recipeDTO) {
        Recipe existingRecipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe not found with id: " + id));
        existingRecipe.setTitle(recipeDTO.getTitle());
        existingRecipe.setDescription(recipeDTO.getDescription());
        Recipe updatedRecipe = recipeRepository.save(existingRecipe);
        return recipeMapper.toDTO(updatedRecipe);
    }

    public void deleteRecipe(Integer id) {
        recipeRepository.deleteById(id);
    }

    public NutritionDTO findNutritionByRecipeId(Integer recipeId) {
        Optional<Nutrition> nutrition = nutritionRepository.findByRecipeId(recipeId);
        if (nutrition.isPresent()) {
            return nutritionMapper.toDTO(nutrition.get());
        }
        throw new RuntimeException("Nutrition information not found for recipe id: " + recipeId);
    }
}