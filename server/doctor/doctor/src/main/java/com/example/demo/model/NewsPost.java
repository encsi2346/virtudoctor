package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "news_post",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "id")
        })
public class NewsPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    private String whom;

    private String publication;

    //TODO: manytoone vagy manytomany?
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    public NewsPost() {
    }

    public NewsPost(int id, String title, String whom, String publication, Doctor doctor) {
        this.id = id;
        this.title = title;
        this.whom = whom;
        this.publication = publication;
        this.doctor = doctor;
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

    public String getWhom() {
        return whom;
    }

    public void setWhom(String whom) {
        this.whom = whom;
    }

    public String getPublication() {
        return publication;
    }

    public void setPublication(String publication) {
        this.publication = publication;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }
}
