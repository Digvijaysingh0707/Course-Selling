
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Appbar from './Appbar'
import Signup from './Signup'
import Signin from './Signin'
import AddCourse from './AddCourse'

function App() {

  return (

    <div style={{ width: "100vw", height: "100vh", background: '#eeeeee' }}>

      <Router>
        <Appbar />

        <Routes>
          <Route path={"/addcourse"} element={<AddCourse />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
