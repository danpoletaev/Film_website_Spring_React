import React from 'react'
import {makeStyles} from "@material-ui/styles"
import { Container, Row, Col, Button, Form,  } from "react-bootstrap"
import Image from "react-bootstrap/Image";
import film1 from "../img/film1.jpg";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const LeaveReviewItem = () => {
    const classes = useStyles()

    return (
        <Container className={classes.reviewContainer} fluid>
            <Row>
                <Col md={1}>
                    <Image src={film1} roundedCircle width='60px' height='60px'/>
                </Col>
                <Col>
                    <h4>danpoletaev</h4>
                    <p style={{color: '#7e7474', marginBottom: '20px'}}>Recensis: 5</p>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col>
                    <Box style={{marginTop: '20px'}} component="fieldset" mb={8} borderColor="transparent">
                        <Typography component="legend">Rate the film from 1 to 10</Typography>
                        <Rating name="customized-10" defaultValue={3} max={10}/>
                    </Box>
                </Col>
            </Row>
            <Row>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col md={12} className='align-items-center'>
                        <Form.Control style={{width: '700px', marginLeft: '50px', background: '#f2f2f2'}} type="text" placeholder="Header" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Col md={12}>
                        <Form.Control style={{width: '700px', marginLeft: '50px', background: '#f2f2f2', marginBottom: '20px'}} as='textarea' rows='10' placeholder="Enter your review..." />
                    </Col>
                </Form.Group>
            </Form>
            </Row>
            <Row>
                <Col md={12}>
                    <Button style ={{marginBottom: '20px', marginLeft: '40%'}} variant="primary">Submit a review</Button>
                </Col>
            </Row>
        </Container>
    )
}

const useStyles = makeStyles ({
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