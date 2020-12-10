package cz.cvut.fit.poletdan.model;

import javax.persistence.*;

@Entity
public class Review {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn(nullable=false)
    private User user;
    private boolean positive;
    private String review;
    private double rating;
    @OneToOne
    private Film film;

    public Review(){}

    public Review(User user, boolean positive, String review, double rating, Film film) {
        this.user = user;
        this.positive = positive;
        this.review = review;
        this.film = film;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isPositive() {
        return positive;
    }

    public void setPositive(boolean positive) {
        this.positive = positive;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }
}
