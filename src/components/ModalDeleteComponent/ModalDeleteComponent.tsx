import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, CardContent } from '@mui/material';
import { auto } from '@popperjs/core';
const ModalDeleteComponent = ({ open, handleCancel, handleAccept, title, description }) => {
    return (
        <Modal
            open={open}
            aria-labelledby={title}
            aria-describedby={description}

        >
            <Card
                sx={{
                    flexGrow: 1,
                    padding: 3,
                    maxWidth: 400,
                    margin: 'auto',
                }}>
                <CardContent>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" onClick={handleAccept}>accept</Button>
                    <Button size="small" onClick={handleCancel}>cancel</Button>
                </CardActions>
            </Card>
        </Modal>)
}

export default ModalDeleteComponent