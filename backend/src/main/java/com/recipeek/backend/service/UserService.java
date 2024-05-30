package com.recipeek.backend.service;

import com.recipeek.backend.dto.RecipeDTO;
import com.recipeek.backend.dto.UserDTO;
import com.recipeek.backend.mapper.RecipeMapper;
import com.recipeek.backend.mapper.UserMapper;
import com.recipeek.backend.model.Rating;
import com.recipeek.backend.model.Role;
import com.recipeek.backend.model.User;
import com.recipeek.backend.model.UserRecipe;
import com.recipeek.backend.repository.RatingRepository;
import com.recipeek.backend.repository.RoleRepository;
import com.recipeek.backend.repository.UserRecipeRepository;
import com.recipeek.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserRecipeRepository userRecipeRepository;
    private final RatingRepository ratingRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final RecipeMapper recipeMapper;

    public List<UserDTO> findAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toDTO)
                .collect(Collectors.toList());
    }

    public UserDTO addUser(UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        User savedUser = userRepository.save(user);
        return userMapper.toDTO(savedUser);
    }

    public UserDTO updateUser(Integer id, UserDTO userDTO) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        existingUser.setEmail(userDTO.getEmail());
        existingUser.setLogin(userDTO.getLogin());
        existingUser.setRole(userDTO.getRole());
        User updatedUser = userRepository.save(existingUser);
        return userMapper.toDTO(updatedUser);
    }

    public UserDTO findUserById(Integer id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(userMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    public boolean deleteUser(Integer id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }

        List<Rating> ratings = ratingRepository.findByUserId(id);
        ratingRepository.deleteAll(ratings);

        List<UserRecipe> userRecipes = userRecipeRepository.findByUserId(id);
        userRecipeRepository.deleteAll(userRecipes);

        userRepository.deleteById(id);
        return true;
    }

    public List<Role> findAllRoles() {
        return roleRepository.findAll();
    }

    public List<RecipeDTO> findRecipesByUserId(Integer userId) {
        List<UserRecipe> userRecipes = userRecipeRepository.findByUserId(userId);
        return userRecipes.stream()
                .map(userRecipe -> recipeMapper.toDTO(userRecipe.getRecipe()))
                .collect(Collectors.toList());
    }
}