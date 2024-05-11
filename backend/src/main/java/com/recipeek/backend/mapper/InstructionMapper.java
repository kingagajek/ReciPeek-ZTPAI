package com.recipeek.backend.mapper;

import com.recipeek.backend.model.Instruction;
import org.springframework.stereotype.Component;
import com.recipeek.backend.dto.InstructionDTO;

@Component
public class InstructionMapper {
    public InstructionDTO toDTO(Instruction instruction) {
        InstructionDTO dto = new InstructionDTO();
        dto.setId(instruction.getId());
        dto.setStepNumber(instruction.getStepNumber());
        dto.setDescription(instruction.getDescription());
        return dto;
    }

    public Instruction toEntity(InstructionDTO instructionDTO) {
        return new Instruction()
                .setStepNumber(instructionDTO.getStepNumber())
                .setDescription(instructionDTO.getDescription());
    }

}