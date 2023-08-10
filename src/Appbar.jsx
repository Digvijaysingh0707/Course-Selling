import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Appbar = () => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState(null)

  const handleSignin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/signup')

  }

  useEffect(() => {
    function callback2(data) {
      if (data?.username) setUserEmail(data?.username)
      // console.log(data)
    }
    function callback1(res) {
      res.json().then(callback2)
    }
    fetch("http://localhost:3001/admin/me", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then(callback1)
  }, [])
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 4 }}>
        <div>
          <Typography>Coursera</Typography>
        </div>
        <div>
          {userEmail ?
            <>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '10px' }}>{userEmail}</div>
                <Button onClick={() => localStorage.removeItem("token")}>Log out</Button>
              </div>
            </> :
            <>
              <Button onClick={handleSignup}>Sign Up</Button>
              <Button onClick={handleSignin}>Sign in</Button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Appbar