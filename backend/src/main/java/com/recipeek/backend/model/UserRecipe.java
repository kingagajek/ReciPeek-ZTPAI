package com.recipeek.backend.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "users_recipes")
public class UserRecipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    private Date savedAt;
}
