package com.recipeek.backend.service;

import com.recipeek.backend.dto.MealTypeDTO;
import com.recipeek.backend.mapper.MealTypeMapper;
import com.recipeek.backend.model.MealType;
import com.recipeek.backend.repository.MealTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MealTypeService {
    private final MealTypeRepository mealTypeRepository;
    private final MealTypeMapper mealTypeMapper;

    public List<MealTypeDTO> findAll() {
        return mealTypeRepository.findAll().stream()
                .map(mealTypeMapper::toDTO)
                .toList();
    }

    public MealTypeDTO addMealType(MealTypeDTO mealTypeDTO) {
        MealType mealType = mealTypeMapper.toEntity(mealTypeDTO);
        MealType savedMealType = mealTypeRepository.save(mealType);
        return mealTypeMapper.toDTO(savedMealType);
    }

    public MealTypeDTO findMealTypeById(Integer id) {
        return mealTypeRepository.findById(id)
                .map(mealTypeMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Meal Type not found with id: " + id));
    }

    public MealTypeDTO updateMealType(Integer id, MealTypeDTO mealTypeDTO) {
        MealType existingMealType = mealTypeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Meal Type not found with id: " + id));
        existingMealType.setName(mealTypeDTO.getName());
        mealTypeRepository.save(existingMealType);
        return mealTypeMapper.toDTO(existingMealType);
    }

    public boolean deleteMealType(Integer id) {
        if (mealTypeRepository.existsById(id)) {
            mealTypeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}