package com.example.PulbicLibraries.repository;

import com.example.PulbicLibraries.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepository extends JpaRepository<Books, Long> {

}
