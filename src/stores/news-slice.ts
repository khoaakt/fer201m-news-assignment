import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        data: {
            newsList: [],
            currentNews: null,
            previousNews: null,
        }
    },  
    reducers: {
        setCurrentNews: (state, data) => {
            state.data.currentNews = data.payload;
        },
        setNewsList: (state, data) => {
            state.data.newsList = data.payload;
        }
    },
})

export const {
    setCurrentNews,
    setNewsList,
} = newsSlice.actions
export default newsSlice.reducer