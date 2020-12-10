package cz.cvut.fit.poletdan.service;

import cz.cvut.fit.poletdan.dto.ReviewDTO;
import cz.cvut.fit.poletdan.model.Film;
import cz.cvut.fit.poletdan.model.Review;
import cz.cvut.fit.poletdan.model.User;
import cz.cvut.fit.poletdan.repository.FilmRepository;
import cz.cvut.fit.poletdan.repository.ReviewRepository;
import cz.cvut.fit.poletdan.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    private ReviewRepository reviewRepository;
    private UserRepository userRepository;
    private FilmRepository filmRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository, UserRepository userRepository, FilmRepository filmRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.filmRepository = filmRepository;
    }


    @Override
    public Review save(ReviewDTO reviewDTO) {
        Optional<User> user = userRepository.findById(reviewDTO.getUser_id());
        Optional<Film> film = filmRepository.findById(reviewDTO.getFilm_id());

        Review review = new Review(
                user.get(),
                reviewDTO.isPositive(),
                reviewDTO.getReview(),
                reviewDTO.getRating(),
                film.get()
        );

        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getById(Long film_id) {
        List<Review> reviews = reviewRepository.findAll();
        reviews.removeIf(e -> e.getFilm().getId() != film_id);
        return reviews;
    }

    @Override
    public void deleteByReviewId(Long review_id) {
        reviewRepository.deleteById(review_id);
    }

    @Override
    public boolean addReviewWithCheck(ReviewDTO reviewDTO) {
        List<Review> reviews = getById(reviewDTO.getFilm_id());
        if(reviews.removeIf(item -> item.getUser().getId().equals(reviewDTO.getUser_id()))){
            return false;
        }
        save(reviewDTO);
        return true;
    }
}
