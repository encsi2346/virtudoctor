package com.example.demo.controller;

import com.example.demo.model.MedicamentRequest;
import com.example.demo.model.NewsPost;
import com.example.demo.service.MedicamentRequestService;
import com.example.demo.service.NewsPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/newsposts")
public class NewsPostController {
    @Autowired
    private NewsPostService newsPostService;

    //TODO:okkal tér-e vissza vagy productlisttel?
    @GetMapping
    public ResponseEntity<List<NewsPost>> getNewsPosts(){
        Logger.getAnonymousLogger().log(Level.INFO,"Get all NewsPosts");
        return new ResponseEntity<List<NewsPost>>(newsPostService.getAllNewsPost(), HttpStatus.OK);
    }

    @GetMapping("/{newsPostId}")
    public ResponseEntity<NewsPost> getNewsPostById (@PathVariable int newsPostId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Get NewsPost by ID");
        return ResponseEntity.ok(newsPostService.getNewsPostById(newsPostId));
    }

    @PostMapping("/add")
    public void addNewsPost(@RequestBody NewsPost newsPost){
        Logger.getAnonymousLogger().log(Level.INFO,"Add NewsPost");
        newsPostService.addNewsPost(newsPost);
    }

    @PutMapping("/update/{newsPostId}")
    public void updateNewsPost(@RequestBody NewsPost newsPost, @PathVariable int newsPostId){
        Logger.getAnonymousLogger().log(Level.INFO,"Update NewsPost by ID");
        newsPostService.updateNewsPost(newsPost);
    }

    @DeleteMapping("/delete/{newsPostId}")
    public void deleteNewsPost (@PathVariable int newsPostId) {
        Logger.getAnonymousLogger().log(Level.INFO,"Delete NewsPost by ID");
        newsPostService.removeNewsPostById(newsPostId);
    }

}
