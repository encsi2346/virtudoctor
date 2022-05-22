package com.example.demo.service;

import com.example.demo.model.Appointment;
import com.example.demo.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    AppointmentRepository appointmentRepository;

    public Appointment getAppointmentById(int id){
        return appointmentRepository.findById(id).get();
    }

    public List<Appointment> getAllAppointment() {
        return appointmentRepository.findAll();
    }

    @Transactional
    public void addAppointment(Appointment appointment){
        try {
            appointmentRepository.save(appointment);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }

    // @Transactional
    public void removeAppointmentById(int id){
        appointmentRepository.deleteById(id);
    }

    @Transactional
    public void updateAppointment(Appointment appointment) {
        try {
            appointmentRepository.save(appointment);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }
}
