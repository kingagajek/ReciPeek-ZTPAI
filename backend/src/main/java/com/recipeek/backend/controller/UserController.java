package com.recipeek.backend.controller;

import com.recipeek.backend.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final List<UserDTO> users = new ArrayList<>();

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        // TODO: Tylko dla admina - pobieranie wszystkich użytkowników
        return ResponseEntity.ok(users);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        // TODO: aktualizowanie danych użytkownika
        return ResponseEntity.ok("User updated successfully.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id) {
        // TODO: usuwanie użytkownika
        return ResponseEntity.ok("User deleted successfully.");
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Integer id) {
        // TODO: szukanie użytkownika po ID
        return users.stream()
                .filter(user -> user.getId().equals(id))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
