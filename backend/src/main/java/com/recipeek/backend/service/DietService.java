package com.recipeek.backend.service;

import com.recipeek.backend.dto.DietDTO;
import com.recipeek.backend.mapper.DietMapper;
import com.recipeek.backend.model.Diet;
import com.recipeek.backend.repository.DietRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DietService {
    private final DietRepository dietRepository;
    private final DietMapper dietMapper;

    public List<DietDTO> findAll() {
        return dietRepository.findAll().stream()
                .map(dietMapper::toDTO)
                .toList();
    }

    public DietDTO addDiet(DietDTO dietDTO) {
        Diet diet = dietMapper.toEntity(dietDTO);
        Diet savedDiet = dietRepository.save(diet);
        return dietMapper.toDTO(savedDiet);
    }

    public DietDTO findDietById(Integer id) {
        return dietRepository.findById(id)
                .map(dietMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Diet not found with id: " + id));
    }

    public DietDTO updateDiet(Integer id, DietDTO dietDTO) {
        Diet existingDiet = dietRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Diet not found with id: " + id));
        existingDiet.setType(dietDTO.getType());
        dietRepository.save(existingDiet);
        return dietMapper.toDTO(existingDiet);
    }

    public boolean deleteDiet(Integer id) {
        if (dietRepository.existsById(id)) {
            dietRepository.deleteById(id);
            return true;
        }
        return false;
    }
}