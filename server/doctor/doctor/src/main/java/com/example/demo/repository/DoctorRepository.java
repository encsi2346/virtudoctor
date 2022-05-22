package com.example.demo.repository;

import com.example.demo.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    //List<Doctor> findByMyDoctor(boolean myDoctor);
    //List<Doctor> findByFirstNameContaining(String firstName);
}
