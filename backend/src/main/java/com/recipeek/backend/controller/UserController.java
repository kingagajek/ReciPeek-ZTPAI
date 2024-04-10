package com.recipeek.backend.controller;

import com.recipeek.backend.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public List<UserDTO> getAllUsers() {
        // Metoda zwracająca wszystkich użytkowników
    }

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        // Metoda do rejestracji nowego użytkownika
    }

//    @PostMapping("/login")
//    public ResponseEntity<UserDTO> loginUser(@RequestBody LoginDTO loginDTO) {
//        // Metoda do logowania użytkownika
//    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        // Metoda zwracająca użytkownika o danym ID
    }
}

