import { Typography, Box } from '@mui/material';
import CardProfile from '../CardProfile';

const StudentComponent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h4" align='center' > Information about student </Typography>
      <CardProfile data={data} />
      <Typography variant="h4" align='center' > Brothers </Typography>

      {data?.brothers.map(element => {
        return (<CardProfile data={element} />)
      })}
    </Box>


  )
}

export default StudentComponent