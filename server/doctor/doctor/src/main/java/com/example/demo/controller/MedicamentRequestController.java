package com.example.demo.controller;

import com.example.demo.model.Doctor;
import com.example.demo.model.MedicamentRequest;
import com.example.demo.model.User;
import com.example.demo.repository.MedicamentRequestRepository;
import com.example.demo.service.DoctorService;
import com.example.demo.service.MedicamentRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/medicamentrequests")
public class MedicamentRequestController {

    @Autowired
    private MedicamentRequestService medicamentRequestService;

    @Autowired
    private MedicamentRequestRepository medicamentRequestRepository;

    //TODO:okkal tér-e vissza vagy productlisttel?
    @GetMapping
    public ResponseEntity<List<MedicamentRequest>> getMedicamentRequests(){
        Logger.getAnonymousLogger().log(Level.INFO,"Get all MedicamentRequests");
        return new ResponseEntity<List<MedicamentRequest>>(medicamentRequestService.getAllMedicamentRequest(), HttpStatus.OK);
    }

    @GetMapping("/{medicamentRequestId}")
    public ResponseEntity<MedicamentRequest> getMedicamentRequestById (@PathVariable int medicamentRequestId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Get MedicamentRequest by ID");
        return ResponseEntity.ok(medicamentRequestService.getMedicamentRequestById(medicamentRequestId));
    }

    @PostMapping("/add")
    public void addMedicamentRequest(@RequestBody MedicamentRequest medicamentRequest){
        Logger.getAnonymousLogger().log(Level.INFO,"Add MedicamentRequest");
        medicamentRequestService.addMedicamentRequest(medicamentRequest);
    }

    @PutMapping("/update/{medicamentRequestId}")
    public void updateMedicamentRequest(@RequestBody MedicamentRequest medicamentRequest, @PathVariable int medicamentRequestId){
        Logger.getAnonymousLogger().log(Level.INFO,"Update MedicamentRequest by ID");
        Optional<MedicamentRequest> medicamentRequestData = medicamentRequestRepository.findById(medicamentRequestId);
        if (medicamentRequestData.isPresent()) {
            MedicamentRequest _medicamentRequest = medicamentRequestData.get();
            _medicamentRequest.setId(medicamentRequest.getId());
            _medicamentRequest.setAmount(medicamentRequest.getAmount());
            _medicamentRequest.setName(medicamentRequest.getName());
            _medicamentRequest.setReason(medicamentRequest.getReason());
            _medicamentRequest.setPrice(medicamentRequest.getPrice());
            _medicamentRequest.setType(medicamentRequest.getType());
            _medicamentRequest.setUser(medicamentRequest.getUser());
            medicamentRequestRepository.save(_medicamentRequest);
        }

        medicamentRequestService.updateMedicamentRequest(medicamentRequest);
    }

    @DeleteMapping("/delete/{medicamentRequestId}")
    public void deleteMedicamentRequest (@PathVariable int medicamentRequestId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Delete MedicamentRequest by ID");
        medicamentRequestService.removeMedicamentRequestById(medicamentRequestId);
    }

}
