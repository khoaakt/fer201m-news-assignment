import { CardMedia, CardActions, CardContent, Card, Grid, Typography, ButtonBase } from '@mui/material';
import { getNewsDate } from '../../utils';
import { INewsApiArticle } from 'ts-newsapi/lib/types';
import { addHistoryRead } from '../../stores/history-slice';
import { useDispatch } from "react-redux";

export default function CardItem(props: { data: INewsApiArticle, showNews: (url: string) => void }) {
    const dispatch = useDispatch<any>();
    const { data, showNews } = props

    const { urlToImage, url, title, publishedAt, source, description } = data
    return (
        <Grid item sm={8} md={6} lg={4}>
            <Card className='news-card' style={{
                background: `rgba(0, 0, 0, .50) url("${urlToImage == null ? 'default.jpg' : urlToImage}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'darken'
            }}>
                <ButtonBase disableRipple disableTouchRipple onClick={() => {
                    if (source.name === "YouTube") {
                        window.open(url)
                    }
                    else {
                        showNews(url)
                    }
                    dispatch(addHistoryRead({...data, ...{time: new Date().getTime()}}))
                }}>
                    <CardMedia style={{ height: 140 }} title={title} />
                    <CardContent>
                        <Typography className="news-title-card" color="white" gutterBottom variant="h6">
                            {title}
                        </Typography>
                        <Typography className="news-description-card" sx={{ textAlign: 'justify', textAlignLast: 'left' }} variant="body2" color="white" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </ButtonBase>
                <CardActions style={{ padding: '0px 16px', marginBottom: 16 }}>
                    <Typography variant="body2" color="white" component="p">
                        By {source.name} - {getNewsDate(publishedAt)}
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    );
}