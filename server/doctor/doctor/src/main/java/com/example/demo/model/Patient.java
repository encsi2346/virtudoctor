package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name ="patients")
public class Patient /*extends User*/{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Size(max = 20)
    private String birthName;

    @Size(max = 20)
    private String birthPlace;

    @Size(max = 20)
    private String permanentAddress;

    @Column(name = "my_doctors")
    @ManyToMany
    private Set<Doctor> myDoctors;

    @OneToMany(mappedBy = "patient", targetEntity = Appointment.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("patient")
    private Set<Appointment> appointments;

    @OneToMany(mappedBy = "patient", targetEntity = DiaryPost.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("patient")
    private Set<DiaryPost> diaryPosts;

    public Patient() {
    }

    public Patient(int id, String birthName, String birthPlace, String permanentAddress, Set<Doctor> myDoctors, Set<Appointment> appointments, Set<DiaryPost> diaryPosts) {
        this.id = id;
        this.birthName = birthName;
        this.birthPlace = birthPlace;
        this.permanentAddress = permanentAddress;
        this.myDoctors = myDoctors;
        this.appointments = appointments;
        this.diaryPosts = diaryPosts;
    }


    public String getBirthName() {
        return birthName;
    }

    public void setBirthName(String birthName) {
        this.birthName = birthName;
    }

    public String getBirthPlace() {
        return birthPlace;
    }

    public void setBirthPlace(String birthPlace) {
        this.birthPlace = birthPlace;
    }

    public String getPermanentAddress() {
        return permanentAddress;
    }

    public void setPermanentAddress(String permanentAddress) {
        this.permanentAddress = permanentAddress;
    }

    public Set<Doctor> getMyDoctors() {
        return myDoctors;
    }

    public void setMyDoctors(Set<Doctor> myDoctors) {
        this.myDoctors = myDoctors;
    }

    public Set<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(Set<Appointment> appointments) {
        this.appointments = appointments;
    }

    public Set<DiaryPost> getDiaryPosts() {
        return diaryPosts;
    }

    public void setDiaryPosts(Set<DiaryPost> diaryPosts) {
        this.diaryPosts = diaryPosts;
    }
}
