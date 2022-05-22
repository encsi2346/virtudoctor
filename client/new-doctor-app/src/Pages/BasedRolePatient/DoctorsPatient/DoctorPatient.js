import React, {useState, useEffect, useRef} from "react";
import DoctorDataService from "../../../Services/DoctorService";
import styled from "styled-components";
import CheckButton from "react-validation/build/button";

const DoctorPatient = props => {
    const initialDoctorState = {
        id: null,
        firstName: "",
        lastName: "",
        profession: "",
        myDoctor: false
    };

    const [currentDoctor, setCurrentDoctor] = useState(initialDoctorState);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profession, setProfession] = useState("");
    const [message, setMessage] = useState("");
    const checkBtn = useRef();


    const getDoctor = id => {
        DoctorDataService.get(id)
            .then(response => {
                setCurrentDoctor(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getDoctor(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentDoctor({ ...currentDoctor, [name]: value });
    };

    const updateMyDoctor = status => {
        var data = {
            id: currentDoctor.id,
            firstName: currentDoctor.firstName,
            lastName: currentDoctor.lastName,
            profession: currentDoctor.profession,
            myDoctor: status
        };

        DoctorDataService.update(currentDoctor.id, data)
            .then(response => {
                setCurrentDoctor({ ...currentDoctor, myDoctor: status });
                console.log(response.data);
                setMessage("The status was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const updateDoctor = () => {
        DoctorDataService.update(currentDoctor.id, currentDoctor)
            .then(response => {
                console.log(response.data);
                setMessage("The tutorial was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const createDoctor = () => {
        DoctorDataService.create(currentDoctor)
            .then(response => {
                console.log(response.data);
                setMessage("The tutorial was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };


    const deleteDoctor = () => {
        DoctorDataService.remove(currentDoctor.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/doctors");
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <MainContainer>
            <div>
                <HeaderText className='GradientText' style={{ fontSize: "2.6em", fontWeight: "bolder"}}>Orvos profilja</HeaderText>
                {currentDoctor ? (
                    <div className="edit-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName">FirstName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">LastName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="profession">Profession</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="profession"
                                    name="profession"
                                    value={profession}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <strong>Status:</strong>
                                </label>
                                {currentDoctor.myDoctor ? "MyDoctor" : "NotMyDoctor"}
                            </div>
                        </form>
                        {currentDoctor.myDoctor ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => updateMyDoctor(false)}
                            >
                                NotMyDoctor
                            </button>
                        ) : (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => updateMyDoctor(true)}
                            >
                                MyDoctor
                            </button>
                        )}
                        <button className="badge badge-danger mr-2" onClick={deleteDoctor}>
                            Delete
                        </button>
                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={createDoctor}
                        >
                            Update
                        </button>
                        <p>{message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Doctor...</p>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
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


export default DoctorPatient;