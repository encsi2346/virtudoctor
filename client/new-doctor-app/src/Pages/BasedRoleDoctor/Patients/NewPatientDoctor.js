import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Form} from "react-bootstrap";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import {isEmail} from "validator";
import AuthService from "../../../Services/AuthService";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};
const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const validExtraField = (value) => {
    if (value.length < 5 || value.length > 60) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};


const NewPatientDoctor = () => {

    const currentUser = AuthService.getCurrentUser();

    const profileForm = useRef();
    const profileCheckBtn = useRef();
    /*const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");*/
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [birthName, setBirthName] = useState("");
    const [fullName, setFullName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [birthPlace, setBirthPlace] = useState("");
    const [idCardNumber, setIdCardNumber] = useState("");
    const [tajNumber, setTajNumber] = useState("");
    const [permanentAddress, setPermanentAddress] = useState("");

    /* const onChangeUsername = (e) => {
         const username = e.target.value;
         setUsername(username);
     };
     const onChangeEmail = (e) => {
         const email = e.target.value;
         setEmail(email);
     };
     const onChangePassword = (e) => {
         const password = e.target.value;
         setPassword(password);
     };*/
    const onChangeFullName = (e) => {
        const fullName = e.target.value;
        setFullName(fullName);
    };
    const onChangeBirthName = (e) => {
        const birthName = e.target.value;
        setBirthName(birthName);
    };
    const onChangeBirthDate = (e) => {
        const birthDate = e.target.value;
        setBirthDate(birthDate);
    };
    const onChangeBirthPlace = (e) => {
        const birthPlace = e.target.value;
        setBirthPlace(birthPlace);
    };
    const onChangeIdCardNumber = (e) => {
        const idCardNumber = e.target.value;
        setIdCardNumber(idCardNumber);
    };
    const onChangeTajNumber = (e) => {
        const tajNumber = e.target.value;
        setTajNumber(tajNumber);
    };
    const onChangePermanentAddress = (e) => {
        const permanentAddress = e.target.value;
        setPermanentAddress(permanentAddress);
    };
    const handleSave = (e) => {
        e.preventDefault();
        /*setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }*/
    };

    return (
        <MainContainer>
            <div className="mb-3" style={{ color: "white"}}>
                <HeaderText className='GradientText'>Új páciens felvétele</HeaderText>

                <div>
                    <div className="col-md-12"  style={{padding: "100px"}}>
                        <div >


                            <Form onSubmit={handleSave} ref={profileForm}>
                                {!successful && (
                                    <Form.Group style={{color: "white"}}>
                                        {/*<div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={username}
                                            onChange={onChangeUsername}
                                            validations={[required, vusername]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={onChangeEmail}
                                            validations={[required, validEmail]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={password}
                                            onChange={onChangePassword}
                                            validations={[required, vpassword]}
                                        />
                                    </div>*/}

                                        <Form.Group className="mb-3" controlId="fromFullName">
                                            <Form.Label>Teljes név</Form.Label>
                                            <InputContainer>
                                                <Input /*type={text}*/ name="fullName"
                                                                       placeholder="Teljes név"
                                                                       value={fullName}
                                                                       onChange={onChangeFullName}
                                                                       validations={[validExtraField]}/>
                                            </InputContainer>

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="fromBirthName">
                                            <Form.Label>Leánykori név</Form.Label>
                                            <Input name="birthName"
                                                   placeholder="Leánykori név"
                                                   value={birthName}
                                                   onChange={onChangeBirthName}
                                                   validations={[validExtraField]}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBirthDate">
                                            <Form.Label> Születési dátum</Form.Label>
                                            <Input name="birthDate"
                                                   placeholder="Születési dátum"
                                                   value={birthDate}
                                                   onChange={onChangeBirthDate}
                                                   validations={[validExtraField]}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBirthPlace">
                                            <Form.Label> Születési hely</Form.Label>
                                            <Input name="birthPlace"
                                                   placeholder="Születési hely"
                                                   value={birthPlace}
                                                   onChange={onChangeBirthPlace}
                                                   validations={[validExtraField]}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formIdCardNumber">
                                            <Form.Label> Személyigazolvány szám</Form.Label>
                                            <Input name="formIdCardNumber"
                                                   placeholder="Személyigazolvány szám"
                                                   value={idCardNumber}
                                                   onChange={onChangeIdCardNumber}
                                                   validations={[validExtraField]}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formTajNumber">
                                            <Form.Label> TAJ szám</Form.Label>
                                            <Input name="formTajNumber"
                                                   placeholder="TAJ szám"
                                                   value={tajNumber}
                                                   onChange={onChangeTajNumber}
                                                   validations={[validExtraField]}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formPermanentAddress">
                                            <Form.Label> Állandó lakcím</Form.Label>
                                            <Input name="permanentAddress"
                                                   placeholder="Állandó lakcím"
                                                   value={permanentAddress}
                                                   onChange={onChangePermanentAddress}
                                                   validations={[validExtraField]}/>
                                        </Form.Group>
                                        <ButtonContainer>
                                            <Button content="Páciens felvétele"/>
                                        </ButtonContainer>

                                    </Form.Group>
                                )}
                                {/*{message && (
                                <div className="form-group">
                                    <div
                                        className={ successful ? "alert alert-success" : "alert alert-danger" }
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                </div>
                            )}
                            <CheckButton style={{ display: "none" }} ref={checkBtn} />*/}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        </MainContainer>
    );
};


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


export default NewPatientDoctor;