import React from 'react';
import {Card, Col, Container, Pagination, Row} from "react-bootstrap";
import AdCard from "../../../Components/PostCard/PostCard";
import styled from "styled-components";

function Advertisements() {
    return (
        <MainContainer>
            <AdvertisementsStyled>
                <div className="content">
                    <HeaderText className='GradientText'>Közlemények
                    </HeaderText>
                    <Container fluid className="advertisements-section">
                        <Container>
                            <Row xs={1} md={4} className="g-4">
                                {Array.from({ length: 16 }).map((_, idx) => (
                                    <Col>
                                        <AdCard />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                        <Container className="pagination">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Container>
                    </Container>
                </div>
            </AdvertisementsStyled>
        </MainContainer>


    );
};

const AdvertisementsStyled = styled.div`
  padding: 60px;

  .advertisements-section {
    padding: 60px;
  }

  .pagination {
    padding: 30px;
    justify-content: center;
  }
`;


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

  .GradientText {
    background: linear-gradient(120deg, #0095ff, #ffffff);
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
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


export default Advertisements;