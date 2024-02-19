import React from "react";
import { Container } from "react-bootstrap";


function About() {

    return (
        <Container style={{ marginTop: 50 }} >
            <h1 style={{ color: "white" }}>Address:</h1>
            <h3>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. At in temporibus libero eius neque! Dolor dolorem eligendi sapiente praesentium? Culpa.</h3> <br />
            <hr />
            <h1 style={{ color: "white" }} >Your Idea: </h1>
            <input style={{ marginTop: 30, width: "60%", height: 200, borderRadius: 20, marginTop: 0, color: "white" }}></input> <br /><br />
            <button style={{ border: "none", outline: "none", padding: 10, borderRadius: 10, background: "green", color: "white" }}>Record</button>
        </Container>
    )
}

export default About 