package com.example.PulbicLibraries.repository;

import com.example.PulbicLibraries.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
