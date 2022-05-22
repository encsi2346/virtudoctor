package com.example.demo.service;

import com.example.demo.model.MedicamentRequest;
import com.example.demo.model.NewsPost;
import com.example.demo.repository.MedicamentRequestRepository;
import com.example.demo.repository.NewsPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class NewsPostService {
    @Autowired
    NewsPostRepository newsPostRepository;

    public NewsPost getNewsPostById(int id){
        return newsPostRepository.findById(id).get();
    }

    public List<NewsPost> getAllNewsPost() {
        return newsPostRepository.findAll();
    }

    @Transactional
    public void addNewsPost(NewsPost newsPost){
        try {
            newsPostRepository.save(newsPost);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }

    // @Transactional
    public void removeNewsPostById(int id){
        newsPostRepository.deleteById(id);
    }

    @Transactional
    public void updateNewsPost(NewsPost newsPost) {
        try {
            newsPostRepository.save(newsPost);
        } catch (Exception e) {
            System.out.println("elszáll");
        }
    }
}
