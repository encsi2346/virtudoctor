import React, {useEffect, useState} from 'react';
import {Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import styled from "styled-components";

const Menu = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [doctorState, setDoctorState] = useState(undefined);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    const logOut = () => {
        AuthService.logout();
    };

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            setDoctorState((user.roles.includes("ROLE_ADMIN")?true:false)); //TODO: átírni a szerepeket orvos és páciensre
            //setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            //setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" expanded={expand} fixed="top" className={navColour ? "sticky" : "navbar" } >
                {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">*/}
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { updateExpanded(expand ? false : "expanded"); }} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>
                    <Navbar.Brand as={Link} to="/home" onClick={() => updateExpanded(false)} className='GradientText' style={{ fontWeight: "bolder", letterSpacing: "5px"}} >virtudoctor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey="#home" display="flex">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/home" onClick={() => updateExpanded(false)}>Kezdőlap</Nav.Link>
                            </Nav.Item>
                            {doctorState ? (
                                <div style={{display: 'flex'}}>
                                    {/*<Nav.Item>
                                        <Nav.Link as={Link} to="/appointment-doctor" onClick={() => updateExpanded(false)}>Időpont</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/diary-doctor" onClick={() => updateExpanded(false)}>Betegnapló</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/medicament-doctor" onClick={() => updateExpanded(false)}>Gyógyszer</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/doctors-doctor" onClick={() => updateExpanded(false)}>Orvosok</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/news-doctor" onClick={() => updateExpanded(false)}>Közlemények</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/new-post" onClick={() => updateExpanded(false)}>Új bejegyzés</Nav.Link>
                                    </Nav.Item>*/}
                                    <NavDropdown title="Időpont" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/appointment-doctor">Időpontfoglalás</NavDropdown.Item>
                                        <NavDropdown.Item href="/appointments-doctor">Foglalások megtekintése</NavDropdown.Item>
                                        <NavDropdown.Item href="/appointments-patient-doctor">Páciensek foglalásai</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Betegnapló" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/diary-posts-doctor">Betegnaplók megtekintése</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Gyógyszer" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/medicament-doctor">Új recept felírása</NavDropdown.Item>
                                        <NavDropdown.Item href="/requests-doctor">Igénylések megtekintése</NavDropdown.Item>
                                        <NavDropdown.Item href="/medicament-prescriptions-doctor">Felírt receptek</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Orvos" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/doctors">Orvosok</NavDropdown.Item>
                                        <NavDropdown.Item href="/doctors-patient/:id">Orvos megtekintése</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Páciens" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/patients">Páciensek</NavDropdown.Item>
                                        <NavDropdown.Item href="/new-patients">Új páciens felvétele</NavDropdown.Item>
                                        <NavDropdown.Item href="/requests-from-patients">Felkérések</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Közlemények" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/new-post">Új közlemény felvétele</NavDropdown.Item>
                                        <NavDropdown.Item href="/news-doctor">Közlemények megtekintése</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                                ) : (
                                <div style={{display: 'flex'}}>
                                    {/*<Nav.Item>
                                        <Nav.Link as={Link} to="/appointment-patient" onClick={() => updateExpanded(false)}>Időpont</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/diary-patient" onClick={() => updateExpanded(false)}>Betegnapló</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/medicament-patient" onClick={() => updateExpanded(false)}>Gyógyszer</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/doctors" onClick={() => updateExpanded(false)}>Orvosok</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/add" onClick={() => updateExpanded(false)}>Orvos felvétele</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/doctors-patient/:id" onClick={() => updateExpanded(false)}>Orvos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/problem" onClick={() => updateExpanded(false)}>Probléma</Nav.Link>
                                    </Nav.Item>
                                    */}
                                    <NavDropdown title="Időpont" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/appointment-patient">Időpontfoglalás</NavDropdown.Item>
                                        <NavDropdown.Item href="/appointments-patient">Foglalások megtekintése</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Betegnapló" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/diary-patient">Új bejegyzés</NavDropdown.Item>
                                        <NavDropdown.Item href="/diary-posts-patient">Bejegyzések megtekintése</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Gyógyszer" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/medicament-patient">Új gyógyszerigénylés</NavDropdown.Item>
                                        <NavDropdown.Item href="/requests-patient">Igénylések megtekintése</NavDropdown.Item>
                                        <NavDropdown.Item href="/medicament-prescriptions-patient">Felírt receptek</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Orvos" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/doctors">Orvosok</NavDropdown.Item>
                                        <NavDropdown.Item href="/add">Új orvos felkérése</NavDropdown.Item>
                                        <NavDropdown.Item href="/doctors-patient/:id">Orvos megtekintése</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/news-patient" onClick={() => updateExpanded(false)}>Közlemények</Nav.Link>
                                    </Nav.Item>
                                </div>
                                )
                            }
                            {currentUser ? (
                                <div  style={{display: 'flex'}}>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/profile" onClick={() => updateExpanded(false)}>
                                            {currentUser.username}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/login" onClick={logOut}>
                                            Kijelenetkezés
                                        </Nav.Link>
                                    </Nav.Item>
                                </div>
                                ) : (
                                    <div style={{display: 'flex'}}>
                                        <Nav.Item>
                                            <Nav.Link as={Link} to="/login" onClick={() => updateExpanded(false)}>
                                                Bejelentkezés
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={Link} to="/registration" onClick={() => updateExpanded(false)}>
                                                Regisztráció
                                            </Nav.Link>
                                        </Nav.Item>
                                    </div>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};



const navdiv = styled.div`
  .GradientText {
    background: linear-gradient(120deg, #00d0ff, #ffffff);
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;

export default Menu;