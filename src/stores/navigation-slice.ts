import { createSlice } from "@reduxjs/toolkit"

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        data: {
            currentCategory: 'general',
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