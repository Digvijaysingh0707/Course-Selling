import { Button, Card, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";

function Signup() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <div style={{ paddingTop: 200, marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
        <Typography variant={"h6"}>
          Welcome to coursera. Sign up here
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField fullWidth label="Email" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
          <br /> <br />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button size={"large"} variant="contained"
            onClick={() => {
              function callback2(data) {
                console.log(data)
                localStorage.setItem("token", data.token)
              }
              function callback1(res) {
                res.json().then(callback2)
              }
              fetch("http://localhost:3001/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username, password
                }),
                headers: {
                  "Content-type": "application/json"
                }
              })
                .then(callback1)
            }}
          >
            Sign Up{" "}
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
