package cz.cvut.fit.poletdan.controllers;
import cz.cvut.fit.poletdan.dto.ReviewDTO;
import cz.cvut.fit.poletdan.model.Review;
import cz.cvut.fit.poletdan.service.FilmService;
import cz.cvut.fit.poletdan.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewController {
    private ReviewService reviewService;
    private FilmService filmService;

    @Autowired
    public ReviewController(ReviewService reviewService, FilmService filmService) {
        this.reviewService = reviewService;
        this.filmService = filmService;
    }

    @GetMapping("/getReviews/{id}")
    public List<Review> getReviewsById(@PathVariable Long id){
        return reviewService.getById(id);
    }

    @PostMapping("/addReview")
    public boolean addReview(@RequestBody ReviewDTO reviewDTO){
        boolean result = reviewService.addReviewWithCheck(reviewDTO);
        return result;
    }

//    @GetMapping("/getReviewId")
//    public Long getOneReviewIdByUsername(@RequestParam String username) {
//        List<Review> reviews = reviewService.getIdByUsername(username);
//        return reviews.get(0).getId();
//    }

    @DeleteMapping("/deleteReview/{id}")
    public void deleteReview(@PathVariable Long id){
        reviewService.deleteByReviewId(id);
    }
}
