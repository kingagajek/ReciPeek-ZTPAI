package com.recipeek.backend.service;

import com.recipeek.backend.dto.CuisineDTO;
import com.recipeek.backend.mapper.CuisineMapper;
import com.recipeek.backend.model.Cuisine;
import com.recipeek.backend.repository.CuisineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CuisineService {
    private final CuisineRepository cuisineRepository;
    private final CuisineMapper cuisineMapper;

    public List<CuisineDTO> findAll() {
        return cuisineRepository.findAll().stream()
                .map(cuisineMapper::toDTO)
                .collect(Collectors.toList());
    }

    public CuisineDTO addCuisine(CuisineDTO cuisineDTO) {
        Cuisine cuisine = cuisineMapper.toEntity(cuisineDTO);
        Cuisine savedCuisine = cuisineRepository.save(cuisine);
        return cuisineMapper.toDTO(savedCuisine);
    }

    public CuisineDTO findCuisineById(Integer id) {
        Optional<Cuisine> cuisine = cuisineRepository.findById(id);
        return cuisine.map(cuisineMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Cuisine not found with id: " + id));
    }

    public CuisineDTO updateCuisine(Integer id, CuisineDTO cuisineDTO) {
        Cuisine existingCuisine = cuisineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cuisine not found with id: " + id));
        existingCuisine.setName(cuisineDTO.getName());
        Cuisine updatedCuisine = cuisineRepository.save(existingCuisine);
        return cuisineMapper.toDTO(updatedCuisine);
    }

    public boolean deleteCuisine(Integer id) {
        try {
            cuisineRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
