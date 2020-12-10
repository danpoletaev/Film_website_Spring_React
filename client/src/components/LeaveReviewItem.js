import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/styles"
import {Container, Row, Col, Button, Form,} from "react-bootstrap"
import Image from "react-bootstrap/Image";
import film1 from "../img/film1.jpg";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

async function handleSendReview(description, rating, userId, setExists) {
    let positive = false;
    if (rating >= 5)
        positive = true;

    const id = (window.location.pathname.split("/"))[2];
    const response = await fetch("http://localhost:8080/addReview", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            positive: positive,
            review: description,
            rating: rating,
            film_id: id
        })
    }).catch((error) => {
        console.error(error);
    });
    const json = await response.json();
    console.log(json);
    if (json != false)
        window.location.reload();
    else
        setExists(true)
}

const LeaveReviewItem = ({filmId}) => {
    const classes = useStyles()
    const [rating, setRating] = useState(5);
    const [description, setDescription] = useState("");
    const [user, setUser] = useState();
    const [userId, setUserId] = useState();
    const [exists, setExists] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        const user_id = localStorage.getItem("user_id")
        if (loggedInUser) {
            setUser(loggedInUser);
            setUserId(user_id)
        }
    }, []);

    return (
        <Container className={classes.reviewContainer} fluid>
            <Row>
                <Col md={1}>
                    <Image src={film1} roundedCircle width='60px' height='60px'/>
                </Col>
                <Col>
                    {user ? (
                        <>
                            <h4>{user}</h4>
                            <p style={{color: '#7e7474', marginBottom: '20px'}}>Recenses: 5</p>
                        </>
                    ) : <h4>You need to login first!</h4>}
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col>
                    <Box style={{marginTop: '20px'}} component="fieldset" mb={8} borderColor="transparent">
                        <Typography component="legend">Rate the film from 1 to 10</Typography>
                        <Rating name="customized-10 simply-controlled" defaultValue={rating} max={10}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}/>
                    </Box>
                </Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Col md={12}>
                            <Form.Control onChange={event => setDescription(event.target.value)} style={{
                                width: '700px',
                                marginLeft: '50px',
                                background: '#f2f2f2',
                                marginBottom: '20px'
                            }} as='textarea' rows='10' placeholder="Enter your review..."/>
                        </Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Col md={12}>
                    <Button style={{marginBottom: '20px', marginLeft: '40%'}} variant="primary"
                            onClick={() => handleSendReview(description, rating, userId, setExists)}>Submit a review</Button>
                </Col>
            </Row>
            {exists ? (
                <Row>
                    <Col>
                        <p style={{fontSize: '18px', color: 'red', textAlign: 'center'}}>You cannot upload new review,
                            because you already have one ;( Edit or delete previous review!</p>
                    </Col>
                </Row>
                ) : ''}

        </Container>
    )
}

const useStyles = makeStyles({
    reviewContainer: {
        background: '#ffffff',
        borderRadius: '10px',
        paddingTop: '30px',
        paddingBottom: '30px',
        width: '75%',
        marginBottom: '50px',
        border: '2px solid #7e7474'
    }
})


export default LeaveReviewItem