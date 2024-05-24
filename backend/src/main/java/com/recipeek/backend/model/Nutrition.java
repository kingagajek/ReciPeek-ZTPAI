package com.recipeek.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Entity
@Table(name="nutrition")
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Nutrition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne   
    @JoinColumn(name = "recipe_id", referencedColumnName = "id")
    private Recipe recipe;

    private Double kcal;
    private Double fat;
    private Double saturates;
    private Double carbs;
    private Double sugars;
    private Double fiber;
    private Double protein;
    private Double salt;
}
