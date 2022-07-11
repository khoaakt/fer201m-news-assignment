import { CardMedia, CardActions, CardContent, Card, Grid, Typography, ButtonBase } from '@mui/material';
import { getNewsDate } from '../../utils';
import { INewsApiArticle } from 'ts-newsapi/lib/types';

export default function CardItem(props: { data: INewsApiArticle, showNews: (url: string) => void }) {
    const { data, showNews } = props

    const { urlToImage, url, title, publishedAt, source, description } = data
    return (
        <Grid item sm={7} md={5} lg={3}>
            <Card className='news-card' style={{
                background: `rgba(0, 0, 0, .8) url("${urlToImage == null ? 'default.jpg' : urlToImage}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'darken'
            }}>
                <ButtonBase disableRipple disableTouchRipple onClick={() => { showNews(url) }}>
                    <CardMedia style={{ height: 140 }} title={title} />
                    <CardContent>
                        <Typography className="news-title-card" color="white" gutterBottom variant="h6">
                            {title}
                        </Typography>
                        <Typography className="news-description-card" variant="body2" color="white" component="p">
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