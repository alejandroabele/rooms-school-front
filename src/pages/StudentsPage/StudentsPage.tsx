import React, { useEffect, useState } from 'react'
import StudentsComponent from '../../components/StudentsComponent'
import { getStudentService, deleteStudentService, createStudentService, editStudentService } from '../../services/student'
import { getRoomService } from '../../services/room'
const StudentsPage = () => {
    const handleDelete = async (id) => {
        await deleteStudentService(id)
        getStudentService().then(r => {
            setStudents(r)
        })
    }
    const handleEdit = async (data) => {
        await editStudentService(data)
        getStudentService().then(r => {
            setStudents(r)
        })
    }
    const handleCreate = async (data) => {
        await createStudentService(data)
        getStudentService().then(r => {
            setStudents(r)
        })
    }
    const [students, setStudents] = useState([])
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        getStudentService().then(r => {
            setStudents(r)
        })
        getRoomService().then(r => {
            setRooms(r)

        })

    }, [])
    return (
        <StudentsComponent data={students} rooms={rooms} handleDelete={handleDelete} handleEdit={handleEdit} handleCreate={handleCreate} />
    )
}

export default StudentsPage