import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Divider from "@material-ui/core/Divider";

const AboutFilm = () => {
    return (
        <>
            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Production year</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>1999</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Country</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>USA</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Genre</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>drama</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Slogan</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>«Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них»</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Reziser</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>Frank Darbont</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Сценарий</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>Фрэнк Дарабонт, Стивен Кинг</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Producer</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>Фрэнк Дарабонт, Дэвид Валдес</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Operator</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>Дэвид Тэттерсолл</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Compositor</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>Томас Ньюман</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Compositor</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>Теренс Марш, Уильям Крус</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Compositor</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>Ричард Фрэнсис-Брюс</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Budget</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>$60 000 000</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Budget</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>$30 000 000</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Сборы в США</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>$136 801 374</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Сборы в мире</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>+ $150 000 000 = $286 801 374</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Релиз на DVD</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>13 февраля 2001, «West Video»</p>
                </Col>
            </Row>
            <Divider style={{marginTop: '0px'}}/>

            <Row>
                <Col md={4}>
                    <p style={{color: '#7e7474', fontSize: '16px'}}>Duration</p>
                </Col>
                <Col md={8}>
                    <p style={{fontSize: '16px'}}>189 мин. / 03:09</p>
                </Col>
            </Row>
        </>
    )
}

export default AboutFilm