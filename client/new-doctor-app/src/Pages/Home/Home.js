import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctor from "../../Assets/doc2.png";
import HomePlus from "./HomePlus";
import UserService from "../../Services/UserService";

const Home = () => {

    const [content, setContent] = useState("");
    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
        );
    }, []);

    return (

        <section>
            <Container fluid className="home-section" id="home">

                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ fontSize: "0.1em", paddingBottom: "15px" }} className="heading">
                                Ne várjon holnapig! <span className="wave" role="img" aria-labelledby="wave"></span>
                            </h1>
                            <h1 style={{ fontSize: "0.1em", paddingBottom: "15px" }} className="heading">
                                Lépjen kapcsolatba orvosával már MA! <span className="wave" role="img" aria-labelledby="wave"></span>
                            </h1>
                            <h1 className="heading-name">
                                <strong className="main-name" style={{ fontWeight: "bolder", letterSpacing: "5px", fontSize: "80px"}}> virtudoctor</strong>
                            </h1>

                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img src={doctor} alt="home pic" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <HomePlus />
        </section>
    );
}


export default Home;
