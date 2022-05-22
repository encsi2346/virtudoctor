import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctor2 from "../../Assets/doc.png";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";


function HomePlus() {
    return (
        <MainContainer>
            <Container fluid className="home-about-section" id="about">
                <Container>
                    <Row>
                        <Col md={8} className="home-about-description">
                            <h1 style={{ fontSize: "2.6em", fontWeight: "bolder"}}>
                                ORVOS <span className="purple"> PÁCIENS </span> ÖSSZEKÖTÉS
                            </h1>
                            <p className="home-about-body">
                                Az oldal segítségével könnyedén kapcsolatba léphet orvosával, figyelemmel kísérheti vizsgálatainak eredményeit, rögzítheti fizikai és mentális állapotát.
                                <br />
                                <br />Az oldal használata nem kötelező orvosával való kapcsolattartásra, ám lényegesen megkönnyíti azt.
                                <br />
                                <br />
                                Az oldalon a következő lehetőségeket találja:
                                &nbsp;
                                <br />
                                <br />
                                <b className="purple">- Orvosai elérhetősége</b>
                                <br />
                                <b className="purple">- Orvosai által kiadott friss tudnivalók, hírek</b>
                                <br />
                                <b className="purple">- Gyógyszer igénylése</b>
                                <br />
                                <b className="purple">- Időpont igénylése</b>
                                <br />
                                <b className="purple">- Személyes betegnapló vezetése</b>
                                <br />
                                <b className="purple">- Személyes leletek nyomonkövetése</b>
                            </p>
                        </Col>
                        <Col md={4} className="myAvtar">
                            <Tilt>
                                <img src={doctor2} className="img-fluid" alt="avatar" />
                            </Tilt>
                        </Col>
                        <Col>
                            <p className="home-about-body" style={{ textAlign: "justify"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta lorem mollis aliquam ut porttitor leo a. Amet massa vitae tortor condimentum lacinia quis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Nisi est sit amet facilisis magna etiam tempor orci eu. Fermentum et sollicitudin ac orci. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Eu sem integer vitae justo eget magna. Facilisis magna etiam tempor orci eu lobortis. Sit amet commodo nulla facilisi. Gravida cum sociis natoque penatibus et magnis dis. Nunc sed id semper risus in hendrerit gravida. Pulvinar neque laoreet suspendisse interdum consectetur. Vitae tortor condimentum lacinia quis. Ornare quam viverra orci sagittis. Sodales neque sodales ut etiam sit amet nisl. Pulvinar pellentesque habitant morbi tristique senectus et netus. Ullamcorper malesuada proin libero nunc consequat interdum varius. Ligula ullamcorper malesuada proin libero nunc.
                            </p>

                            <p className="home-about-body" style={{ textAlign: "justify"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta lorem mollis aliquam ut porttitor leo a. Amet massa vitae tortor condimentum lacinia quis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Nisi est sit amet facilisis magna etiam tempor orci eu. Fermentum et sollicitudin ac orci. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Eu sem integer vitae justo eget magna. Facilisis magna etiam tempor orci eu lobortis. Sit amet commodo nulla facilisi. Gravida cum sociis natoque penatibus et magnis dis. Nunc sed id semper risus in hendrerit gravida. Pulvinar neque laoreet suspendisse interdum consectetur. Vitae tortor condimentum lacinia quis. Ornare quam viverra orci sagittis. Sodales neque sodales ut etiam sit amet nisl. Pulvinar pellentesque habitant morbi tristique senectus et netus. Ullamcorper malesuada proin libero nunc consequat interdum varius. Ligula ullamcorper malesuada proin libero nunc.
                            </p>
                            <p className="home-about-body" style={{ textAlign: "justify"}}>
                                Vitae congue eu consequat ac felis donec et odio. Nibh mauris cursus mattis molestie a iaculis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Vestibulum sed arcu non odio euismod lacinia. Feugiat in fermentum posuere urna nec tincidunt. Nulla pharetra diam sit amet nisl suscipit adipiscing. Vitae tempus quam pellentesque nec nam aliquam sem. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Amet consectetur adipiscing elit pellentesque habitant. Nunc congue nisi vitae suscipit tellus mauris a. Est pellentesque elit ullamcorper dignissim cras tincidunt. A diam sollicitudin tempor id. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Tellus orci ac auctor augue mauris augue. Eu lobortis elementum nibh tellus molestie nunc non blandit. Auctor elit sed vulputate mi sit amet. Dui nunc mattis enim ut tellus. Magna fringilla urna porttitor rhoncus dolor purus non enim. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Mi proin sed libero enim sed faucibus.
                            </p>
                        </Col>
                    </Row>

                </Container>
            </Container>
        </MainContainer>

    );
}



const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 250vh;
  width: 90vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  margin: 50px;
  margin-top: 100px;
  /*text-transform: uppercase;
  letter-spacing: 0.4rem;*/
`;

const HeaderText = styled.h2`
  margin: 3rem 0 2rem 0;

`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.h5`
  font-size: 20px;
`;


export default HomePlus;
