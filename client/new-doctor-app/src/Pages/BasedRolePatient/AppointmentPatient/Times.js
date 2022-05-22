import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import Button from "../../../Components/Button";

const time = ['08:00-09:00','09:00-10:00','10:00-11:00','11:00-12:00']

function Times(props) {

    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)

    function displayInfo(e) {
        setInfo(true);
        setEvent(e.target.innerText);
    }

    return (

        <div className="times">
            {time.map(times => {
                return (
                    <div>
                        <Button onClick={(e)=> displayInfo(e)} content={times}> </Button>
                    </div>
                )
            })}
            <div>
                {info ? `Az Ön által foglalt időpont: ${props.date.toLocaleDateString()} ${event} ` : null}
            </div>
        </div>
    )
}

export default Times;