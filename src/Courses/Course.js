import React from "react";
import CourseData from "./CourseData";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Course(props) {


    return (
        <div style={{ marginLeft: 50, marginRight: 50, marginTop: 20, marginBottom: 20 }}>
            <Card style={{ width: '18rem' }}>
                <Link to={`/Course/${props.id}`}>
                    <Card.Img variant="top" src={props.img} />
                </Link>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ color: "green" }}>{props.price} $</Card.Text>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ducimus.
                    </Card.Text>
                    <Button style={{ width: "100%" }} variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Course