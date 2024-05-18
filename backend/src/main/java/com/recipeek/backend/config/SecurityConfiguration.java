package com.recipeek.backend.config;

import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults())
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(authorizeRequest -> authorizeRequest
                    .requestMatchers(
                            "api/auth/**"
                    )
                    .permitAll()
                    .requestMatchers(
                            HttpMethod.GET,
                            "/api/recipes/**",
                            "/api/ingredients/**",
                            "/api/users/**",
                            "/api/mealTypes/**",
                            "/api/diets/**",
                            "/api/cuisines/**"
                    )
                    .permitAll()
                    .requestMatchers(
                            HttpMethod.POST,
                            "/api/recipes/**",
                            "/api/ingredients/**",
                            "/api/users/**",
                            "/api/mealTypes/**",
                            "/api/diets/**",
                            "/api/cuisines/**"
                    )
                    .permitAll()
                    .requestMatchers(
                            HttpMethod.PUT,
                            "/api/recipes/**",
                            "/api/ingredients/**",
                            "/api/users/**",
                            "/api/mealTypes/**",
                            "/api/diets/**",
                            "/api/cuisines/**"
                    )
                    .permitAll()
                    .requestMatchers(
                            HttpMethod.DELETE,
                            "/api/recipes/**",
                            "/api/ingredients/**",
                            "/api/users/**",
                            "/api/mealTypes/**",
                            "/api/diets/**",
                            "/api/cuisines/**"
                    )
                    .permitAll()
                    .anyRequest()
                    .authenticated()
            )
            .sessionManagement(sessionManagement -> sessionManagement
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
        }
}
