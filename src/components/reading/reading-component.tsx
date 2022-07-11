import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Dialog, useTheme } from '@mui/material';

export default function ReadingComponent(props: any) {
    const { content } = props.data
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    return <Dialog fullScreen={fullScreen} />;
}