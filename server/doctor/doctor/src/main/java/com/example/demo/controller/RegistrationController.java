package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.NotificationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

    private Logger logger = LoggerFactory.getLogger(RegistrationController.class);

    @Autowired
    private NotificationService notificationService;

    @RequestMapping("/signup")
    public String signup(){
        return "Please sign up for our service.";
    }

    @RequestMapping("/signup-success")
    public String signupSuccess(){
        //create user
        User user = new User();
        user.setUsername("Dan");
        user.setEmail("encsi2346@gmail.com");
        //send a notification
        try{
            notificationService.sendNotification(user);
        } catch(MailException e){
            //catch error
            logger.info("Error Sending Email: " + e.getMessage());
        }

        return "Thank you for registering with us.";
    }
}
