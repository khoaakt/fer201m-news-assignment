import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        data: {
            currentCategory: null,
            currentSearch: "",
        }
    },  
    reducers: {
        setCurrentCategory: (state, data) => {
            state.data.currentCategory = data.payload;
        }
    },
})

export const {
    setCurrentCategory,
} = navigationSlice.actions
export default navigationSlice.reducer