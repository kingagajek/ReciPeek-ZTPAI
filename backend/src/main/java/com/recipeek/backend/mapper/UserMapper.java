package com.recipeek.backend.mapper;

import com.recipeek.backend.dto.UserDTO;
import com.recipeek.backend.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserDTO toDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setLogin(user.getLogin());
        dto.setRole(user.getRole());
        return dto;
    }

    public User toEntity(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setEmail(userDTO.getEmail());
        user.setLogin(userDTO.getLogin());
        user.setRole(userDTO.getRole());
        return user;
    }
}