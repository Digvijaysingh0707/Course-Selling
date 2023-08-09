import { Button, Card, TextField, Typography } from "@mui/material";

function Signup() {
  return (
    <div>
      <center>
        <div style={{ paddingTop: 200, marginBottom: 10 }}>
          <Typography variant={"h6"}>
            Welcome to coursera. Sign up here
          </Typography>
        </div>
      </center>
      <center>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField fullWidth label="Email" variant="outlined" />
          <br /> <br />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />
          <Button size={"large"} variant="contained">
            Sign Up{" "}
          </Button>
        </Card>
      </center>
    </div>
  );
}

export default Signup;
