package com.recipeek.backend.service;

import com.recipeek.backend.dto.AuthenticationRequest;
import com.recipeek.backend.dto.AuthenticationResponse;
import com.recipeek.backend.dto.UserDTO;
import com.recipeek.backend.dto.request.RegisterRequest;
import com.recipeek.backend.mapper.UserMapper;
import com.recipeek.backend.model.Role;
import com.recipeek.backend.model.User;
import com.recipeek.backend.repository.RoleRepository;
import com.recipeek.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final EmailProducer emailProducer;

    public AuthenticationResponse register(RegisterRequest request) {
        if (request.getPassword().length() < 8) {
            throw new RuntimeException("Password must be at least 8 characters long");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("User with this email already exists");
        }

        if (userRepository.existsByLogin(request.getLogin())) {
            throw new RuntimeException("User with this login already exists");
        }

        Role role = roleRepository.findRoleByName("USER")
            .orElseThrow(() -> new RuntimeException("Role not found"));

        var user = User.builder()
                .login(request.getLogin())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(role)
                .build();
        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);

        emailProducer.sendEmailMessage(user.getEmail());

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse login(AuthenticationRequest request) {
        var user = userRepository.findUserByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (Exception e) {
            throw new IllegalArgumentException("Incorrect password");
        }

        var jwt = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwt)
                .build();
    }

    public UserDTO verify() {
        var user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userMapper.toDTO(user);
    }
}
