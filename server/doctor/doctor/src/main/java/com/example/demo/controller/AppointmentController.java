package com.example.demo.controller;

import com.example.demo.model.Appointment;
import com.example.demo.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    //TODO:okkal tér-e vissza vagy productlisttel?
    @GetMapping
    public ResponseEntity<List<Appointment>> getAppointments(){
        Logger.getAnonymousLogger().log(Level.INFO,"Get all Appointments");
        return new ResponseEntity<List<Appointment>>(appointmentService.getAllAppointment(), HttpStatus.OK);
    }

    @GetMapping("/{appointmentId}")
    public ResponseEntity<Appointment> getAppointmentById (@PathVariable int appointmentId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Get Appointment by ID");
        return ResponseEntity.ok(appointmentService.getAppointmentById(appointmentId));
    }

    @PostMapping("/add")
    public void addAppointment(@RequestBody Appointment appointment){
        Logger.getAnonymousLogger().log(Level.INFO,"Add Appointment");
        appointmentService.addAppointment(appointment);
    }

    @PutMapping("/update/{appointmentId}")
    public void updateAppointment(@RequestBody Appointment appointment, @PathVariable int appointmentId){
        Logger.getAnonymousLogger().log(Level.INFO,"Update Appointment by ID");
        appointmentService.updateAppointment(appointment);
    }

    @DeleteMapping("/delete/{appointmentId}")
    public void deleteAppointment (@PathVariable int appointmentId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Delete Appointment by ID");
        appointmentService.removeAppointmentById(appointmentId);
    }
}
