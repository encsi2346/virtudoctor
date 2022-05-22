import React, {useEffect, useState} from "react";
import {Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
//import Particle from "../Particle";
import doctor from "../../../Assets/doctor.png";
import styled from "styled-components";
import {Paper} from "@material-ui/core";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import Calendar from 'react-calendar';

function DiaryPatient() {
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[bloodPressure,setBloodPressure]=useState('')
    const[bodyTemperature,setBodyTemperature]=useState('')
    const[symptoms,setSymptoms]=useState([])
    const[medicaments,setMedicaments]=useState([])
    const[weight,setWeight]=useState('')
    const[mood,setMood]=useState('')
    const[posts, setPosts]=useState([])

    const [date, setDate] = useState(new Date());

    const handleClick=(e)=>{
        e.preventDefault()
        const posts={title, description, bloodPressure, bodyTemperature, weight, mood}
        console.log(posts)
        fetch("http://localhost:8080/api/posts/add",{
            mode: 'no-cors',
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(posts)

        }).then(()=>{
            console.log("New post added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/api/posts/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setPosts(result);
            })
    },[])

    return (
        <MainContainer>
        <NewAdStyled>

                <section style={{padding: "100px", display: "inline-flex"}}>
                    <div className="content"  style={{padding: "100px"}}>
                        <div className="left">
                            <HeaderText className='GradientText' style={{ fontSize: "2.6em", fontWeight: "bolder"}}>Új bejegyzés a naplóba</HeaderText>
                            <Container style={{ color: "white", textAlign: "justify", display: "center" }}>
                                <Form style={{ color: "white", textAlign: "justify", display: "center" }}>
                                    <Form.Group className="mb-3" controlId="formGridAddress2" style={{ color: "white", textAlign: "justify", display: "center" }}>
                                        <Form.Label>Bejegyzés címe</Form.Label>
                                        <Input placeholder="Bejegyzés címe" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2" style={{ color: "white", textAlign: "justify", display: "center" }}>
                                        <Form.Label>Leírás</Form.Label>
                                        <Input /*as="textarea" aria-label="With textarea"*/ placeholder="Leírás" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Vérnyomás</Form.Label>
                                        <Input placeholder="Vérnyomás" value={bloodPressure} onChange={(e)=>setBloodPressure(e.target.value)}/>
                                        <Form.Label>Valami</Form.Label>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Testhőmérséklet</Form.Label>
                                        <Input placeholder="Testhőmérséklet" value={bodyTemperature} onChange={(e)=>setBodyTemperature(e.target.value)}/>
                                        <Form.Label>°C</Form.Label>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Gyógyszerek</Form.Label>
                                        <Input placeholder="Gyógyszerek" value={medicaments} onChange={(e)=>setMedicaments(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Testsúly</Form.Label>
                                        <Input placeholder="Testsúly" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                                        <Form.Label>Kg</Form.Label>
                                    </Form.Group>

                                    <div style={{display: "flex"}}>
                                        <div style={{padding: "50px"}}>
                                            <h3>Tünetek</h3>

                                            <Form>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Fejfájás</label>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Láz</label>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Szédülés</label>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Hányinger</label>
                                                </div>
                                            </Form>
                                        </div>

                                        <div style={{padding: "50px"}}>
                                            <h3>Hangulat</h3>

                                            <Form>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Boldog</label>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Kiegyensúlyozott</label>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Fáradt</label>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Ingerült</label>
                                                </div>
                                            </Form>
                                        </div>

                                    </div>


                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label>Képek feltöltése</Form.Label>
                                        <Form.Control type="file" multiple />
                                    </Form.Group>

                                    <ButtonContainer>
                                        <Button content="Bejegyzés mentése"/>
                                        <Button content="Mégsem"/>
                                        <Button content="Szerkesztés"/>
                                    </ButtonContainer>

                                </Form>

                                {/*<Paper elevation={3} >

                                    {posts.map(p=>(
                                        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={p.id}>
                                            Id:{p.id}<br/>
                                            Targy:{p.title}<br/>

                                        </Paper> ))}
                                </Paper>*/}
                            </Container>
                        </div>
                        {/* <div className="right">
                            <img src={doctor} alt="" />
                        </div>*/}
                    </div>
                    <div style={{marginTop: "160px"}}>
                        <div>
                            <Calendar onChange={setDate} value={date} selectRange={true}/>
                        </div>
                        {date.length > 0 ? (
                            <p>
                                <span>Start:</span>{' '} {date[0].toDateString()}
                                &nbsp; to &nbsp;
                                <span>End:</span> {date[1].toDateString()}
                            </p>
                        ) : (
                            <p>
                                <span>Default selected date:</span>{' '} {date.toDateString()}
                            </p>
                        )}
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
  text-transform: uppercase;
  letter-spacing: 0.4rem;
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


export default DiaryPatient;