package com.recipeek.backend.service;

import com.recipeek.backend.dto.RatingDTO;
import com.recipeek.backend.mapper.RatingMapper;
import com.recipeek.backend.model.Rating;
import com.recipeek.backend.repository.RatingRepository;
import com.recipeek.backend.repository.RecipeRepository;
import com.recipeek.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RatingService {

    private final RatingRepository ratingRepository;
    private final RatingMapper ratingMapper;
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;

    public RatingDTO addRating(RatingDTO ratingDTO) {
        Rating rating = new Rating();
        rating.setValue(ratingDTO.getValue());
        rating.setRecipe(recipeRepository.findById(ratingDTO.getRecipeId())
                .orElseThrow(() -> new RuntimeException("Recipe not found")));
        rating.setUser(userRepository.findById(ratingDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found")));
        Rating savedRating = ratingRepository.save(rating);
        return ratingMapper.toDTO(savedRating);
    }

    public List<RatingDTO> getRatingsByRecipeId(Integer recipeId) {
        return ratingRepository.findByRecipeId(recipeId)
                .stream()
                .map(ratingMapper::toDTO)
                .collect(Collectors.toList());
    }

    public RatingDTO updateRating(Integer id, RatingDTO ratingDTO) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Rating not found"));
        rating.setValue(ratingDTO.getValue());
        Rating updatedRating = ratingRepository.save(rating);
        return ratingMapper.toDTO(updatedRating);
    }

    public void deleteRating(Integer id) {
        ratingRepository.deleteById(id);
    }

    public Map<String, Object> getAverageRatingWithCountForRecipe(Integer recipeId) {
        List<Rating> ratings = ratingRepository.findByRecipeId(recipeId);
        if (ratings.isEmpty()) {
            return Map.of("average", 0.0, "count", 0);
        }
        double average = ratings.stream()
                .mapToDouble(Rating::getValue)
                .average()
                .orElse(0.0);
        int count = ratings.size();
        return Map.of("average", average, "count", count);
    }

    public Map<Integer, Double> getAverageRatingsForAllRecipes() {
        List<Rating> ratings = ratingRepository.findAll();
        return ratings.stream()
                .collect(Collectors.groupingBy(
                        rating -> rating.getRecipe().getId(),
                        Collectors.averagingDouble(Rating::getValue)
                ));
    }
}