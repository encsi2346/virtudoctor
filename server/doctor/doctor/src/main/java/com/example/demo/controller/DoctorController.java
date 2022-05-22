package com.example.demo.controller;

import com.example.demo.model.Appointment;
import com.example.demo.model.Doctor;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.service.AppointmentService;
import com.example.demo.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/doctors")
public class DoctorController {
    @Autowired
    DoctorRepository doctorRepository;

    @Autowired
    private DoctorService doctorService;

    //TODO:okkal tér-e vissza vagy productlisttel?
    @GetMapping
    public ResponseEntity<List<Doctor>> getDoctors(){
        Logger.getAnonymousLogger().log(Level.INFO,"Get all Doctors");
        return new ResponseEntity<List<Doctor>>(doctorService.getAllDoctor(), HttpStatus.OK);
    }

    @GetMapping("/{doctorId}")
    public ResponseEntity<Doctor> getDoctorById (@PathVariable int doctorId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Get Doctor by ID");
        return ResponseEntity.ok(doctorService.getDoctorById(doctorId));
    }

    @PostMapping("/add")
    public void addDoctor(@RequestBody Doctor doctor){
        Logger.getAnonymousLogger().log(Level.INFO,"Add Doctor");
        doctorService.addDoctor(doctor);
    }

    @PutMapping("/update/{doctorId}")
    public void updateDoctor(@RequestBody Doctor doctor, @PathVariable int doctorId){
        Logger.getAnonymousLogger().log(Level.INFO,"Update Doctor by ID");
        doctorService.updateDoctor(doctor);
    }

    @DeleteMapping("/delete/{doctorId}")
    public void deleteDoctor (@PathVariable int doctorId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Delete Doctor by ID");
        doctorService.removeDoctorById(doctorId);
    }






    /*@GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> getAllDoctors(@RequestParam(required = false) String firstName) {
        try {
            List<Doctor> doctors = new ArrayList<Doctor>();
            if (firstName == null)
                doctorRepository.findAll().forEach(doctors::add);
            else
                doctorRepository.findByFirstNameContaining(firstName).forEach(doctors::add);
            if (doctors.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(doctors, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/doctors/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable("id") long id) {
        Optional<Doctor> doctorData = doctorRepository.findById(id);
        if (doctorData.isPresent()) {
            return new ResponseEntity<>(doctorData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/doctors")
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        try {
            Doctor _doctor = doctorRepository
                    .save(new Doctor(doctor.getFirstName(), doctor.getLastName(), doctor.getProfession(),false));
            return new ResponseEntity<>(_doctor, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/doctors/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable("id") long id, @RequestBody Doctor doctor) {
        Optional<Doctor> doctorData = doctorRepository.findById(id);
        if (doctorData.isPresent()) {
            Doctor _doctor = doctorData.get();
            _doctor.setFirstName(doctor.getFirstName());
            _doctor.setLastName(doctor.getLastName());
            _doctor.setProfession(doctor.getProfession());
            _doctor.setMyDoctor(doctor.isMyDoctor());
            return new ResponseEntity<>(doctorRepository.save(_doctor), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/doctors/{id}")
    public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable("id") long id) {
        try {
            doctorRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/doctors")
    public ResponseEntity<HttpStatus> deleteAllDoctors() {
        try {
            doctorRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/doctors/mydoctors")
    public ResponseEntity<List<Doctor>> findByMyDoctor() {
        try {
            List<Doctor> doctors = doctorRepository.findByMyDoctor(true);
            if (doctors.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(doctors, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/
}
