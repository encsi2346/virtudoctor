package com.example.demo.service;

import com.example.demo.model.DiaryPost;
import com.example.demo.model.Doctor;
import com.example.demo.repository.DiaryPostRepository;
import com.example.demo.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    DoctorRepository doctorRepository;

    public Doctor getDoctorById(int id){
        return doctorRepository.findById(id).get();
    }

    public List<Doctor> getAllDoctor() {
        return doctorRepository.findAll();
    }

    @Transactional
    public void addDoctor(Doctor doctor){
        try {
            doctorRepository.save(doctor);
        } catch (Exception e) {
            System.out.println("Nem sikerült az orvos felvétele!");
        }
    }

    // @Transactional
    public void removeDoctorById(int id){
        doctorRepository.deleteById(id);
    }

    @Transactional
    public void updateDoctor(Doctor doctor) {
        try {
            doctorRepository.save(doctor);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }
}
