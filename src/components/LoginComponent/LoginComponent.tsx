import { useState, useEffect } from 'react'
import { Box, Grid, TextField, Button, Typography, Card } from '@mui/material';
import { useAuthContext } from '../../context/AuthProvider'
import { useForm } from 'react-hook-form'

const LoginComponent = () => {
    const { login } = useAuthContext()
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    useEffect(() => {
        localStorage.removeItem('token')
    }, [])
    const {
        handleSubmit,
    } = useForm()
    const onSubmit = async (): Promise<any> => {
        login(username, password).then().catch((r: any) => console.log(r))
    }

    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}

        >

            <Grid item xs={3}>
                <Box
                    sx={{
                        width: 300,
                    }}
                >
                    <Card sx={{ border: '1px solid grey' }}>
                        <Grid
                            direction="column"
                            container
                            style={{ backgroundColor: 'white', padding: "30px" }}

                        >
                            <Typography align='center' variant="h4" gutterBottom>Login School App</Typography>

                            <TextField
                                required
                                label="User"
                                helperText="Enter username"
                                onChange={e => { setUsername(e.target.value) }}
                            /> <TextField
                                required
                                label="Password"
                                type="password"
                                helperText="Enter password"
                                onChange={e => { setPassword(e.target.value) }}


                            />

                            <Button onClick={handleSubmit(onSubmit)}
                                variant="contained" style={{ marginTop: '20px' }} >accept </Button>
                        </Grid>
                    </Card>


                </Box>
            </Grid>

        </Grid>
    )
}

export default LoginComponent