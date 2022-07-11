import NewsAPI from 'ts-newsapi';
import { ApiNewsCategory, INewsApiSourceItem } from 'ts-newsapi/lib/types';
const newsAPI = new NewsAPI('3d5f6596105b4430bcd9f3550ff7aae3');

const DEFAULT_COUNTRY = 'us';
const DEFAULT_LANGUAGE = 'en';
const DEFAULT_PAGE_SIZE = 15;

const getSources = async () => {
    return await newsAPI.getSources({
        category: 'general',
        language: DEFAULT_LANGUAGE,
        country: DEFAULT_COUNTRY,
    });
}

const getEverything = async (keyword: string, page: number) => {
    return await newsAPI.getEverything({
        q: keyword ? keyword : "",
        language: DEFAULT_LANGUAGE,
        pageSize: DEFAULT_PAGE_SIZE,
        page,
    });
}

const getHeadlines = async (keyword: string, category: ApiNewsCategory, page: number) => {
    return await newsAPI.getTopHeadlines({
        q: keyword,
        country: DEFAULT_COUNTRY,
        category,
        pageSize: DEFAULT_PAGE_SIZE,
        page,
    });
}

export {
    getSources,
    getHeadlines,
    getEverything,
}