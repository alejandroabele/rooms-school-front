import React, { useEffect, useState } from 'react'
import StudentComponent from '../../components/StudentComponent'
import { findOneStudentService } from '../../services/student'
import { getRoomService } from '../../services/room'
import { useParams } from "react-router-dom";


const StudentsPage = () => {
    const { id } = useParams()
    const [student, setStudent] = useState(null)
    useEffect(() => {
        findOneStudentService(id).then(r => {

            setStudent(r)
        })


    }, [])
    return (
        <StudentComponent data={student} />
    )
}

export default StudentsPage