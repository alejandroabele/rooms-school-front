import React, { useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import { TextField, Grid, Card, FormHelperText, Button, CardActions, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { parseToUsFormat, getCurrentDatetime } from '../../utils/date'


const StudentsFormComponent = ({ data, handleCancel, handleAccept, rooms, title }) => {
    const { handleSubmit, control, getValues, setValue, } = useForm({
    });

    const onSubmit = () => {
        const { name, birthDate, lastname, gender, room } = getValues()
        const dataStudent = {
            name,
            lastname,
            birthDate,
            gender,
            room
        }
        if (data?.id) {
            dataStudent.id = data.id
            handleAccept(dataStudent, 'edit')
        } else {
            handleAccept(dataStudent, 'create')
        }
    };

    useEffect(() => {
        if (data) {
            setValue('gender', data.gender)
            setValue('name', data.name)
            setValue('lastname', data.lastname)
            setValue('birthDate', parseToUsFormat(data.birthDate))
            setValue('room', data.room.id)

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
                                name="name"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <TextField
                                    helperText={!field.value ? 'Name is required' : ''}
                                    variant="standard"
                                    error={!field.value}
                                    size="small"
                                    label="Name"
                                    {...field} />}
                            />
                        </Grid>
                        <Grid
                            container item sm={6} direction='row'
                        >
                            <Controller
                                name="lastname"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <TextField variant="standard"
                                    size="small"
                                    helperText={!field.value ? 'Lastname is required' : ''}
                                    error={!field.value}
                                    label="Lastname" {...field} />}
                            />
                        </Grid>
                        <Grid
                            container item sm={6} direction='row'
                        >
                            <Controller
                                name="gender"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) =>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Gender"
                                            variant="standard"
                                            size="small"
                                            value={field.value}
                                            defaultValue={data?.gender}
                                            error={!field.value}
                                        >
                                            <MenuItem value={'female'}>Female</MenuItem>
                                            <MenuItem value={'male'}>Male</MenuItem>
                                            <MenuItem value={'other'}>Other</MenuItem>

                                        </Select>
                                        {!field.value ? <FormHelperText>Gender is required</FormHelperText> : ''}

                                    </FormControl>}
                            />
                        </Grid>
                        <Grid
                            container item sm={6} direction='row'
                        >
                            <Controller
                                name="birthDate"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <TextField variant="standard"
                                    size="small"
                                    helperText={!field.value ? 'birthdate is required' : ''}
                                    error={!field.value}
                                    type={'date'} {...field} />}
                            />

                        </Grid>
                        <Grid
                            container item sm={6} direction='row'
                        >
                            <Controller
                                name="room"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) =>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Room</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Room"
                                            variant="standard"
                                            size="small"
                                            value={field.value}
                                            defaultValue={data?.room?.id}
                                            error={!field.value}
                                        >
                                            {rooms.map(e => (
                                                <MenuItem value={e.id}>{e.level} - {e.division}</MenuItem>

                                            ))}


                                        </Select>
                                        {!field.value ? <FormHelperText>Room is required</FormHelperText> : ''}

                                    </FormControl>}
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

export default StudentsFormComponent