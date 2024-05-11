package com.recipeek.backend.service;

import com.recipeek.backend.dto.NutritionDTO;
import com.recipeek.backend.dto.RecipeDTO;
import com.recipeek.backend.dto.request.RecipeRequest;
import com.recipeek.backend.mapper.InstructionMapper;
import com.recipeek.backend.mapper.RecipeIngredientMapper;
import com.recipeek.backend.mapper.RecipeMapper;
import com.recipeek.backend.mapper.NutritionMapper;
import com.recipeek.backend.model.*;
import com.recipeek.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final NutritionRepository nutritionRepository;
    private final RecipeIngredientRepository recipeIngredientRepository;
    private final InstructionRepository instructionRepository;
    private final RecipeMapper recipeMapper;
    private final NutritionMapper nutritionMapper;
    private final RecipeIngredientMapper recipeIngredientMapper;
    private final InstructionMapper instructionMapper;
    private final DifficultyRepository difficultyRepository;
    private final CuisineRepository cuisineRepository;
    private final MealTypeRepository mealTypeRepository;
    private final DietRepository dietRepository;
    private final IngredientRepository ingredientRepository;

    public Page<RecipeDTO> findAllRecipes(Pageable pageable) {
        return recipeRepository.findAll(pageable)
                .map(recipeMapper::toDTO);
    }

    public RecipeDTO findRecipeById(Integer id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        return recipe.map(r -> {
            if (r.getViews() == null) {
                r.setViews(1);
            } else {
                r.setViews(r.getViews() + 1);
            }
            recipeRepository.save(r);
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

    public Page<RecipeDTO> findRecommendedRecipes(Pageable pageable) {
        return recipeRepository.findAllByOrderByViewsDesc(pageable)
                .map(recipeMapper::toDTO);
    }

    public Page<RecipeDTO> findRecentRecipes(Pageable pageable) {
        return recipeRepository.findAllByOrderByCreatedAtDesc(pageable)
                .map(recipeMapper::toDTO);
    }

    public Integer saveRecipe(RecipeRequest recipeRequest) {
        Recipe recipe = recipeMapper.toEntity(recipeRequest);

        MealType mealType = mealTypeRepository.findById(recipeRequest.getMealTypeId())
                .orElseThrow(() -> new RuntimeException("MealType not found"));

        Cuisine cuisine = cuisineRepository.findById(recipeRequest.getCuisineId())
                .orElseThrow(() -> new RuntimeException("Cuisine not found"));

        Diet diet = dietRepository.findById(recipeRequest.getDietId())
                .orElseThrow(() -> new RuntimeException("Cuisine not found"));

        Difficulty difficulty = difficultyRepository.findById(recipeRequest.getDifficultyId())
                .orElseThrow(() -> new RuntimeException("Difficulty not found"));

        recipe.setMealType(mealType);
        recipe.setCuisine(cuisine);
        recipe.setDiet(diet);
        recipe.setDifficulty(difficulty);

        Integer saveId = recipeRepository.save(recipe).getId();

        if (recipeRequest.getIngredients() != null && !recipeRequest.getIngredients().isEmpty()) {
            recipeRequest.getIngredients().forEach(ingredientReq -> {
                RecipeIngredient recipeIngredient = recipeIngredientMapper.toEntity(ingredientReq);

                Ingredient ingredient = ingredientRepository.findById(ingredientReq.getIngredientId())
                        .orElseThrow(() -> new RuntimeException("Ingredient not found"));



                recipeIngredient.setRecipe(recipe);
                recipeIngredient.setIngredient(ingredient);

                recipeIngredientRepository.save(recipeIngredient);
            });
        }

        if (recipeRequest.getInstructions() != null && !recipeRequest.getInstructions().isEmpty()) {
            recipeRequest.getInstructions().forEach(instructionDTO -> {
                Instruction instruction = instructionMapper.toEntity(instructionDTO);
                instruction.setRecipe(recipe);
                instructionRepository.save(instruction);
            });
        }

        if (recipeRequest.getNutrition() != null) {
            Nutrition nutrition = nutritionMapper.toEntity(recipeRequest.getNutrition());
            nutrition.setRecipe(recipe);
            nutritionRepository.save(nutrition);
        }

        return saveId;
    }

}