import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
//import Particle from "../Particle";
import pill from "../../../Assets/pill.png";
import styled from "styled-components";
import {Paper} from "@material-ui/core";

function MedicamentPatient() {
    const[name,setName]=useState('') //TODO: csak egy név kell, a másik helyett legyen kereső mező
    const[type,setType]=useState('')
    const[fullName,setFullName]=useState('')
    const[amount,setAmount]=useState('')
    const[price,setPrice]=useState('')
    const[reason,setReason]=useState('')
    const[requests, setRequests]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const requests={name, type, fullName, amount, price, reason}
        console.log(requests)
        fetch("http://localhost:8080/api/ad/add",{
            mode: 'no-cors',
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(requests)

        }).then(()=>{
            console.log("New request added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/api/ad/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setRequests(result);
            })
    },[])

    return (
        <MainContainer>
            <NewAdStyled>
                <section>
                    <div className="content" style={{padding: "100px"}}>
                        <div className="left">
                            <HeaderText className='GradientText' style={{ fontSize: "2.6em", fontWeight: "bolder"}}>Új gyógyszerigénylés
                            </HeaderText>
                            <Container style={{ color: "white", textAlign: "justify" }}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Név</Form.Label>
                                        <Form.Control placeholder="Gyógyszer keresése név alapján" value={name} onChange={(e)=>setName(e.target.value)}/>
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Típus</Form.Label>
                                            <Form.Select defaultValue="Gyógyszer típusa" value={type} onChange={(e)=>setType(e.target.value)}>
                                                <option>Gyógyszer típusa</option>
                                                <option>Fájdalomcsillapító</option>
                                                <option>Vérnyomáscsökkentő</option>
                                                <option>Fogamzásgátló</option>
                                                <option>Inzulin</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Név</Form.Label>
                                            <Form.Select defaultValue="Gyógyszer neve" value={fullName} onChange={(e)=>setFullName(e.target.value)}>
                                                <option>Gyógyszer neve</option>
                                                <option>ZTV gyógyszer</option>
                                                <option>WRT gyógyszer</option>
                                                <option>KLP gyógyszer</option>
                                                <option>CTV gyógyszer</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Mennyiség</Form.Label>
                                            <Form.Control placeholder="1 csomag" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                        </Form.Group>
                                    </Row>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>Ár</InputGroup.Text>
                                        <FormControl aria-label="Amount (to the nearest dollar)" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                                        <InputGroup.Text>Ft</InputGroup.Text>
                                    </InputGroup>

                                    <InputGroup>
                                        <InputGroup.Text>Igény indoklása</InputGroup.Text>
                                        <FormControl as="textarea" aria-label="With textarea" value={reason} onChange={(e)=>setReason(e.target.value)}/>
                                    </InputGroup>

                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label>Képek feltöltése</Form.Label>
                                        <Form.Control type="file" multiple />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onClick={handleClick}>
                                        Igény elküldése
                                    </Button>
                                </Form>

                                <Paper elevation={3} >

                                    {requests.map(r=>(
                                        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={r.id}>
                                            Id:{r.id}<br/>
                                            Name:{r.name}<br/>

                                        </Paper> ))}
                                </Paper>
                            </Container>
                        </div>
                        {/*<div className="right">
                            <img src={pill} alt="" />
                        </div>*/}
                    </div>
                </section>
            </NewAdStyled>
        </MainContainer>

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

    .GradientText {
      background: linear-gradient(120deg, #0095ff, #ffffff);
      background-clip: text;
      display: inline-block;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
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


export default MedicamentPatient;