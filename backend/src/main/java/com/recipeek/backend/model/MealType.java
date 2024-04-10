package com.recipeek.backend.model;

import jakarta.persistence.*;

@Entity
public class MealType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
}
