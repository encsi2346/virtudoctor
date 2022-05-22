package com.example.demo.repository;

import com.example.demo.model.NewsPost;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsPostRepository extends JpaRepository<NewsPost, Integer> {
}