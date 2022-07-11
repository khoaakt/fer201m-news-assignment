import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { INewsApiArticle } from "ts-newsapi/lib/types";
import { getHeadlines } from "../utils";

export const loadCategory = createAsyncThunk('news/loadCategory', async (data: any) => {
    const { category, currentPage } = data;

    const result = await getHeadlines(category, currentPage);
    return result.articles;
})

export const loadNewPage = createAsyncThunk('news/loadNewPage', async (data: any) => {
    const { category, currentPage } = data;

    const result = await getHeadlines(category, currentPage);
    return result.articles;
})

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        data: {
            newsList: [],
            currentNews: {},
            previousNews: null,
            isLoadingNext: true,
            currentPage: 1,
        }
    },
    reducers: {
        setCurrentNews: (state, data) => {
            state.data.currentNews = data.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadCategory.pending, (state) => {
            state.data.currentNews = {};
            state.data.newsList = [];
            state.data.isLoadingNext = true;
            state.data.currentPage = 1;
        });

        builder.addCase(loadCategory.fulfilled, (state, action) => {
            (state.data.newsList as INewsApiArticle[]) = (action.payload as unknown as INewsApiArticle[]);
            state.data.isLoadingNext = false;
        });

        builder.addCase(loadNewPage.pending, (state) => {
            state.data.isLoadingNext = true;
            state.data.currentNews = {};
            state.data.currentPage++;
        });

        builder.addCase(loadNewPage.fulfilled, (state, action) => {
            (state.data.newsList as INewsApiArticle[]) = (state.data.newsList as INewsApiArticle[]).concat(action.payload);
            state.data.isLoadingNext = false;
        });
    },
})

export const {
    setCurrentNews,
} = newsSlice.actions
export default newsSlice.reducer