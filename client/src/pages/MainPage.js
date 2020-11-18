import React, {Component} from "react"
import {Container, Row, Col} from "react-bootstrap"
import Divider from '@material-ui/core/Divider';


import FilmListItem from "../components/FilmListItem";


const MainPage = () => {
    return (
        <>
            <Container className='head-container'>
                <Row>
                    <Col>
                        <h1 style={{marginTop: '50px', marginBottom: '20px'}}>100 best films</h1>
                    </Col>
                </Row>
                <Divider className='divider'/>
                <Row>
                    <Col>
                        <p style={{marginBottom: '25px'}}>The rating is based on the results of voting by site visitors. Any
                            anyone who wishes can take part in it by voting for their beloved
                            movie.
                        </p>
                    </Col>
                </Row>
                <Container fluid>
                    <div style={{marginBottom: '25px'}}>
                        <FilmListItem index={1}/>
                    </div>
                    <FilmListItem index={2}/>
                </Container>
            </Container>
        </>
    )
}

export default MainPage;