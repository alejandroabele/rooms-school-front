import { useState } from 'react';
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModalDeleteComponent from '../ModalDeleteComponent';
import StudentsFormComponent from '../StudentsFormComponent';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import { parseToLocalFormat } from '../../utils/date'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../context/AuthProvider'

export default function BasicTable({ data, handleDelete, handleCreate, handleEdit, rooms }) {
    const navigate = useNavigate()
    const { getRole } = useAuthContext()
    const [openDelete, setOpenDelete] = useState(false)
    const [idSelected, setIdSelected] = useState(null)
    const [currentStudent, setCurrentStudent] = useState(null)
    const [titleForm, setTitleForm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const deleteElement = (id) => {
        setOpenDelete(true)
        setIdSelected(id)

    }
    const handleCancel = () => {
        setOpenDelete(false)
        setShowModal(false)
    }
    const handleAccept = (data, action) => {
        setOpenDelete(false)
        handleDelete(idSelected)
    }
    const handleNewStudent = () => {
        setTitleForm('Create student')
        setCurrentStudent(null)
        setShowModal(true)
    }
    const editElement = (element) => {
        setTitleForm('Edit student')
        setCurrentStudent(element)
        setShowModal(true)

    }
    const handleAcceptStudent = (data, action) => {
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
                <StudentsFormComponent title={titleForm} data={currentStudent} rooms={rooms} handleCancel={handleCancel} handleAccept={handleAcceptStudent} />
            </Modal>
            <ModalDeleteComponent open={openDelete} handleAccept={handleAccept} handleCancel={handleCancel} title={'Warning'} description={'¿Are you sure you want to delete?'} />
            <Typography variant="h4" align='center' > Students </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, fontWeight: "bold", }} aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Lastname</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Gender</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Room</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Birth Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.lastname}</TableCell>
                                <TableCell align="left">{row.gender}</TableCell>
                                <TableCell align="left">{row.room ? `${row.room.level} ${row.room.division}` : ''}</TableCell>
                                <TableCell align="left">{parseToLocalFormat(row.birthDate)}</TableCell>
                                <TableCell align="right">
                                    {getRole() === 'admin' && (<Button onClick={() => { deleteElement(row.id) }}>
                                        <DeleteIcon />
                                    </Button>)}
                                    {getRole() === 'admin' && (<Button onClick={() => { editElement(row) }}>
                                        <EditIcon />
                                    </Button>)}
                                    <Button onClick={() => { navigate('/students/' + row.id) }}>
                                        <VisibilityIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {getRole() === 'admin' && (
                <Fab color="primary" onClick={handleNewStudent
                } sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                }} aria-label="add">
                    <AddIcon />
                </Fab>)}
        </>
    );
}