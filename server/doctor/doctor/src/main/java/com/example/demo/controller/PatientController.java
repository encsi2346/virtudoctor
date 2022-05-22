package com.example.demo.controller;

import com.example.demo.model.NewsPost;
import com.example.demo.model.Patient;
import com.example.demo.service.NewsPostService;
import com.example.demo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/patients")
public class PatientController {
    @Autowired
    private PatientService patientService;

    //TODO:okkal tér-e vissza vagy productlisttel?
    @GetMapping
    public ResponseEntity<List<Patient>> getPatients(){
        Logger.getAnonymousLogger().log(Level.INFO,"Get all Patients");
        return new ResponseEntity<List<Patient>>(patientService.getAllPatient(), HttpStatus.OK);
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<Patient> getPatientById (@PathVariable int patientId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Get Patient by ID");
        return ResponseEntity.ok(patientService.getPatientById(patientId));
    }

    @PostMapping("/add")
    public void addPatient(@RequestBody Patient patient){
        Logger.getAnonymousLogger().log(Level.INFO,"Add Patient");
        patientService.addPatient(patient);
    }

    @PutMapping("/update/{patientId}")
    public void updatePatient(@RequestBody Patient patient, @PathVariable int patientId){
        Logger.getAnonymousLogger().log(Level.INFO,"Update Patient by ID");
        patientService.updatePatient(patient);
    }

    @DeleteMapping("/delete/{patientId}")
    public void deletePatient (@PathVariable int patientId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Delete Patient by ID");
        patientService.removePatientById(patientId);
    }

}
