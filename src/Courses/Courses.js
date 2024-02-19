import React, { useState } from "react";
import CourseData from "./CourseData";
import Course from "./Course";

function Courses() {

    const [Courses, setCourses] = useState(CourseData)

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {Courses.map((course) => (
                <Course {...course} key={course.id}></Course>
            ))}

        </div>
    )
}

export default Courses