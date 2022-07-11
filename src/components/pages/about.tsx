import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function About() {
    return (
        <Box>
            <div style={{ margin: 12 }}>
                <Typography variant='h4'>News App</Typography>
                <Typography>FER201m Assignment - Written by Nguyen Anh Khoa</Typography>
                <Typography>API powered by: </Typography><a href='https://newsapi.org/'>https://newsapi.org</a>
                <Typography>Contact me: </Typography><a href='mailto:khoanase150145@fpt.edu.vn'>khoanase150145@fpt.edu.vn</a>
            </div>
        </Box>
    );
}