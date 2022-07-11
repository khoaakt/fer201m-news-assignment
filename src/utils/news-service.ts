import NewsAPI from 'ts-newsapi';
import { ApiNewsCategory } from 'ts-newsapi/lib/types';
const newsAPI = new NewsAPI('3d5f6596105b4430bcd9f3550ff7aae3');

const DEFAULT_COUNTRY = 'us';
const DEFAULT_PAGE_SIZE = 12;

const getHeadlines = async (category: ApiNewsCategory, page: number) => {
    return await newsAPI.getTopHeadlines({
        q: '',
        country: DEFAULT_COUNTRY,
        category,
        pageSize: DEFAULT_PAGE_SIZE,
        page,
    });
}

const getNewsData = async (url: string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    };
    const fetchData = await fetch('http://localhost:3001/', requestOptions)

    return await fetchData.json()
}

export {
    getHeadlines,
    getNewsData,
}