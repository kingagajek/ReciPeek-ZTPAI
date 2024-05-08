package com.recipeek.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;


@Service
@RequiredArgsConstructor
public class FileStorageService {
    private static final Logger log = LoggerFactory.getLogger(FileStorageService.class);

//    @Value("${application.file.upload.dir}")
    private String fileUploadDir;

    public String saveFile(MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Cannot save an empty file.");
        }

        String filename = constructFilename(file.getOriginalFilename());
        Path destinationFile = Paths.get(fileUploadDir).resolve(Paths.get(filename))
                .normalize().toAbsolutePath();

        if (!destinationFile.getParent().equals(Paths.get(fileUploadDir).toAbsolutePath())) {
            throw new IllegalArgumentException("Cannot store file outside current directory.");
        }

        file.transferTo(destinationFile);
        log.info("File uploaded successfully: {}", destinationFile);
        return destinationFile.toString();
    }

    private String constructFilename(String originalFilename) {
        String fileExt = getFileExtension(originalFilename);
        return System.currentTimeMillis() + "." + fileExt;
    }

    private String getFileExtension(String filename) {
        return filename.substring(filename.lastIndexOf(".") + 1);
    }
}