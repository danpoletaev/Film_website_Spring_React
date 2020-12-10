import React, {useState, useEffect} from 'react'
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';

const CustomNav = () => {
    //localStorage.clear()
    const [openLogin, setOpenLogin] = useState(false);
    const onLoginOpenModal = () => setOpenLogin(true);
    const onCloseLoginModal = () => setOpenLogin(false);
    const [user, setUser] = useState();

    const [openReg, setOpenReg] = useState(false);
    const onRegOpenModal = () => setOpenReg(true);
    const onCloseRegModal = () => setOpenReg(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setAuthenticated(true);
            setUser(loggedInUser);
        }
    }, []);

    //form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [authenticated, setAuthenticated] = useState(false);
    const [registered, setRegistered] = useState(false);

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    async function handleLoginSubmit(event) {
        event.preventDefault()
        const response = await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).catch((error) => {
            console.error(error);
        });
        const json = await response.json();
        console.log(json)
        if (json.id == null)
            setAuthenticated(false);
        else {
            setAuthenticated(true);
            localStorage.setItem('user', json.username)
            localStorage.setItem('user_id', json.id)
            setOpenLogin(false);
        }
    }

    async function handleRegSubmit(event) {
        event.preventDefault()
        const response = await fetch("http://localhost:8080/registration", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: username,
            })
        }).catch((error) => {
            console.error(error);
        });
        const json = await response.json();
        console.log(json)
        setRegistered(json)
        setOpenReg(false);
        setOpenLogin(true);
    }


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">BestFilms</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    {authenticated ? (
                        <h4 style={{color: '#ffffff'}}>{user}</h4>
                    ) : (
                        <>
                            <Button onClick={onLoginOpenModal}
                                    style={{marginRight: '15px', width: '90px', height: 'auto'}}
                                    variant="outline-info">Login</Button>
                            <Button onClick={onRegOpenModal} style={{width: '90px', height: 'auto'}}
                                    variant="outline-info">Register</Button>
                        </>
                    )}
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
                {registered ? (
                    <>
                        <h3 style={{color: '#00FF00'}}>Your account successfully registered</h3>
                        <h4>Go to login</h4>
                    </>
                ) : <h2>Create your account!</h2>}
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
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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