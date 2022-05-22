import React, {useEffect, useState} from "react";
import {Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
//import Particle from "../Particle";
import doctor from "../../../../Assets/doctor.png";
import styled from "styled-components";
import {Paper} from "@material-ui/core";
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Input";

function NewPost() {
    const[targy,setTargy]=useState('')
    const[email,setEmail]=useState('')
    const[telefonszam,setTelefonszam]=useState('')
    const[varos,setVaros]=useState('')
    const[iranyitoszam,setIranyitoszam]=useState('')
    const[megye,setMegye]=useState('')
    const[ar,setAr]=useState('')
    const[leiras,setLeiras]=useState('')
    const[tipus,setTipus]=useState('')
    const[ads, setAds]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const ad={targy, email, telefonszam, varos, iranyitoszam, megye, ar, leiras, tipus}
        console.log(ad)
        fetch("http://localhost:8080/ad/add",{
            mode: 'no-cors',
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(ad)

        }).then(()=>{
            console.log("New post added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/ad/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setAds(result);
            })
    },[])

    return (
        <NewAdStyled>
            <MainContainer>
                <section>
                    <div className="content" style={{padding: "100px"}}>
                        <div className="left">
                            <HeaderText className='GradientText'>Új közlemény
                            </HeaderText>
                            <Container style={{ color: "white", textAlign: "justify" }}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Tárgy</Form.Label>
                                        <Input placeholder="Közlemény címe" value={targy} onChange={(e)=>setTargy(e.target.value)}/>
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Kinek</Form.Label>
                                            <Form.Select defaultValue="Kinek szól" value={megye} onChange={(e)=>setMegye(e.target.value)}>
                                                <option>Kinek szól?</option>
                                                <option>Mindenki</option>
                                                <option>Felnőttek</option>
                                                <option>Gyerekek</option>
                                                <option>Nők</option>
                                                <option>Férfiak</option>
                                            </Form.Select>
                                        </Form.Group>

                                    </Row>

                                    <InputGroup>
                                        <InputGroup.Text>Közlemény</InputGroup.Text>
                                        <FormControl as="textarea" aria-label="With textarea" value={leiras} onChange={(e)=>setLeiras(e.target.value)}/>
                                    </InputGroup>

                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label>Képek feltöltése</Form.Label>
                                        <Form.Control type="file" multiple />
                                    </Form.Group>

                                    <ButtonContainer>
                                        <Button content='Közzététel'>
                                        </Button>
                                    </ButtonContainer>

                                </Form>
                                {/*
                                <Paper elevation={3} >

                                    {ads.map(ad=>(
                                        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={ad.id}>
                                            Id:{ad.id}<br/>
                                            Targy:{ad.targy}<br/>
                                            Ar:{ad.ar}

                                        </Paper> ))}
                                </Paper>*/}
                            </Container>
                        </div>
                        {/*<div className="right">
                            <img src={doctor} alt="" />
                        </div>*/}
                    </div>
                </section>
            </MainContainer>
        </NewAdStyled>

    );
}

const NewAdStyled = styled.div`
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;

    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;

      h1 {
        padding: 1.8rem 0;
      }
    }

    .right {
      img {
        position: absolute;
        top: 15%;
        right: 0;
        width: 50%;
      }
    }
    
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


export default NewPost;