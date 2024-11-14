import axios from 'axios';

const API_KEY = 'qednC7qUNkuOAabk2weS9qzTaKYhzF8wLyxh1crJ3zE';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
    orientation: 'landscape',
    per_page: 15,
};

export const getPhotos = async (query, page = 1) => {
    try {
        const { data } = await axios.get('search/photos', {
            params: {
                query,
                page,
            },
        });

        return data; 
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error; 
    }
};
