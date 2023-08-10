import { Button, Card, TextField, Typography } from "@mui/material";

function Signin() {
  return (
    <div>
      <div style={{ paddingTop: 200, marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
        <Typography variant={"h6"}>
          Welcome back. Sign in below
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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
            Sign In{" "}
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
