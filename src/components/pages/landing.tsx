import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { loadCategory, loadNewPage } from '../../stores/news-slice';
import { setCurrentNews, setOpenReader } from '../../stores/reader-slice';
import { getNewsData } from '../../utils';
import { useSelector } from "react-redux";
import { ApiNewsCategory, INewsApiArticle } from 'ts-newsapi/lib/types';
import { CircularProgress, Grid } from '@mui/material';
import CardItem from '../landing/card-item';
import CategoryBar from '../landing/category-bar';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

export default function Landing() {
    const dispatch = useDispatch<any>();
    const currentCategory: ApiNewsCategory = useSelector(
        (state: any) => state.navigation?.data.currentCategory
    );
    const newsList: INewsApiArticle[] = useSelector(
        (state: any) => state.news?.data.newsList
    );
    const currentPage: number = useSelector(
        (state: any) => state.news?.data.currentPage
    );
    const isLoadingNext: number = useSelector(
        (state: any) => state.news?.data.isLoadingNext
    );

    const getCategoryToFetch = () => { return currentCategory ? currentCategory : 'general' }

    useBottomScrollListener(() => {
        dispatch(loadNewPage({ category: getCategoryToFetch(), currentPage: currentPage + 1 }))
    });

    useEffect(() => {
        (async () => {
            dispatch(loadCategory({ category: getCategoryToFetch(), currentPage: 1 }))
        })();
    }, [])

    const onShowNewsClick = async (url: string) => {
        dispatch(setOpenReader(true))
        dispatch(setCurrentNews({}))
        const result = await getNewsData(url)
        dispatch(setCurrentNews(result))
    }

    return (
        <Box sx={{ margin: 4 }}>
            <CategoryBar />
            <Grid container sx={{top: 10}} spacing={2}>
                { newsList &&
                    newsList.map(data => {
                        return (<CardItem data={data} showNews={onShowNewsClick} />)
                    })
                }
            </Grid>
            <Box sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                { isLoadingNext && <CircularProgress /> }
            </Box>
        </Box>
    );
}
