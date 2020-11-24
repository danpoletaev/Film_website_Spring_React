import React, {useEffect, useState} from 'react'
import { makeStyles } from "@material-ui/styles"
import { Container, Row, Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button';

import film1 from '../img/film1.jpg'
import Rating from "@material-ui/lab/Rating";

const ReviewItem = ({positive, username, review, rating, review_id}) => {
    const classes = useStyles()
    const [user, setUser] = useState('');

    let color = '#dcf0e1';
    if (!positive) {
        color = '#ffe8de'
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const handleReviewDelete = () => {
        console.log(review_id)
        fetch(`http://localhost:8080/deleteReview/${review_id}`, {
            method: 'DELETE',
        })
            .then(res => window.location.reload())
    }

    return (
        <Container className={classes.revContainer} style={{background: color,}}>
            <Row>
                <Col md={1}>
                    <Image src={film1} roundedCircle width='60px' height='60px'/>
                </Col>
                <Col>
                    <h4>{username}</h4>
                    <Rating name="customized-10" defaultValue={rating} max={10} disabled={true}/>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col md={9}>
                    <p style={{marginTop: '20px'}}>{review}</p>
                </Col>
                <Col>
                    {username == user ?
                        <Button onClick={handleReviewDelete} style={{marginTop: '10px'}} variant="outlined" color="secondary">
                            Delete my review
                        </Button> : ''}
                    {/*<Button style={{marginTop: '10px'}} variant="outlined" color="secondary">*/}
                    {/*    Delete my review*/}
                    {/*</Button>*/}
                </Col>
            </Row>
        </Container>
    )
}

const useStyles = makeStyles ({
    revContainer: {
        background: '#dcf0e1',
        borderRadius: '10px',
        paddingTop: '30px',
        paddingBottom: '30px',
        width: '75%',
        marginBottom: '50px'
    }
})

export default ReviewItem
