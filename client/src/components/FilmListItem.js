import React from 'react'
import {Container, Col, Row} from "react-bootstrap"
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

//images
import Rating from "@material-ui/lab/Rating";
import film_0 from "../img/0.png";
import film_1 from "../img/1.png";
import film_2 from "../img/2.jpg";
import film_3 from "../img/3.jpg";
import film_4 from "../img/4.jpg";
import film_5 from "../img/5.jpg";
import film_6 from "../img/6.jpg";
import film_7 from "../img/7.jpg";
import film_8 from "../img/8.jpg";
import film_9 from "../img/9.jpg";
import film_10 from "../img/10.jpg";

const FilmListItem = ({index, name, country, genre, rating}) => {

    const renderImage = () => {
        switch (index) {
            case 0:
                console.log(index)
                return (<img src={film_0} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
            case 1:
                return (<img src={film_1} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
            case 2:
                return (<img src={film_2} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
            case 3:
                return (<img src={film_3} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
                break;
            case 4:
                return (<img src={film_4} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
                break;
            case 5:
                return (<img src={film_5} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
                break;
            case 6:
                return (<img src={film_6} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
                break;
            case 7:
                return (<img src={film_7} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
                break;
            case 8:
                return (<img src={film_8} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
                break;
            case 9:
                return (<img src={film_9} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
                break;
            case 10:
                return (<img src={film_10} style={{width: '170%', height: 'auto'}} alt="film #1"/> );
                break;
            default:
                return (
                    ''
                );
        }
    }

    return (
        <>
            <Link to={`/film/${index}`}>
                <Row>
                    <Col md={1}>
                        {renderImage()}
                    </Col>
                    <Col style={{marginLeft: '40px'}} md={10}>
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <Col>
                                        <h3>{name}</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Rating name="customized-10" defaultValue={rating} max={10} disabled={true}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{color: '#7e7474'}}>{country} - {genre}</p>
                                    </Col>
                                </Row>
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

