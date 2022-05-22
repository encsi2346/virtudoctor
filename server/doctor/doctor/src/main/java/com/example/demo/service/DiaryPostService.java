package com.example.demo.service;

import com.example.demo.model.Appointment;
import com.example.demo.model.DiaryPost;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.DiaryPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DiaryPostService {
    @Autowired
    DiaryPostRepository diaryPostRepository;

    public DiaryPost getDiaryPostById(int id){
        return diaryPostRepository.findById(id).get();
    }

    public List<DiaryPost> getAllDiaryPost() {
        return diaryPostRepository.findAll();
    }

    @Transactional
    public void addDiaryPost(DiaryPost diaryPost){
        try {
            diaryPostRepository.save(diaryPost);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }

    // @Transactional
    public void removeDiaryPostById(int id){
        diaryPostRepository.deleteById(id);
    }

    @Transactional
    public void updateDiaryPost(DiaryPost diaryPost) {
        try {
            diaryPostRepository.save(diaryPost);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }
}
