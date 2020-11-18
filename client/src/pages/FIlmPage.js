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

import film1 from '../img/film1.jpg'

const FilmPage = () => {
    const [starRating, setStarRating] = useState(8.99);

    const opts = {
        height: '585',
        width: '960',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const classes = useStyles();

    return (
        <>
        <div className={classes.headContainer}>
            <Row>
                <Col style={{marginRight: '30px', marginLeft: '30px', marginTop: '30px'}} md={4}>
                    <img src={film1} style={{width: '100%', height: 'auto'}}  alt="film #1"/>
                </Col>
                <Divider orientation="vertical" flexItem />

                <Col style={{marginLeft: '30px', marginTop: '30px'}} md={6}>
                    <h1 style={{marginBottom: '50px'}}>The Green Mile</h1>
                    <h4 style={{marginBottom: '15px', fontSize: '20px'}}>About film</h4>

                    <AboutFilm/>
                </Col>
            </Row>
            <Divider/>
        </div>
        <Container className={classes.trailerContainer}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <YouTube videoId="Ki4haFrqSrw" opts={opts}/>
            </div>
        </Container>
            <Divider/>
            <Container className={classes.aboutContainer}>
                <Row>
                    <Col md={12}>
                        <p style={{marginTop: '50px'}}>Пол Эджкомб - начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} >
                        <Box component="fieldset" mb={8} borderColor="transparent">
                            <Typography component="legend">Average rating of the film:</Typography>
                            <Rating name="customized-10" defaultValue={starRating} max={10} disabled={true} />
                        </Box>
                    </Col>
                    <Col md={5}>
                        <p style={{fontSize: '45px', color: '#149839'}}>{starRating}</p>
                    </Col>
                </Row>
            </Container>
            <Divider/>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{marginTop: '50px', marginBottom: '40px'}}> Рецензии зрителей: </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button style ={{marginBottom: '40px'}} variant="outline-secondary">Write a review</Button>
                    </Col>
                </Row>
                <ReviewItem positive={true}/>
                <ReviewItem positive={false}/>
                <ReviewItem positive={true}/>

                <h1 style={{marginTop: '50px', marginBottom: '40px'}}> Write a review: </h1>
                <LeaveReviewItem />

            </Container>

            </>
    )
}

const useStyles = makeStyles ({
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

export default FilmPage;