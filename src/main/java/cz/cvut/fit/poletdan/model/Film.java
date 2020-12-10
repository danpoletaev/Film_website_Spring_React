package cz.cvut.fit.poletdan.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Film {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String country;
    private String genre;
    private String motto;
    private String producer;
    private String screenwriter;
    private String operator;
    private String composer;
    private String budget;
    private String box_office;
    private String DVD_release;
    private String duration;
    private String picture_url;
    private String youtube_video_id;
    private String description;
    private double rating;
    private String year;

    public Film(String name, String country, String genre, String motto, String producer, String screenwriter, String operator, String composer, String budget, String box_office, String DVD_release, String duration, String picture_url, String youtube_video_id, String description, double rating) {
        this.name = name;
        this.country = country;
        this.genre = genre;
        this.motto = motto;
        this.producer = producer;
        this.screenwriter = screenwriter;
        this.operator = operator;
        this.composer = composer;
        this.budget = budget;
        this.box_office = box_office;
        this.DVD_release = DVD_release;
        this.duration = duration;
        this.picture_url = picture_url;
        this.youtube_video_id = youtube_video_id;
        this.description = description;
        this.rating = rating;
    }

    public Film(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getMotto() {
        return motto;
    }

    public void setMotto(String motto) {
        this.motto = motto;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getScreenwriter() {
        return screenwriter;
    }

    public void setScreenwriter(String screenwriter) {
        this.screenwriter = screenwriter;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public String getComposer() {
        return composer;
    }

    public void setComposer(String composer) {
        this.composer = composer;
    }

    public String getBudget() {
        return budget;
    }

    public void setBudget(String budget) {
        this.budget = budget;
    }

    public String getBox_office() {
        return box_office;
    }

    public void setBox_office(String box_office) {
        this.box_office = box_office;
    }

    public String getDVD_release() {
        return DVD_release;
    }

    public void setDVD_release(String DVD_release) {
        this.DVD_release = DVD_release;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getPicture_url() {
        return picture_url;
    }

    public void setPicture_url(String picture_url) {
        this.picture_url = picture_url;
    }

    public String getYoutube_video_id() {
        return youtube_video_id;
    }

    public void setYoutube_video_id(String youtube_video_id) {
        this.youtube_video_id = youtube_video_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
