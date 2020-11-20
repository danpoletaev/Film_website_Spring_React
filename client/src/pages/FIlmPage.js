import React, { Component, useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { Container, Row, Col, Button } from "react-bootstrap"
import Divider from '@material-ui/core/Divider'
import AboutFilm from "../components/AboutFilm";
import YouTube from 'react-youtube';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ReviewItem from "../components/Review";
import LeaveReviewItem from "../components/LeaveReviewItem";

import film_0 from '../img/0.png'
import film_1 from '../img/1.png'
import film_2 from '../img/2.jpg'
import film_3 from '../img/3.jpg'
import film_4 from '../img/4.jpg'
import film_5 from '../img/5.jpg'
import film_6 from '../img/6.jpg'
import film_7 from '../img/7.jpg'
import film_8 from '../img/8.jpg'
import film_9 from '../img/9.jpg'
import film_10 from '../img/10.jpg'


class FilmPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: [],
            reviews: [],
            id: null,
            user: null
        }
    }

    async componentDidMount() {
        const id = (window.location.pathname.split("/"))[2];
        const response = await fetch(`http://localhost:8080/film/${id}`);
        const json = await response.json();
        const responseReviews = await fetch(`http://localhost:8080/getReviews/${id}`);
        const jsonReviews = await responseReviews.json();

        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            this.setState({username: loggedInUser})
        }

        this.setState({
                film: json,
                reviews: jsonReviews,
                id: id
            }
        )
        console.log(this.state)
    }

    render () {
        const opts = {
            height: '585',
            width: '960',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        const classes = makeStyles ({
            headContainer: {
                background: '#f9f9f9',
                width: '100%',
                height: '100%',
            },

            trailerContainer: {
                background: '#ffffff',
                marginTop: '50px',
                marginBottom: '50px'
            },
            aboutContainer: {
                background: '#ffffff'
            },
            reviewsContainer: {
                background: '#f9f9f9',
            },
            revContainer: {
                background: '#dcf0e1',
            }
        })

        const renderImage = () => {
            console.log(this.state.id)
            switch (this.state.id) {
                case '0':
                    return (<img src={film_0} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                case '1':
                    return (<img src={film_1} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                case '2':
                    return (<img src={film_2} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                case '3':
                    return (<img src={film_3} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                    break;
                case '4':
                    return (<img src={film_4} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                    break;
                case '5':
                    return (<img src={film_5} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                    break;
                case '6':
                    return (<img src={film_6} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                    break;
                case '7':
                    return (<img src={film_7} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                    break;
                case '8':
                    return (<img src={film_8} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                    break;
                case '9':
                    return (<img src={film_9} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                    break;
                case '10':
                    return (<img src={film_10} style={{width: '100%', height: 'auto'}} alt="film #1"/> );
                    break;
                default:
                    return (
                        ''
                    );
            }
        }

        return (
            <>
                <div className={classes.headContainer}>
                    <Row>
                        <Col style={{marginRight: '30px', marginLeft: '30px', marginTop: '30px'}} md={4}>
                            {renderImage()}
                        </Col>
                        <Divider orientation="vertical" flexItem/>

                        <Col style={{marginLeft: '30px', marginTop: '30px'}} md={6}>
                            <h1 style={{marginBottom: '50px'}}>{this.state.film.name}</h1>
                            <h4 style={{marginBottom: '15px', fontSize: '20px'}}>About film</h4>

                            <AboutFilm
                                year={this.state.film.dvd_release}
                                country={this.state.film.country}
                                genre={this.state.film.genre}
                                motto={this.state.film.motto}
                                producer={this.state.film.producer}
                                screenwriter={this.state.film.screenwriter}
                                operator={this.state.film.operator}
                                composer={this.state.film.composer}
                                budget={this.state.film.budget}
                                box_office={this.state.film.box_office}
                                release={this.state.film.dvd_release}
                                duration={this.state.film.duration}
                            />
                        </Col>
                    </Row>
                    <Divider/>
                </div>
                <Container className={classes.trailerContainer}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <YouTube videoId={this.state.film.youtube_video_id} opts={opts}/>
                    </div>
                </Container>
                <Divider/>
                <Container className={classes.aboutContainer}>
                    <Row>
                        <Col md={12}>
                            <p style={{marginTop: '50px'}}>{this.state.film.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Box component="fieldset" mb={8} borderColor="transparent">
                                <Typography component="legend">Average rating of the film:</Typography>
                                {this.state.film.rating ? <Rating name="customized-10" defaultValue={this.state.film.rating} max={10} disabled={true}/> : ''}
                            </Box>
                        </Col>
                        <Col md={5}>
                            <p style={{fontSize: '45px', color: '#149839'}}>{this.state.film.rating}</p>
                        </Col>
                    </Row>
                </Container>
                <Divider/>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{marginTop: '50px', marginBottom: '40px'}}> Viewers' recense: </h1>
                        </Col>
                    </Row>


                    {this.state.reviews ? this.state.reviews.map(item => {
                        return (
                        <ReviewItem
                            positive={item.positive}
                            username={item.username}
                            review={item.review}
                            rating={item.rating}/>
                        )
                    }) : ''}

                    <h1 style={{marginTop: '50px', marginBottom: '40px'}}> Write a review: </h1>
                    <LeaveReviewItem
                    />

                </Container>

            </>
        )
    }
}


export default FilmPage;