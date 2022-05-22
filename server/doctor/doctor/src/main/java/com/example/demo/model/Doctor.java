package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name ="doctors")
public class Doctor /*extends User*/{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Column(name = "title")
    private String title;

    @Column(name = "profession")
    private String profession;

    @Column(name = "doctor_id")
    private int doctorId;

    @Column(name = "my_patients")
    @ManyToMany
    private Set<Patient> myPatients;

    @OneToMany(mappedBy = "doctor", targetEntity = Appointment.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("doctor")
    private Set<Appointment> appointments;

    @OneToMany(mappedBy = "doctor", targetEntity = NewsPost.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("doctor")
    private Set<NewsPost> newsPosts;

    public Doctor() {
    }

    public Doctor(String title, String profession, int doctorId, Set<Patient> myPatients, Set<Appointment> appointments, Set<NewsPost> newsPosts) {
        this.title = title;
        this.profession = profession;
        this.doctorId = doctorId;
        this.myPatients = myPatients;
        this.appointments = appointments;
        this.newsPosts = newsPosts;
    }

    public Doctor(int id, String title, String profession, int doctorId) {
        this.id = id;
        this.title = title;
        this.profession = profession;
        this.doctorId = doctorId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public Set<Patient> getMyPatients() {
        return myPatients;
    }

    public void setMyPatients(Set<Patient> myPatients) {
        this.myPatients = myPatients;
    }

    public Set<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(Set<Appointment> appointments) {
        this.appointments = appointments;
    }

    public Set<NewsPost> getNewsPosts() {
        return newsPosts;
    }

    public void setNewsPosts(Set<NewsPost> newsPosts) {
        this.newsPosts = newsPosts;
    }
}
