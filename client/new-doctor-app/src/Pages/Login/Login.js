import React, {useRef, useState} from 'react';
import profil from '../../Assets/profil.png';
import './Login.css';
import styled from "styled-components";
import AuthService from "../../Services/AuthService";
import { useNavigate } from 'react-router-dom';
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Button from "../../Components/Button";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                A mező kitöltés kötelező!
            </div>
        );
    }
};

const Login = () => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    navigate("/profile");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };


    return (
        <MainContainer>
            <div className="col-md-12" style={{padding: "100px"}}>
                {/*<div className="card card-container">*/}
                    <img
                        src={profil}
                        alt="profile-img"
                        className="profile-img-card"
                    />
                        <Form onSubmit={handleLogin} ref={form}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required]}
                                />
                            </div>

                            <ButtonContainer>
                                <Button content="Bejelentkezés" disabled={loading}>
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                </Button>
                            </ButtonContainer>

                            {message && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </div>
                            )}
                            <CheckButton style={{ display: "none" }} ref={checkBtn} />
                        </Form>
                {/*</div>*/}
            </div>
        </MainContainer>
    );
}



const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 70vh;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  margin: 500px;
  margin-top: 150px;
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


export default Login;