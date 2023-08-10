import { Button, Card, TextField } from "@mui/material"
import { useState } from "react"

function AddCourse() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <Card variant="outlined" style={{ width: 400, padding: 20 }}>

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
        <Button
          size={"large"}
          variant="contained"
          onClick={() => {
            function callback2(data) {
              console.log(data)
              localStorage.setItem("token", data.token)
            }
            function callback1(res) {
              res.json().then(callback2)
            }
            fetch("http://localhost:3001/admin/courses", {
              method: "POST",
              body: JSON.stringify({
                title, description
              }),
              headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
              }
            })
              .then(callback1)
          }}
        >Add Course</Button>
      </Card>
    </div>
  )
}

export default AddCourse