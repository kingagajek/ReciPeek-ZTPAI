package com.recipeek.backend.rabbitmq;

import com.recipeek.backend.config.RabbitConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailProducer {

    private final RabbitTemplate rabbitTemplate;

    public void sendEmailMessage(String email) {
        rabbitTemplate.convertAndSend(RabbitConfig.QUEUE_NAME, email);
    }
}
