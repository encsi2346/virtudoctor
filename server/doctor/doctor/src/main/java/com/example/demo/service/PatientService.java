package com.example.demo.service;

import com.example.demo.model.NewsPost;
import com.example.demo.model.Patient;
import com.example.demo.repository.NewsPostRepository;
import com.example.demo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PatientService {
    @Autowired
    PatientRepository patientRepository;

    public Patient getPatientById(int id){
        return patientRepository.findById(id).get();
    }

    public List<Patient> getAllPatient() {
        return patientRepository.findAll();
    }

    @Transactional
    public void addPatient(Patient patient){
        try {
            patientRepository.save(patient);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }

    // @Transactional
    public void removePatientById(int id){
        patientRepository.deleteById(id);
    }

    @Transactional
    public void updatePatient(Patient patient) {
        try {
            patientRepository.save(patient);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }
}
