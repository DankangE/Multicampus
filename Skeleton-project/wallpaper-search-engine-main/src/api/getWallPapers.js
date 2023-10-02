import request from './request';
// https://pixabay.com/api/?key={39667152-674ad0b9b2bf6ba4a273fefad}&q=yellow+flowers&image_type=photo

const BASE_URL = 'https://pixabay.com/api';

const defaultParam = {
    key: '39692158-5fbd03a8d4f9a2376ab1fe023',
    safesearch: true,
};

const getWallPapers = async (paramObj) => {
    const params = new URLSearchParams({
        ...defaultParam,
        ...paramObj,
    }).toString();
    const result = await request(`${BASE_URL}/?${params}`);
    return result;
};

export default getWallPapers;