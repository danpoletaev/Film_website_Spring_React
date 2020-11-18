import React, {useState} from 'react'
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const CustomNav = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const onLoginOpenModal = () => setOpenLogin(true);
    const onCloseLoginModal = () => setOpenLogin(false);

    const [openReg, setOpenReg] = useState(false);
    const onRegOpenModal = () => setOpenReg(true);
    const onCloseRegModal = () => setOpenReg(false);

    //form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleLoginSubmit = (event) => {
        console.log("handle evenet " + event)
    }

    const handleRegSubmit = (event) => {
        console.log("handle event " + event)
    }



    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">BestFilms</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <Button onClick={onLoginOpenModal} style={{marginRight: '15px', width: '90px', height: 'auto'}} variant="outline-info">Login</Button>
                <Button onClick={onRegOpenModal} style={{width: '90px', height: 'auto'}} variant="outline-info">Register</Button>
            </Form>
        </Navbar>

            <Modal open={openLogin} onClose={onCloseLoginModal} center>
                <h2>Login to your account!</h2>
                <p style={{color: '#7e7474'}}>to access all feautres and leave feedbacks to films</p>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm}>
                        Login
                    </Button>
                </Form>
            </Modal>

            <Modal open={openReg} onClose={onCloseRegModal} center>
                <h2>Create your account!</h2>
                <p style={{color: '#7e7474'}}>to access all feautres and leave feedbacks to films</p>
                <Form onSubmit={handleRegSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm}>
                        Register
                    </Button>
                </Form>
            </Modal>

            </>
    )
}

export default CustomNav