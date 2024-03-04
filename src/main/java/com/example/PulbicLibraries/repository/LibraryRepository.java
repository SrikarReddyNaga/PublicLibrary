package com.example.PulbicLibraries.repository;

import com.example.PulbicLibraries.model.Library;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibraryRepository extends JpaRepository<Library, Long> {
}
