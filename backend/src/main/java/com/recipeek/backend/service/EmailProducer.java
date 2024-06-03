package com.recipeek.backend.service;

import com.recipeek.backend.config.RabbitMQConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailProducer {

    private final RabbitTemplate rabbitTemplate;

    public void sendEmailMessage(String email) {
        rabbitTemplate.convertAndSend(RabbitMQConfig.QUEUE_NAME, email);
    }
}
