import React from 'react'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
const genders = {
    male: 'Male',
    female: 'Female',
    other: 'Other'
}
import { parseToLocalFormat } from '../../utils/date'
import CakeIcon from '@mui/icons-material/Cake';
import TransgenderIcon from '@mui/icons-material/Transgender';
const CardProfile = ({ data }: any) => {
    return (
        <Card sx={{ margin: 2, padding: 2 }}>
            <CardHeader title={'Personal Information'}>
            </CardHeader>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>Name: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>{data?.name} </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>Lastname: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>{data?.lastname} </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>Gender: <TransgenderIcon /> </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>{genders[data?.gender]} </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>Birth date  <CakeIcon />: </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography fontSize={18}>{parseToLocalFormat(data?.birthDate)} </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>Room: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={18}>{data?.room?.level} - {data?.room?.division} </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>)
}

export default CardProfile