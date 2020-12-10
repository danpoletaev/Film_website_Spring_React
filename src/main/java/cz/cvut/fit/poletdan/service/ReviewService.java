package cz.cvut.fit.poletdan.service;

import cz.cvut.fit.poletdan.dto.ReviewDTO;
import cz.cvut.fit.poletdan.model.Film;
import cz.cvut.fit.poletdan.model.Review;

import java.util.List;

public interface ReviewService {
    Review save(ReviewDTO reviewDTO);
    List<Review> getById(Long film_id);
    void deleteByReviewId(Long review_id);
//    List<Review> getIdByUsername(String username);
    boolean addReviewWithCheck(ReviewDTO reviewDTO);
}
