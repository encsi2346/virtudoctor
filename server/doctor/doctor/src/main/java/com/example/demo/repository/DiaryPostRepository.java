package com.example.demo.repository;

import com.example.demo.model.DiaryPost;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiaryPostRepository extends JpaRepository<DiaryPost, Integer> {
}
