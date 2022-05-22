import React, { useState } from "react";
import DoctorDataService from "../../../Services/DoctorService";
import styled from "styled-components";
import Button from "../../../Components/Button";

const AddDoctorPatient = () => {
    const initialDoctorState = {
        id: null,
        firstName: "",
        lastName: "",
        profession: "",
        myDoctor: false
    };

    const [doctor, setDoctor] = useState(initialDoctorState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setDoctor({ ...doctor, [name]: value });
    };

    const saveDoctor = () => {
        var data = {
            firstName: doctor.firstName,
            lastName: doctor.lastName,
            profession: doctor.profession
        };
        DoctorDataService.create(data)
            .then(response => {
                setDoctor({
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    profession: response.data.profession,
                    myDoctor: response.data.myDoctor
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newDoctor = () => {
        setDoctor(initialDoctorState);
        setSubmitted(false);
    };
    return (
        <MainContainer>
            <HeaderText className='GradientText' style={{ fontSize: "2.6em", fontWeight: "bolder"}}>Új orvos felkérése</HeaderText>
            <div className="submit-form" >
                {submitted ? (
                    <div className="mb-3">
                        <h4>You submitted successfully!</h4>
                    </div>
                ) : (
                    <div className="mb-3" style={{ color: "white"}}>
                        <div className="form-group">
                            <label htmlFor="lastName">Vezetéknév</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                required
                                value={doctor.lastName}
                                onChange={handleInputChange}
                                name="lastName"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Keresztnév</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                required
                                value={doctor.firstname}
                                onChange={handleInputChange}
                                name="firstname"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profession">Foglalkozás</label>
                            <input
                                type="text"
                                className="form-control"
                                id="profession"
                                required
                                value={doctor.profession}
                                onChange={handleInputChange}
                                name="profession"
                            />
                        </div>
                        <ButtonContainer>
                            <Button content="Felkérés elküldése" onClick={saveDoctor}></Button>
                        </ButtonContainer>
                    </div>
                )}
            </div>
        </MainContainer>

    );
};
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 60vh;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  margin: 550px;
  margin-top: 150px;
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



export default AddDoctorPatient;