package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "medicament_requests",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "id")
        })
public class MedicamentRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String type;

    private int amount;

    private int price;

    private String reason;

    //TODO: manytoone vagy manytomany?
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public MedicamentRequest() {
    }

    public MedicamentRequest(int id, String name, String type, int amount, int price, String reason, User user) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.amount = amount;
        this.price = price;
        this.reason = reason;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
