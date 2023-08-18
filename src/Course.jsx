import { Typography, Button, Card, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { atom } from "recoil";

function Course() {

  const [courses, setCourses] = useState([]);
  let { courseId } = useParams()

  let course = null


  for (let i = 0; i < courses?.length; i++) {
    if (courses[i].id == courseId) {
      // setCourse(courses?.[i])
      course = courses[i]
      // setCurrentCourse(course)
    }
  }


  useEffect(() => {
    function callback2(data) {
      console.log(data);
      setCourses(data.courses)
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

  if (!course) {
    return <div>
      Loading....
    </div>
  }

  return <div>
    <CourseCard course={course} />
    <UpdateCard courses={courses} course={course} setCourses={setCourses} />

  </div>

}

function UpdateCard(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  let course = props?.course
  console.log(props, 'PROPS')

  return <div style={{ display: 'flex', justifyContent: 'center' }}>

    <Card variant="outlined" style={{ width: 400, padding: 20 }}>
      <Typography>Update Course Details</Typography>


      <TextField
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        fullWidth
        label="Title"
        variant="outlined"
      />
      <TextField
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        fullWidth
        label="Description"
        variant="outlined"
      />
      <TextField
        onChange={(e) => {
          setImage(e.target.value)
        }}
        fullWidth
        label="Image Link"
        variant="outlined"
      />
      <Button
        size={"large"}
        variant="contained"
        onClick={() => {
          function callback2(data) {
            let newCourses = props.courses?.map(item => {
              if (item?.id == course.id) {
                return {
                  title,
                  description,
                  imageLink: image,
                  id: course.id
                }
              }
              return item
            })
            props.setCourses(newCourses)
          }
          function callback1(res) {
            res.json().then(callback2)
          }
          fetch("http://localhost:3001/admin/courses/" + course?.id, {
            method: "PUT",
            body: JSON.stringify({
              title, description, imageLink: image, published: true
            }),
            headers: {
              "Content-type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          })
            .then(callback1)
        }}
      >Update Course</Button>
    </Card>
  </div>
}

function CourseCard(props) {
  return <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Card style={{
      // border: "2px solid black",
      margin: 10,
      width: 300,
      minHeight: 200
    }}>
      <Typography textAlign={"center"} variant="h6"> {props.course.title}</Typography>
      <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
      <img src={props?.course?.imageLink} style={{ width: 300, height: 200 }}></img>

    </Card>
  </div>
}

export default Course

