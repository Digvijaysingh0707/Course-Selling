
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Appbar from './Appbar'
import Signup from './Signup'
import Signin from './Signin'
import AddCourse from './AddCourse'
import Courses from './Courses'
import Course from './Course'
import { RecoilRoot } from 'recoil'

function App() {

  return (

    <div style={{ width: "100vw", height: "100vh", background: '#eeeeee' }}>
      <RecoilRoot>
        <Router>
          <Appbar />

          <Routes>
            <Route path={"/addcourse"} element={<AddCourse />} />
            <Route path={"/courses"} element={<Courses />} />
            <Route path={"/course/:courseId"} element={<Course />} />


            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>

  )
}

export default App
