import React, { useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import { TextField, Grid, Card, Button, CardActions, CardContent, Typography } from '@mui/material';


const RoomsFormComponent = ({ data, handleCancel, handleAccept, title }) => {
    const { handleSubmit, control, getValues, setValue, } = useForm({
    });

    const onSubmit = () => {
        const { level, birthDate, division, gender, room } = getValues()
        const dataRoom = {
            level,
            division,
            birthDate,
            gender,
            room
        }
        if (data?.id) {
            dataRoom.id = data.id
            handleAccept(dataRoom, 'edit')
        } else {
            handleAccept(dataRoom, 'create')
        }
    };

    useEffect(() => {
        if (data) {
            setValue('level', data.level)
            setValue('division', data.division)
        }


    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Card sx={{ padding: 5, maxWidth: 500, margin: 'auto' }}>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <CardContent
                >
                    <Grid container spacing={2}>

                        <Grid
                            container item sm={6} direction='row'
                        >
                            <Controller
                                name="level"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <TextField
                                    helperText={!field.value ? 'Level is required' : ''}
                                    variant="standard"
                                    type={'number'}
                                    error={!field.value}
                                    size="small"
                                    label="Level"
                                    {...field} />}
                            />
                        </Grid>
                        <Grid
                            container item sm={6} direction='row'
                        >
                            <Controller
                                name="division"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <TextField variant="standard"
                                    size="small"
                                    helperText={!field.value ? 'Division is required' : ''}
                                    error={!field.value}
                                    label="Division" {...field} />}
                            />
                        </Grid>
                        <Grid container item sm={12} md={12} direction='row'>
                            <CardActions sx={{ marginTop: 4 }}>
                                <Button size="small" onClick={handleSubmit(onSubmit)} >accept</Button>
                                <Button size="small" onClick={handleCancel}>cancel</Button>
                            </CardActions>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card >

        </form>
    )
}

export default RoomsFormComponent