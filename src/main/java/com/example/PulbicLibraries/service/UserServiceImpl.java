package com.example.PulbicLibraries.service;
import com.example.PulbicLibraries.model.User;
import com.example.PulbicLibraries.repository.BooksRepository;
import com.example.PulbicLibraries.repository.LibraryRepository;
import com.example.PulbicLibraries.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private LibraryRepository libraryRepository;
    @Autowired
    private BooksRepository bookRepository;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }
}
