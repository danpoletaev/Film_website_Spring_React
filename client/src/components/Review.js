import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { Container, Row, Col, Button } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Divider from '@material-ui/core/Divider'

import film1 from '../img/film1.jpg'

const ReviewItem = ({positive}) => {
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
                    <h4>danpoletaev</h4>
                    <p style={{color: '#7e7474', marginBottom: '10px'}}>Recensis: 5</p>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col>
                    <p style={{marginTop: '20px'}}>Они помогли ему убить себя и так происходит каждый день во всем мире'...

                        Фильм, который я могу смело назвать шедевром. Фильм, который длится три часа и которые пролетают незаметно. Фильм, который смотрится каждый раз как в первый. Фильм, который нельзя забыть и которым нельзя не проникнуться. Фильм, котрый заставляет задуматься о жизни, которую мы тратим на пустяки, теша себя иллюзией бессмертия, о смерти, которая не щадит никого.

                        Фильм о зле, которое не всегда наказуемо и о добре, которое подчас бессильно что-либо изменить. И тебе остается лишь смотреть на то, как вершится суд, над тем кто не должен сидеть на скамье подсудимых.

                        Фильм, который изменил мое мировоззрение и научил по-другому относиться к жизни.</p>
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
