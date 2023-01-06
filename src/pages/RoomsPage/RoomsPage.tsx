import React, { useEffect, useState } from 'react'
import RoomsComponent from '../../components/RoomsComponent'
import { getRoomService, deleteRoomService, editRoomService, createRoomService } from '../../services/room'

const RoomsPage = () => {
    const handleDelete = async (id) => {
        await deleteRoomService(id)
        getRoomService().then(r => {
            setRooms(r)
        })
    }
    const handleEdit = async (data) => {
        await editRoomService(data)
        getRoomService().then(r => {
            setRooms(r)
        })
    }
    const handleCreate = async (data) => {
        await createRoomService(data)
        getRoomService().then(r => {
            setRooms(r)
        })
    }
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        getRoomService().then(r => {
            setRooms(r)

        })

    }, [])
    return (
        <RoomsComponent data={rooms} handleDelete={handleDelete} handleEdit={handleEdit} handleCreate={handleCreate} />
    )
}

export default RoomsPage