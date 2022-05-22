package com.example.demo.controller;

import com.example.demo.model.Appointment;
import com.example.demo.model.DiaryPost;
import com.example.demo.service.AppointmentService;
import com.example.demo.service.DiaryPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/diaryposts")
public class DiaryPostsController {

    @Autowired
    private DiaryPostService diaryPostService;

    //TODO:okkal tér-e vissza vagy productlisttel?
    @GetMapping
    public ResponseEntity<List<DiaryPost>> getDiaryPosts(){
        Logger.getAnonymousLogger().log(Level.INFO,"Get all DiaryPost");
        return new ResponseEntity<List<DiaryPost>>(diaryPostService.getAllDiaryPost(), HttpStatus.OK);
    }

    @GetMapping("/{diaryPostId}")
    public ResponseEntity<DiaryPost> getDiaryPostById (@PathVariable int diaryPostId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Get DiaryPost by ID");
        return ResponseEntity.ok(diaryPostService.getDiaryPostById(diaryPostId));
    }

    @PostMapping("/add")
    public void addDiaryPost(@RequestBody DiaryPost diaryPost){
        Logger.getAnonymousLogger().log(Level.INFO,"Add DiaryPost");
        diaryPostService.addDiaryPost(diaryPost);
    }

    @PutMapping("/update/{diaryPostId}")
    public void updateDiaryPost(@RequestBody DiaryPost diaryPost, @PathVariable int diaryPostId){
        Logger.getAnonymousLogger().log(Level.INFO,"Update DiaryPost by ID");
        diaryPostService.updateDiaryPost(diaryPost);
    }

    @DeleteMapping("/delete/{diaryPostId}")
    public void deleteDiaryPost (@PathVariable int diaryPostId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Delete DiaryPost by ID");
        diaryPostService.removeDiaryPostById(diaryPostId);
    }
}
