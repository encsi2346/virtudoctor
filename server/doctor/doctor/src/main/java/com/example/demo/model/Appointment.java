package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "appointments",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "id")
        })
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    @JsonIgnoreProperties("appointments")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    @JsonIgnoreProperties("appointments")
    private Patient patient;

    private String type;

    private String comment;

    public Appointment() {
    }

    public Appointment(int id, String title, Doctor doctor, String type, String comment) {
        this.id = id;
        this.title = title;
        this.doctor = doctor;
        this.type = type;
        this.comment = comment;
    }

    public Appointment(int id, String title, Doctor doctor, Patient patient, String type, String comment) {
        this.id = id;
        this.title = title;
        this.doctor = doctor;
        this.patient = patient;
        this.type = type;
        this.comment = comment;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}
