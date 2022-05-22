import React from "react";
import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import doctor from '../../Assets/doctor.png'
import { BsLink } from "react-icons/bs";


function PostCard (props) {
    return (
        <div>
            <a
                className="blog-link"
                href={props.link}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "1.2em" }}
            >
                <Card className="blog-card-view" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.imgPath} className="blog-img" sizes="100px180" />
                    <Card.Body>
                        <Card.Title>Közlemény</Card.Title>
                        <Card.Text>
                            Orvosi felhívás
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Felnőttek részére</ListGroupItem>
                            <ListGroupItem>2022.03.12.</ListGroupItem>
                        </ListGroup>
                        <Card.Footer>
                            <BsLink />
                            &nbsp;
                            {props.title}
                            <p style={{ marginBlockEnd: "0em" }}>{props.site}</p>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
};

export default PostCard;
