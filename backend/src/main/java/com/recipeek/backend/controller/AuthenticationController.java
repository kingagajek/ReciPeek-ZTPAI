package com.recipeek.backend.controller;

import com.recipeek.backend.dto.AuthenticationRequest;
import com.recipeek.backend.dto.AuthenticationResponse;
import com.recipeek.backend.dto.UserDTO;
import com.recipeek.backend.dto.request.RegisterRequest;
import com.recipeek.backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.login(request));
    }

    @GetMapping("/me")
    public ResponseEntity<UserDTO> verify() {
        return ResponseEntity.ok(authenticationService.verify());
    }
}
