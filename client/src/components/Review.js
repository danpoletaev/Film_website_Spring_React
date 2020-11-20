import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { Container, Row, Col, Button } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Divider from '@material-ui/core/Divider'

import film1 from '../img/film1.jpg'
import Rating from "@material-ui/lab/Rating";

const ReviewItem = ({positive, username, review, rating}) => {
    const classes = useStyles()

    let color = '#dcf0e1';
    if (!positive) {
        color = '#ffe8de'
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
                <Col>
                    <p style={{marginTop: '20px'}}>{review}</p>
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
