import React, {Component} from "react"
import {Container, Row, Col} from "react-bootstrap"
import Divider from '@material-ui/core/Divider';


import FilmListItem from "../components/FilmListItem";
import ReviewItem from "../components/Review";


class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8080/allFilms");
        const json = await response.json();
        this.setState({
                films: json
            }
        )
        console.log(this.state.films)
    }

    render() {


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
                            <p style={{marginBottom: '25px'}}>The rating is based on the results of voting by site
                                visitors. Any
                                anyone who wishes can take part in it by voting for their beloved
                                movie.
                            </p>
                        </Col>
                    </Row>
                    <Container fluid>
                        {this.state.films ? this.state.films.map(item => {
                            return (
                                <div style={{marginBottom: '25px'}}>
                                    <FilmListItem
                                        index={item.id}
                                        name={item.name}
                                        country={item.country}
                                        genre={item.genre}
                                        rating={item.rating}
                                    />
                                </div>
                            )
                        }) : ''}
                    </Container>
                </Container>
            </>
        )
    }
}

export default MainPage;