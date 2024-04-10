package com.recipeek.backend.model;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import java.util.Date;

@Data
@Entity
@Table(name="author")
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private Integer cookTime;
    private Integer servingSize;

    @ManyToOne
    @JoinColumn(name = "id_meal_type", referencedColumnName = "id")
    private MealType mealType;

    @ManyToOne
    @JoinColumn(name = "id_difficulty", referencedColumnName = "id")
    private Difficulty difficulty;

    @ManyToOne
    @JoinColumn(name = "id_cuisine", referencedColumnName = "id")
    private Cuisine cuisine;

    private Date createdAt;
    private Date updatedAt;
    private Integer dietId;
    private String image;
    private Float rating;
    private Integer views;
}
