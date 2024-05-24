package com.recipeek.backend.model;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name="recipe")
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

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    private Date updatedAt;
    @ManyToOne
    @JoinColumn(name = "id_diet", referencedColumnName = "id")
    private Diet diet;
    private String pictureUrl;
    @OneToMany(mappedBy = "recipe")
    private List<Rating> ratings;
    private Integer views;
}
