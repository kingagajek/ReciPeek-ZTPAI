package com.recipeek.backend.dto;

import com.recipeek.backend.model.Role;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class UserDTO {
    private Integer id;
    private String email;
    private String login;
    private Role role;
}
