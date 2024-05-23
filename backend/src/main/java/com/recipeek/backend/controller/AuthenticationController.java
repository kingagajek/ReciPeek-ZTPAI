package com.recipeek.backend.controller;

import com.recipeek.backend.dto.AuthenticationRequest;
import com.recipeek.backend.dto.AuthenticationResponse;
import com.recipeek.backend.dto.UserDTO;
import com.recipeek.backend.dto.request.RegisterRequest;
import com.recipeek.backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            AuthenticationResponse response = authenticationService.register(request);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest request) {
        try {
            AuthenticationResponse response = authenticationService.login(request);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            String errorMessage = e.getMessage();
            if ("User not found".equals(errorMessage)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with this email does not exist.");
            } else if ("Incorrect password".equals(errorMessage)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect email or password.");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
            }
        }
    }

    @GetMapping("/me")
    public ResponseEntity<UserDTO> verify() {
        return ResponseEntity.ok(authenticationService.verify());
    }
}
