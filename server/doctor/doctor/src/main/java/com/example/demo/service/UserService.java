package com.example.demo.service;

import com.example.demo.model.Patient;
import com.example.demo.model.User;
import com.example.demo.repository.PatientRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User getUserById(int id){
        return userRepository.findById(id).get();
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Transactional
    public void addUser(User user){
        try {
            userRepository.save(user);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }

    // @Transactional
    public void removeUserById(int id){
        userRepository.deleteById(id);
    }

    @Transactional
    public void updateUser(User user) {
        try {
            userRepository.save(user);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }
}

