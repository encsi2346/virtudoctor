import React, {useEffect, useMemo, useRef, useState} from 'react';
import styled from "styled-components";
import UserService from "../../../Services/UserService";
import {useTable} from "react-table";
import appointmentService from "../../../Services/AppointmentService";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import Pagination from "@material-ui/lab/Pagination";


const AppointmentListPatient = (props) => {

    const [doctors, setDoctors] = useState([]);
    const [searchFirstName, setSearchFirstName] = useState("");
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const pageSizes = [3, 6, 9];

    const doctorsRef = useRef();
    doctorsRef.current = doctors;

    const [content, setContent] = useState("");
    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
        );
    }, []);

    useEffect(() => {
        retrieveDoctors();
    }, []);

    const onChangeSearchFirstName = (e) => {
        const searchFirstName = e.target.value;
        setSearchFirstName(searchFirstName);
    };

    const getRequestParams = (searchFirstName, page, pageSize) => {
        let params = {};
        if (searchFirstName) {
            params["firstName"] = searchFirstName;
        }
        if (page) {
            params["page"] = page - 1;
        }
        if (pageSize) {
            params["size"] = pageSize;
        }
        return params;
    };

    const retrieveDoctors = () => {
        const params = getRequestParams(searchFirstName, page, pageSize);
        appointmentService.getAll(params)
            .then((response) => {
                const { tutorials, totalPages } = response.data;
                setDoctors(doctors);
                setCount(totalPages);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveDoctors();
    };

    const removeAllDoctors = () => {
        appointmentService.removeAll()
            .then((response) => {
                console.log(response.data);
                refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(retrieveDoctors, [page, pageSize]);

    const findByFirstName = () => {
        setPage(1);
        retrieveDoctors();
        /*DoctorDataService.findByFirstName(searchFirstName)
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((e) => {
                console.log(e);
            });*/
    };

    const openDoctor = (rowIndex) => {
        const id = doctorsRef.current[rowIndex].id;
        //props.history.push("/doctors/" + id);
        appointmentService.get(id);
    };

    const deleteDoctor = (rowIndex) => {
        const id = doctorsRef.current[rowIndex].id;
        appointmentService.remove(id)
            .then((response) => {
                props.history.push("/doctors");
                let newDoctors = [...doctorsRef.current];
                newDoctors.splice(rowIndex, 1);
                setDoctors(newDoctors);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const columns = useMemo(
        () => [
            {
                Header: "Title",
                accessor: "title",
            },
            {
                Header: "Type",
                accessor: "type",
            },
            {
                Header: "Comment",
                accessor: "comment",
            },
            {
                Header: "Actions",
                accessor: "actions",
                Cell: (props) => {
                    const rowIdx = props.row.id;
                    return (
                        <div>
                                <span onClick={() => openDoctor(rowIdx)}>
                                    <i className="far fa-edit action mr-2"></i>
                                </span>
                            <span onClick={() => deleteDoctor(rowIdx)}>
                                    <i className="fas fa-trash action"></i>
                                </span>
                        </div>
                    );
                },
            },
        ],
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data: doctors,
    });

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    useEffect(() => {
        appointmentService.getAll()
            .then(response => {
                console.log('Printing employees data', response.data);
                setDoctors(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, []);

    return (
        <MainContainer>
            <div className="mb-3" style={{ color: "white"}}>
                <HeaderText className='GradientText' style={{ fontSize: "2.6em", fontWeight: "bolder"}}>Időpontfoglalások</HeaderText>
                <div>
                    {/*<Table_/>*/}
                </div>
                <div style={{ color: "white"}}>
                    <div className="mb-3" style={{ color: "white"}}>
                        <HeaderText className='GradientText' style={{ fontSize: "2.6em", fontWeight: "bolder"}}>Orvosok</HeaderText>
                        <div className="mb-3" style={{ color: "white", width: "500px", display: "flow", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                            <Input
                                type="text"
                                placeholder="Search by firstName"
                                value={searchFirstName}
                                onChange={onChangeSearchFirstName}
                            />
                            <div className="mb-3" style={{ color: "white", width: "200px", display: "center"}}>
                                <ButtonContainer>
                                    <Button content="Keresés" onClick={findByFirstName}/>
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3" style={{ color: "white"}}>
                        <div className="mt-3">
                            {"Items per Page: "}
                            <select onChange={handlePageSizeChange} value={pageSize}>
                                {pageSizes.map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                            <Pagination
                                className="my-3"
                                count={count}
                                page={page}
                                siblingCount={1}
                                boundaryCount={1}
                                variant="outlined"
                                shape="rounded"
                                onChange={handlePageChange}
                            />
                        </div>
                        <table
                            className="table table-striped table-bordered"
                            {...getTableProps()}
                        >
                            <thead style={{ color: "white"}}>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody {...getTableBodyProps()} style={{ color: "white"}}>
                            {rows.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-sm btn-danger" onClick={removeAllDoctors}>
                            Remove All
                        </button>
                    </div>

                    {/*<div>
                        <h3>List of Doctors</h3>
                        <div>
                            <table border="1" cellPadding="10">
                                <thead>
                                <tr>
                                    <th>profession</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    doctors.map(doctors => (
                                        <tr key={doctors.id}>
                                            <td>{doctors.profession}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>*/}
                    {/* <div style={{color: "FFFFFF07"}}>
                        <Table />
                    </div>*/}
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



export default AppointmentListPatient;