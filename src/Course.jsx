import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {

    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState([]);
    let {courseId}=useParams()

    

    


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
    // useEffect(()=>{
    //     for(let i=0;i<courses?.length;i++){
    //         if(courses?.[i]?.id===courseId){
    //             setCourse(courses?.[i])
    //         }
    //     }
    // },[courses?.length>0])
    // let x=null
    for(let i=0;i<courses?.length;i++){
        if(courses[i]?.id==courseId){
            setCourse(courses?.[i])
            // x=courses?.[i]
        }
    }
    
    return <div>
        {courseId}
        {JSON.stringify(courses)}
        <br/><br/><br/><br/><br/><br/><br/><br/>
        {JSON.stringify(course)}
    </div>

}
export default Course