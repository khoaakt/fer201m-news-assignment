import { createSlice } from "@reduxjs/toolkit"

const readerSlice = createSlice({
    name: 'reader',
    initialState: {
        data: {
            isOpenReader: false,
            news: null,
        }
    },  
    reducers: {
        setCurrentNews: (state, data) => {
            state.data.news = data.payload;
        },
        setOpenReader: (state, data) => {
            state.data.isOpenReader = data.payload;
        }
    },
})

export const {
    setCurrentNews,
    setOpenReader
} = readerSlice.actions
export default readerSlice.reducer