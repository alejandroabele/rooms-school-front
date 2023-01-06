
import { Typography, Box, Link } from '@mui/material';
const MainPage = () => {

    return (
        <>
            <Typography variant="h3" align="center" marginBottom={5}>Welcome to School APP</Typography>
            <Box sx={{ padding: 4 }}>
                <Typography variant="h6" align="left">This project allows us to manage students within the different classrooms that a school contains.</Typography>
                <Typography variant="h6" align="left">The frontend of this project is created with Vite, React and Typescript. It can be used as a reference to create a role-based login, manage cruds and pages within a project.</Typography>
                <Typography variant="h6" align="left">
                    The backend of this project is created with the Sails.js framework https://sailsjs.com/, in which you can find models, controllers, routes, middlewares, etc.
                    The persistence of the data is stored in a mysql database.
                    Inside the Readme.md file you can find the instructions to develop on.
                </Typography>

                <Link href="https://github.com/alejandroabele/rooms-school-front" target="_blank" >
                    <Typography variant='overline' align="left">
                        Gitlab Frontend
                    </Typography>
                </Link>
            </Box>
        </>
    )
}

export default MainPage