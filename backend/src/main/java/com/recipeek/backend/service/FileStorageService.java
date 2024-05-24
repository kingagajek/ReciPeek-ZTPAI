package com.recipeek.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Slf4j
@RequiredArgsConstructor
@Service
public class FileStorageService {
    @Value("${application.file.upload.photos-path}")
    private String fileUploadPath;

    public void deleteFile(String pictureUrl) {
    }

    public String saveFile(@NonNull MultipartFile sourceFile) {
        return uploadFile(sourceFile    );
    }

    private String uploadFile(@NonNull MultipartFile sourceFile) {

        File targetFolder = new File(fileUploadPath);
        if (!targetFolder.exists()) {
            boolean folderCreated = targetFolder.mkdir();

            if (!folderCreated) {
                log.warn("Failed to create the target folder");
            }
        }

        final String fileExt = getFileExtension(sourceFile.getOriginalFilename());
        String targetFilePath = fileUploadPath + File.separator + System.currentTimeMillis() + "." + fileExt;
        Path targetPath = Paths.get(targetFilePath);

        try {
            Files.write(targetPath, sourceFile.getBytes());
            log.info("File saved to: {}", targetFilePath);
            return targetFilePath;
        } catch (IOException e) {
            log.error("File was not saved", e);
        }

        return null;
    }

    private String getFileExtension(String fullFilename) {
        if (fullFilename == null || fullFilename.isEmpty()) {
            return "";
        }

        int lastDotIndex = fullFilename.lastIndexOf(".");

        if (lastDotIndex == -1) {
            return "";
        }

        return fullFilename.substring(lastDotIndex + 1).toLowerCase();
    }
}
