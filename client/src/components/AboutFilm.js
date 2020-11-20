import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Divider from "@material-ui/core/Divider";

const AboutFilm = ({year, country, genre, motto, producer, screenwriter, operator, composer, budget, box_office, release, duration}) => {
    return (
        <>
            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Production year</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{year}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Country</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{country}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Genre</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{genre}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Motto</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{motto}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Producer</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{producer}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Scrennwriter</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{screenwriter}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>
            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Operator</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{operator}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Composer</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{composer}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>
            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Budget</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{budget}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Box office</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{box_office}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>
            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>DVD release</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{release}</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Duration</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>{duration}</p>
                </Col>
            </Row>
        </>
    )
}

export default AboutFilm