import React, {useEffect, useState} from "react";
import {Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
//import Particle from "../Particle";
import doctorPic from "../../../Assets/doctor.png";
import styled from "styled-components";
import {Paper} from "@material-ui/core";
import DatePicker from "../../../Components/DatePicker/DatePicker";
import UploadFiles from "../../../Components/UploadFiles";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import Time from './Times'

function AppointmentPatient() {
    const[targy,setTargy]=useState('')
    const[doctor,setDoctor]=useState('')
    const[type,setType]=useState('')
    const[comment,setComment]=useState('')
    const[appointments, setAppointments]=useState([])

    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false)

    const handleClick=(e)=>{
        e.preventDefault()
        const appointments={targy, doctor, type, comment}
        console.log(appointments)
        fetch("http://localhost:8080/api/appointments/add",{
            mode: 'no-cors',
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(appointments)

        }).then(()=>{
            console.log("New appointment added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/api/appointments/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setAppointments(result);
            })
    },[])

    return (
        <NewAdStyled>
            <MainContainer>
                <section style={{padding: "100px", display: "inline-flex"}}>
                    <div className="content"  style={{padding: "100px", display: "grid"}}>
                        <div className="left">
                            <HeaderText className='GradientText' style={{ fontSize: "2.6em", fontWeight: "bolder", marginTop: "-160px"}}>Új időpontfoglalás</HeaderText>
                            <Container style={{ color: "white", textAlign: "justify" }}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Tárgy</Form.Label>
                                        <Input placeholder="Tárgy" value={targy} onChange={(e)=>setTargy(e.target.value)}/>
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Orvos</Form.Label>
                                            <Form.Select defaultValue="Orvos kiválasztása" value={doctor} onChange={(e)=>setDoctor(e.target.value)}>
                                                <option>Orvos kiválasztása</option>
                                                <option>Dr. Példa Éva</option>
                                                <option>Prof. Dr. Minta Mikós</option>
                                                <option>Dr. Kovács Ernő</option>
                                                <option>Dr. Lakatos Zoltán</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Típus</Form.Label>
                                            <Form.Select defaultValue="Konzultáció típusa" value={type} onChange={(e)=>setType(e.target.value)}>
                                                <option>Konzultáció típusa</option>
                                                <option>Személyes</option>
                                                <option>Videóhívás</option>
                                                <option>Telefonos</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>


                                    <Form.Group>
                                        <Form.Label>Megjegyzés</Form.Label>
                                        <Input /* as="textarea" aria-label="With textarea"*/ value={comment} onChange={(e)=>setComment(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label>Lelet feltöltése</Form.Label>
                                        <Form.Control type="file" multiple />
                                    </Form.Group>
                                    {/*<div className="container" style={{ width: "600px" }}>
                                        <div className="my-3">
                                            <h4>React Hooks File Upload</h4>
                                        </div>
                                        <UploadFiles />
                                    </div>*/}

                                    <ButtonContainer>
                                        <Button content="Foglalás mentése"/>
                                        <Button content="Mégsem"/>
                                        <Button content="Szerkesztés"/>
                                    </ButtonContainer>
                                </Form>

                                {/*}                           <Paper elevation={3} >

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
                            <div>
                                <img src={doctorPic} alt="" />
                            </div>

                        </div>*/}
                    </div>
                    <div style={{marginTop: "160px"}}>
                        <div>
                            <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
                        </div>

                        {date.length > 0 ? (
                            <p>
                                <span>Start:</span>
                                {date[0].toDateString()}
                                &nbsp;
                                &nbsp;
                                <span>End:</span>{date[1].toDateString()}
                            </p>
                        ) : (
                            <p>

                            </p>
                        )
                        }
                        <Time showTime={showTime} date={date}/>
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
  margin-top: 150px;
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


export default AppointmentPatient;