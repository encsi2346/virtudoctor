package com.example.demo.service;

import com.example.demo.model.Doctor;
import com.example.demo.model.MedicamentRequest;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.repository.MedicamentRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MedicamentRequestService {
    @Autowired
    MedicamentRequestRepository medicamentRequestRepository;

    public MedicamentRequest getMedicamentRequestById(int id){
        return medicamentRequestRepository.findById(id).get();
    }

    public List<MedicamentRequest> getAllMedicamentRequest() {
        return medicamentRequestRepository.findAll();
    }

    @Transactional
    public void addMedicamentRequest(MedicamentRequest medicamentRequest){
        try {
            medicamentRequestRepository.save(medicamentRequest);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }

    // @Transactional
    public void removeMedicamentRequestById(int id){
        medicamentRequestRepository.deleteById(id);
    }

    @Transactional
    public void updateMedicamentRequest(MedicamentRequest medicamentRequest) {
        try {
            medicamentRequestRepository.save(medicamentRequest);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }
}
