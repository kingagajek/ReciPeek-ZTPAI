package com.recipeek.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Entity
@Table(name="rating")
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double value;
    @ManyToOne
    @JoinColumn(name = "id_recipe", referencedColumnName = "id")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private User user;
}
