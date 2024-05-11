package com.recipeek.backend.service;

import com.recipeek.backend.dto.IngredientDTO;
import com.recipeek.backend.mapper.IngredientMapper;
import com.recipeek.backend.model.Ingredient;
import com.recipeek.backend.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IngredientService {

    private final IngredientRepository ingredientRepository;
    private final IngredientMapper ingredientMapper;

    public List<IngredientDTO> findAll() {
        return ingredientRepository.findAll().stream()
                .map(ingredientMapper::toDTO)
                .collect(Collectors.toList());
    }

    public IngredientDTO addIngredient(IngredientDTO ingredientDTO) {
        Ingredient ingredient = ingredientMapper.toEntity(ingredientDTO);
        Ingredient savedIngredient = ingredientRepository.save(ingredient);
        return ingredientMapper.toDTO(savedIngredient);
    }

    public IngredientDTO findIngredientById(Integer id) {
        Optional<Ingredient> ingredient = ingredientRepository.findById(id);
        return ingredient.map(ingredientMapper::toDTO).orElse(null);
    }

    public IngredientDTO updateIngredient(Integer id, IngredientDTO ingredientDTO) {
        Ingredient existingIngredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingredient not found: " + id));
        existingIngredient.setName(ingredientDTO.getName());

        Ingredient updatedIngredient = ingredientRepository.save(existingIngredient);
        return ingredientMapper.toDTO(updatedIngredient);
    }

    public boolean deleteIngredient(Integer id) {
        if (ingredientRepository.existsById(id)) {
            ingredientRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
