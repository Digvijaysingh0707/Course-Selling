import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function callback2(data) {
      console.log(data);
      setCourses(data?.courses)
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    fetch("http://localhost:3001/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);
  return <div style={{ display: 'flex',flexWrap:'wrap',justifyContent:'center' }}>
    {courses?.map(obj => {
      return <Course course={obj} />
    })}


  </div>;
}

function Course(props) {
  return <Card style={{
    // border: "2px solid black",
    margin: 10,
    width: 300,
    minHeight: 200
  }}>
    <Typography textAlign={"center"} variant="h6"> {props.course.title}</Typography>
    <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
    <img src={props?.course?.imageLink} style={{ width: 300, height: 200 }}></img>

  </Card>
}

export default Courses;
