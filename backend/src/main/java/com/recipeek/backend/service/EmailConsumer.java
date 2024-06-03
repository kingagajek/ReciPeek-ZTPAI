package com.recipeek.backend.service;

import com.recipeek.backend.config.RabbitMQConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailConsumer {

    private final EmailService emailService;

    @RabbitListener(queues = RabbitMQConfig.QUEUE_NAME)
    public void receiveMessage(String email) {
        try {
            log.info("Received email message: {}", email);
            emailService.sendWelcomeEmail(email, "Welcome to Recipeek!", "Thank you for registering at Recipeek. We're glad to have you!");
            log.info("Email sent to: {}", email);
        } catch (Exception e) {
            log.error("Failed to process received email message: {}", email, e);
        }
    }
}
