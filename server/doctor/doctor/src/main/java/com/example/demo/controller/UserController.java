package com.example.demo.controller;

import com.example.demo.model.Patient;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.PatientService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    //TODO:okkal tér-e vissza vagy productlisttel?
    @GetMapping
    public ResponseEntity<List<User>> getUsers(){
        Logger.getAnonymousLogger().log(Level.INFO,"Get all Users");
        return new ResponseEntity<List<User>>(userService.getAllUser(), HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById (@PathVariable int userId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Get User by ID");
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @PostMapping("/add")
    public void addUser(@RequestBody User user){
        Logger.getAnonymousLogger().log(Level.INFO,"Add User");
        userService.addUser(user);
    }

    @PutMapping("/update/{userId}")
    public void updateUser(@RequestBody User user, @PathVariable("userId") int userId){
        Logger.getAnonymousLogger().log(Level.INFO,"Update User by ID");
        Optional<User> userData = userRepository.findById(userId);
        if (userData.isPresent()) {
            User _user = userData.get();
            _user.setId(user.getId());
            _user.setUsername(user.getUsername());
            _user.setEmail(user.getEmail());
            _user.setPassword(user.getPassword());
            _user.setRoles(user.getRoles());
            _user.setFirstName(user.getFirstName());
            _user.setLastName(user.getLastName());
            _user.setBirthDate(user.getBirthDate());
            _user.setIdCardNumber(user.getIdCardNumber());
            _user.setTajNumber(user.getTajNumber());
            _user.setMedicamentRequests(user.getMedicamentRequests());
            userRepository.save(_user);
        }

        //userService.updateUser(user);
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteUser (@PathVariable int userId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Delete User by ID");
        userService.removeUserById(userId);
    }

}

