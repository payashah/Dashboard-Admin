import React from "react";
import { useParams } from "react-router-dom";
import CourseData from "./CourseData";
import { Col, Container, Row } from "react-bootstrap";

function MainCourse() {

    let params = useParams()

    let MainCourseData = CourseData.find((course) =>
        (course.id == params.courseID)
    )


    return (
        <Container>
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "end", marginTop: 60 }}>
                <Col> <img style={{ width: "100%", borderRadius: 30 }} src={MainCourseData.img} /></Col>
                <Col>
                    <h1 style={{ color: "chartreuse", }}>{MainCourseData.title}</h1>
                    <h3>{MainCourseData.description}</h3>
                </Col>
            </Row>
        </Container>
    )
}
export default MainCourse