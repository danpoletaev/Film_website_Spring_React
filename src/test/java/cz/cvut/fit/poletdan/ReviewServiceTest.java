package cz.cvut.fit.poletdan;

import cz.cvut.fit.poletdan.dto.FilmDTO;
import cz.cvut.fit.poletdan.dto.ReviewDTO;
import cz.cvut.fit.poletdan.model.Film;
import cz.cvut.fit.poletdan.model.Review;
import cz.cvut.fit.poletdan.model.Role;
import cz.cvut.fit.poletdan.model.User;
import cz.cvut.fit.poletdan.repository.FilmRepository;
import cz.cvut.fit.poletdan.repository.ReviewRepository;
import cz.cvut.fit.poletdan.repository.UserRepository;
import cz.cvut.fit.poletdan.service.FilmServiceImpl;
import cz.cvut.fit.poletdan.service.ReviewServiceImpl;
import cz.cvut.fit.poletdan.service.UserServiceImpl;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ReviewServiceTest {

    @Autowired
    ReviewServiceImpl service;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    FilmServiceImpl filmService;

    @Autowired
    FilmRepository filmRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    UserRepository userRepository;

    @Before
    public void load_user_and_film() {
        List<Role> roles = Arrays.asList(new Role("ROLE_USER"));
        User user = new User("email@com", "passwd", "test", roles);
        userService.save(user);

        Film addFilm1 = new Film();
        addFilm1.setName("Name 1");
        addFilm1.setCountry("USA");
        addFilm1.setGenre("Comedy");
        addFilm1.setMotto("Motto");
        addFilm1.setProducer("Producer");
        addFilm1.setScreenwriter("Screenwriter");
        addFilm1.setOperator("Operator");
        addFilm1.setComposer("Composer");
        addFilm1.setBudget("$1000");
        addFilm1.setBox_office("$1000");
        addFilm1.setDVD_release("2020");
        addFilm1.setDuration("Duration");
        addFilm1.setPicture_url("URL");
        addFilm1.setYoutube_video_id("youtube");
        addFilm1.setDescription("Description");
        addFilm1.setRating(5.0);
        addFilm1.setYear("2020");

        filmRepository.save(addFilm1);
    }

    @Test
    public void add_review_test(){
        Optional<User> user = userService.getByEmail("email@com");
        User foundUser = new User();
        if (user.isPresent())
            foundUser = user.get();
        List<Film> foundFilms = filmService.getAll();

        ReviewDTO reviewDTO = new ReviewDTO(foundUser.getId(), true, "test review", 5.6, foundFilms.get(0).getId());
        boolean result = service.addReviewWithCheck(reviewDTO);

        assertThat(result).isEqualTo(true);

        List<Review> reviews = service.getById(foundFilms.get(0).getId());
        assertThat(reviews.size()).isNotEqualTo(0);
        assertThat(reviews.get(0).getUser().getId()).isEqualTo(foundUser.getId());
        assertThat(reviews.get(0).isPositive()).isEqualTo(true);
        assertThat(reviews.get(0).getReview()).isEqualTo("test review");
        assertThat(reviews.get(0).getRating()).isEqualTo(5.6);
    }

    @Test
    public void add_2_review_test (){
        Optional<User> user = userService.getByEmail("email@com");
        User foundUser = new User();
        if (user.isPresent())
            foundUser = user.get();
        List<Film> foundFilms = filmService.getAll();

        ReviewDTO reviewDTO = new ReviewDTO(foundUser.getId(), true, "test review", 5.6, foundFilms.get(0).getId());
        boolean result = service.addReviewWithCheck(reviewDTO);

        assertThat(result).isEqualTo(true);
        result = service.addReviewWithCheck(reviewDTO);
        assertThat(result).isEqualTo(false);
    }

    @Test
    public void delete_review_test() {
        Optional<User> user = userService.getByEmail("email@com");
        User foundUser = new User();
        if (user.isPresent())
            foundUser = user.get();
        List<Film> foundFilms = filmService.getAll();

        ReviewDTO reviewDTO = new ReviewDTO(foundUser.getId(), true, "test review", 5.6, foundFilms.get(0).getId());
        boolean result = service.addReviewWithCheck(reviewDTO);

        assertThat(result).isEqualTo(true);
        List<Review> review = service.getById(foundFilms.get(0).getId());
        assertThat(review.size()).isEqualTo(1);

        service.deleteByReviewId(review.get(0).getId());

        review = service.getById(foundFilms.get(0).getId());
        assertThat(review.size()).isEqualTo(0);
    }

    @After
    public void cleanData(){
        reviewRepository.deleteAll();
        userRepository.deleteAll();
        filmRepository.deleteAll();
    }
}
