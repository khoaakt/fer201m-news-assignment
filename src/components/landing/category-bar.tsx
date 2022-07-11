import { Stack, Chip } from '@mui/material';
import { ApiNewsCategory } from 'ts-newsapi/lib/types';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategory } from '../../stores/navigation-slice';
import { loadCategory } from '../../stores/news-slice';

const categoryList = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

export default function CategoryBar() {
    const dispatch = useDispatch<any>();
    const currentCategory: ApiNewsCategory = useSelector(
        (state: any) => state.navigation?.data.currentCategory
    );

    return (
        <Stack direction="row" sx={{marginBottom: 4}} spacing={1}>
            {
                categoryList.map((category => {
                    return (
                        // @ts-ignore - Ignore ts error on String prototype capitalize function.
                        <Chip key={category} label={category.capitalize()} variant={currentCategory === category ? "filled": "outlined"} onClick={() => {
                            dispatch(setCurrentCategory(category))
                            dispatch(loadCategory({ category, currentPage: 1 }))
                        }}/>
                    )
                }))
            }
      </Stack>
    );
}