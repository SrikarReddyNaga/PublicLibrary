package com.example.PulbicLibraries.controller;

import com.example.PulbicLibraries.model.User;
import com.example.PulbicLibraries.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/get-readers")
    List<User> getAllReaders(){
        return userService.getAll();
    }
//
//    @PostMapping("/add-all")
//    User addAll(@RequestBody User user){
//        return userService.addAll(user);
//    }

}
