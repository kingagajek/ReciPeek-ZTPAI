package com.recipeek.backend.model;

import jakarta.persistence.*;
@Entity
public class Difficulty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String level;
}