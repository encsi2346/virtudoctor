package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.ManyToAny;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "diary_posts",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "id")
        })
public class DiaryPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    private String description;

    private String bloodPressure;

    private String bodyTemperature;

    //@Enumerated(EnumType.STRING)
    //private List<Symtomps> symptoms;

    //private List<String> medicaments;

    private int weight;

    //private List<Mood> mood;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    @JsonIgnoreProperties("diaryposts")
    private Patient patient;

    public DiaryPost() {
    }

 /*   public DiaryPost(int id, String title, String description, String bloodPressure, String bodyTemperature, List<Symtomps> symptoms, List<String> medicaments, int weight, List<Mood> mood) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.bloodPressure = bloodPressure;
        this.bodyTemperature = bodyTemperature;
        this.symptoms = symptoms;
        this.medicaments = medicaments;
        this.weight = weight;
        this.mood = mood;
    }*/

    public DiaryPost(int id, String title, String description, String bloodPressure, String bodyTemperature, int weight, Patient patient) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.bloodPressure = bloodPressure;
        this.bodyTemperature = bodyTemperature;
        this.weight = weight;
        this.patient = patient;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getBloodPressure() {
        return bloodPressure;
    }

    public void setBloodPressure(String bloodPressure) {
        this.bloodPressure = bloodPressure;
    }

    public String getBodyTemperature() {
        return bodyTemperature;
    }

    public void setBodyTemperature(String bodyTemperature) {
        this.bodyTemperature = bodyTemperature;
    }

    /*public List<Symtomps> getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(List<Symtomps> symptoms) {
        this.symptoms = symptoms;
    }

    public List<String> getMedicaments() {
        return medicaments;
    }

    public void setMedicaments(List<String> medicaments) {
        this.medicaments = medicaments;
    }
*/
    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    /*public List<Mood> getMood() {
        return mood;
    }

    public void setMood(List<Mood> mood) {
        this.mood = mood;
    }*/

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}
