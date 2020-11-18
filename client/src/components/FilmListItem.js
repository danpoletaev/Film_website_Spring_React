import React from 'react'
import {Container, Col, Row} from "react-bootstrap"
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

//images
import film1 from '../img/film1.jpg'

const FilmListItem = ({index}) => {

    return (
        <>
            <Link to={`/film/${index}`}>
                <Row>
                    <Col md={1}>
                        <img style={{width: '120%', height: 'auto'}} src={film1} alt="film #1"/>
                    </Col>
                    <Col style={{marginLeft: '40px'}} md={10}>
                        <Row>
                            <Col md={8}>
                                <Row>
                                    <Col>
                                        <h3>Зеленая миля</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>Green Mile, The, 1999</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{color: '#7e7474'}}>USA - fantastic, drama</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Button variant="outlined" color="primary">
                                    Like this
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider/>
            </Link>
        </>
    )
}

export default FilmListItem

