package com.recipeek.backend.repository;

import com.recipeek.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByEmail(String login);
    Boolean existsByLogin(String login);
    Boolean existsByEmail(String email);
}
