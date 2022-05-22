import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import Icon from "./Icon";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    const FacebookBackground =
        "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
        "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
        "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

    return (
        <Container fluid className="footer">

            <Row md="4" className="footer-copywright">
                    <ContactSectionStyled style={{marginLeft:60, marginTop:10}}>
                            <div className="contact-info">
                                <h3 className="contact-title">
                                    Vegye fel velünk a kapcsolatot
                                </h3>
                                <p>1111, Budapest, Irinyi József utca 1-17.</p>
                                <p>+36 (30) 123-4567</p>
                                <p>encsi2346@gmail.com</p>
                            </div>
                    </ContactSectionStyled>
                <Container style={{display:"flex"}}>
                    <ContactSectionStyled style={{marginLeft: -200, marginRight: 60}}>
                        <div className="contact-info">
                            <p>Profil</p>
                            <p>Időpontfoglalás</p>
                            <p>Foglalások</p>
                            <p>Új Bejegyzés</p>
                        </div>
                    </ContactSectionStyled>
                    <ContactSectionStyled style={{marginLeft:60, marginRight: 60}}>
                        <div className="contact-info">
                            <p>Bejegyzések</p>
                            <p>Gyógyszerigénylés</p>
                            <p>Igénylések</p>
                            <p>Felírt receptek</p>
                        </div>
                    </ContactSectionStyled>
                    <ContactSectionStyled style={{marginLeft:60, marginRight: 60}}>
                        <div className="contact-info">
                            <p>Orvosok</p>
                            <p>Új orvos</p>
                            <p>Orvosok </p>
                            <p>Közlemények</p>
                        </div>
                    </ContactSectionStyled>
                </Container>

            </Row>
            <Row md="4" className="footer-copywright" style={{justifyContent: "center"}}>
                <IconsContainer>
                    <Icon color={FacebookBackground}>
                        <FaFacebookF />
                    </Icon>
                    <Icon color={InstagramBackground}>
                        <FaInstagram />
                    </Icon>
                    <Icon color={TwitterBackground}>
                        <FaTwitter />
                    </Icon>
                </IconsContainer>
                <h3>Copyright ©</h3>
            </Row>
        </Container>
    );
}

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 1rem 0;
  width: 80%;
`;

const ContactSectionStyled = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  z-index: 1;

  p {
    opacity: 0.5;
  }

  .contact-title {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.5rem;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 4rem;
      height: 2px;
      background-color: #00d0ff;
    }
  }
`;
export default Footer;