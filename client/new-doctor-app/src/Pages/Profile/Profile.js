import React, {useRef, useState} from 'react';
import { Form } from "react-bootstrap";
import profil from '../../Assets/profil.png';
import styled from "styled-components";
import AuthService from "../../Services/AuthService";
import Input from "../../Components/Input";
import {isEmail} from "validator";
import Button from "../../Components/Button";


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

/*
const vfullName = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const vbirthName = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const vbirthDate = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const vbirthPlace = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const vtajNumber = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const vidCardNumber = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const vpermanentAddress = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};*/

const Profile = () => {
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
            <div className="container" style={{padding: "100px"}}>
                <div>
                    <header className="jumbotron">
                        <img
                            src={profil}
                            alt="profile-img"
                            className="profile-img-card"
                        />
                        <HeaderText className='GradientText' style={{ fontSize: "2.6em", fontWeight: "bolder"}}>
                            {currentUser.username} Profil
                        </HeaderText>
                    </header>
                    {/*<div style={{textAlign: "left"}}>
                        <Text> Debug info:</Text>
                        <Text> Token: {currentUser.accessToken.substring(0, 20)} ...{" "}
                            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}</Text>
                        <Text> Id: {currentUser.id}</Text>
                        <Text> Email: {currentUser.email}</Text>
                        <Text> {currentUser.roles &&
                            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}</Text>
                        <br/>
                        <br/>
                        <br/>
                    </div>*/}



                    <div style={{textAlign: "left", marginTop: "80px"}}>
                        <Text style={{padding: "20px"}}> Teljes név: <span style={{color: "#00D0FF", fontWeight: "bold"}}>Kiss Kinga</span> {currentUser.fullName}</Text>
                        <Text style={{padding: "20px"}}> Születési név: <span style={{color: "#00D0FF", fontWeight: "bold"}}>Kiss Kinga</span> {currentUser.birthName}</Text>
                        <Text style={{padding: "20px"}}> Születési idő: <span style={{color: "#00D0FF", fontWeight: "bold"}}>1990.05.01.</span> {currentUser.birthDate}</Text>
                        <Text style={{padding: "20px"}}> Születési hely: <span style={{color: "#00D0FF", fontWeight: "bold"}}>Budapest</span> {currentUser.birthPlace}</Text>
                        <Text style={{padding: "20px"}}> Személyigazolvány szám: <span style={{color: "#00D0FF", fontWeight: "bold"}}>123456AA</span> {currentUser.idCardNumber}</Text>
                        <Text style={{padding: "20px"}}> TAJ szám: <span style={{color: "#00D0FF", fontWeight: "bold"}}>111-222-333</span> {currentUser.tajNumber}</Text>
                        <Text style={{padding: "20px"}}> Állandó lakcím: <span style={{color: "#00D0FF", fontWeight: "bold"}}>1111, Budapest, Irinyi József utca 1-17.</span> {currentUser.permanentAddress}</Text>
                    </div>
                </div>
                <div>
                    <div className="col-md-12"  style={{padding: "100px", display: "center"}}>
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
                                        <ButtonContainer style={{ marginTop: "100px" }}>
                                            <Button content="Mentés"/>
                                            <Button content="Mégsem"/>
                                            <Button content="Szerkesztés"/>
                                            <Button content="Feliratkozás"/>
                                            <Button content="Feliratkozás törlése"/>
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
}
/*
const AvatarStyled = styled.div`

  .icon-img {
    width: 200px;
    height: auto;
  }
  .GradientText{
    background: linear-gradient(120deg, #6F4E37, #C19A6B);
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .purple{
    font-weight: bold;
  }
  
`;
*/


const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 250vh;
  width: 80vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  margin: 150px;
  text-transform: uppercase;
  letter-spacing: 0.4rem;

  .GradientText {
    background: linear-gradient(120deg, #00d0ff, #ffffff);
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

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


export default Profile;