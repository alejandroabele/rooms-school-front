import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ModalDeleteComponent from '../ModalDeleteComponent';
import RoomsFormComponent from '../RoomsFormComponent';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import { useAuthContext } from '../../context/AuthProvider'

const RoomsComponent = ({ data, handleDelete, handleCreate, handleEdit }) => {
    const { getRole } = useAuthContext()
    const [openDelete, setOpenDelete] = useState(false)
    const [titleForm, setTitleForm] = useState('')
    const [idSelected, setIdSelected] = useState(null)
    const [currentRoom, setCurrentRoom] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const deleteElement = (id) => {
        setOpenDelete(true)
        setIdSelected(id)

    }
    const handleCancel = () => {
        setOpenDelete(false)
        setShowModal(false)
    }
    const handleAccept = () => {
        setOpenDelete(false)
        handleDelete(idSelected)
    }
    const handleNewRoom = () => {
        setTitleForm('Create Room')
        setCurrentRoom(null)
        setShowModal(true)
    }
    const editElement = (element) => {
        setTitleForm('Edit Room')
        setCurrentRoom(element)
        setShowModal(true)

    }
    const handleAcceptRoom = (data, action) => {
        switch (action) {
            case 'create':
                handleCreate(data)
                setShowModal(false)
                break;
            case 'edit':
                handleEdit(data)
                setShowModal(false)
                break;
            default:
                break;
        }

    }
    return (
        <>


            <Modal open={showModal} >
                <RoomsFormComponent title={titleForm} data={currentRoom} handleCancel={handleCancel} handleAccept={handleAcceptRoom} />
            </Modal>
            <ModalDeleteComponent open={openDelete} handleAccept={handleAccept} handleCancel={handleCancel} title={'Warning'} description={'¿Are you sure you want to delete?'} />
            <Typography variant="h4" align='center' > Rooms </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, fontWeight: "bold", }} aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Level</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Division</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="left">{row.level}</TableCell>
                                <TableCell align="left">{row.division}</TableCell>
                                <TableCell align="right">
                                    {getRole() === 'admin' && (<Button onClick={() => { deleteElement(row.id) }}>
                                        <DeleteIcon />
                                    </Button>)}
                                    {getRole() === 'admin' && (<Button onClick={() => { editElement(row) }}>
                                        <EditIcon />
                                    </Button>)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Fab color="primary" onClick={handleNewRoom
            } sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
            }} aria-label="add">
                <AddIcon />
            </Fab>
        </>)
}

export default RoomsComponent