import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { setNewsList } from '../../stores/news-slice';
import { getHeadlines } from '../../utils';
import { useSelector } from "react-redux";
import { INewsApiArticle } from 'ts-newsapi/lib/types';
import { Grid } from '@mui/material';
import CardItem from '../landing/card-item';

export default function Landing(props: any) {
    const dispatch = useDispatch();
    const newsList: INewsApiArticle[] = useSelector(
        (state: any) => state.persistedReducer.news?.data.newsList
    );

    useEffect(() => {
        (async () => {
            const data = await getHeadlines('', 'general', 0);
            dispatch(setNewsList(data.articles))
        })();
    }, [])

    return (
        <Box sx={{ margin: 4 }}>
            <Grid container spacing={6}>
                {
                    newsList.map(data => {
                        return (<CardItem data={data} showNews={(url) => {
                            const requestOptions = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ url })
                            };
                            fetch('http://localhost:3001/', requestOptions)
                                .then(response => response.json())
                                .then(data => console.log(data));
                        }} />)
                    })
                }
            </Grid>
        </Box>
    );
}