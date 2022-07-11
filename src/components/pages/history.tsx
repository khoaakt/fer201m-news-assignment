import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const columns: GridColDef[] = [
    { field: 'title', editable: false, headerName: 'Title', width: 250 },
    { field: 'description', editable: false, headerName: 'Description', minWidth: 250, flex: 1, },
    { field: 'time', editable: false, headerName: 'Read time', width: 200, renderCell: (cell) => {
        return new Date((cell as any).value).toLocaleString('en-US')
    }},
    { field: 'url', editable: false, headerName: 'View', width: 60, renderCell: (cell) => {
        return (
            <IconButton color="primary" component="span" onClick={() => {
               window.open((cell as any).value);
            }} >
            <VisibilityIcon />
          </IconButton>
        );
    }},
];

export default function History() {
    const historyList: any[] = useSelector(
        (state: any) => state.persistedReducer.history?.data.historyRead
    );

    return (
        <Box sx={{ margin: 4, height: '85vh' }}>
            {
                historyList && <DataGrid
                    rows={historyList}
                    columns={columns}
                    pageSize={20}
                    disableSelectionOnClick
                    getRowId={(row) => row.url}
                />
            }
        </Box>
    );
}