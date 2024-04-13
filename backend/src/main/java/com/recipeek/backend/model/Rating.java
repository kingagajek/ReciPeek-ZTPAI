package com.recipeek.backend.model;

import jakarta.persistence.*;
@Entity
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double value;
    @ManyToOne
    @JoinColumn(name = "id_recipe")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;
}
