package cz.cvut.fit.poletdan.dto;

public class ReviewDTO {
    private Long user_id;
    private boolean positive;
    private String review;
    private double rating;
    private Long film_id;

    public ReviewDTO(Long user_id, boolean positive, String review, double rating, Long film_id) {
        this.user_id = user_id;
        this.positive = positive;
        this.review = review;
        this.rating = rating;
        this.film_id = film_id;
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

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getFilm_id() {
        return film_id;
    }

    public void setFilm_id(Long film_id) {
        this.film_id = film_id;
    }
}
