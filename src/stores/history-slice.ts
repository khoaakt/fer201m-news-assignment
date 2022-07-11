import { createSlice } from "@reduxjs/toolkit"

const historySlice = createSlice({
    name: 'history',
    initialState: {
        data: {
            historyRead: [],
        }
    },  
    reducers: {
        addHistoryRead: (state, data) => {
            (state.data.historyRead as any[]).push(data.payload);
        }
    },
})

export const {
    addHistoryRead,
} = historySlice.actions
export default historySlice.reducer