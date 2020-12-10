package cz.cvut.fit.poletdan;

import cz.cvut.fit.poletdan.model.Film;
import cz.cvut.fit.poletdan.repository.FilmRepository;
import cz.cvut.fit.poletdan.service.FilmService;
import cz.cvut.fit.poletdan.service.FilmServiceImpl;
import cz.cvut.fit.poletdan.service.UserServiceImpl;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FilmServiceTest {

    @Autowired
    FilmServiceImpl service;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    FilmRepository filmRepository;

    @Autowired
    FilmService filmService;

    @Before
    public void addFilm() {
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

        Film addFilm2 = new Film();
        addFilm2.setName("Name 2");
        addFilm2.setCountry("RU");
        addFilm2.setGenre("Drama");
        addFilm2.setMotto("Motto");
        addFilm2.setProducer("Producer");
        addFilm2.setScreenwriter("Screenwriter");
        addFilm2.setOperator("Operator");
        addFilm2.setComposer("Composer");
        addFilm2.setBudget("$1000");
        addFilm2.setBox_office("$1000");
        addFilm2.setDVD_release("2020");
        addFilm2.setDuration("Duration");
        addFilm2.setPicture_url("URL");
        addFilm2.setYoutube_video_id("youtube");
        addFilm2.setDescription("Description");
        addFilm2.setRating(6.0);
        addFilm2.setYear("2019");

        filmRepository.save(addFilm1);
        filmRepository.save(addFilm2);
    }

    @Test
    public void get_all_films_test(){
        List<Film> found = service.getAll();
        Film film1 = found.get(0);

        assertThat(found.size()).isEqualTo(2);

        assertThat(film1.getName()).isEqualTo("Name 1");
        assertThat(film1.getCountry()).isEqualTo("USA");
        assertThat(film1.getRating()).isEqualTo(5.0);
        assertThat(film1.getYear()).isEqualTo("2020");

        Film film2 = found.get(1);

        assertThat(film2.getName()).isEqualTo("Name 2");
        assertThat(film2.getCountry()).isEqualTo("RU");
        assertThat(film2.getRating()).isEqualTo(6.0);
        assertThat(film2.getYear()).isEqualTo("2019");
    }

    @Test
    public void on_rating_update_test(){
        List<Film> films = filmService.getAll();
        service.updateRatingById(films.get(0).getId(), 7.834);
        Optional<Film> film = service.findFilmById(films.get(0).getId());

        assertThat(film.isPresent()).isEqualTo(true);

        assertThat(film.get().getRating()).isEqualTo(6.417);

        service.updateRatingById(films.get(0).getId(), 5.0);
        film = service.findFilmById(films.get(0).getId());
        assertThat(film.isPresent()).isEqualTo(true);
        assertThat(film.get().getRating()).isEqualTo(5.7085);
    }

    @Test
    public void find_film_by_id_test(){
        List<Film> found = service.getAll();
        Film film = found.get(0);
        Optional<Film> foundFilm = service.findFilmById(film.getId());
        assertThat(foundFilm.isPresent()).isEqualTo(true);
        assertThat(foundFilm.get().getName()).isEqualTo("Name 1");
        assertThat(foundFilm.get().getYear()).isEqualTo("2020");
        assertThat(foundFilm.get().getCountry()).isEqualTo("USA");
    }

    @After
    public void deleteFilm(){
        filmRepository.deleteAll();
    }
}
