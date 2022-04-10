import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

export const getRestaurantsApi = async () => {
    try {
        return await api.get('/restaurants');
    } catch (error) {
        console.error(error.message);
    }
};

export const getRestaurantOnlyOneApi = async (id) => {
    try {
        return await api.get(`/restaurant/${id}`);
    } catch (error) {
        console.error(error.message);
    }
};

export const addNewFeedbackApi = async (id, data) => {
    try {
        return await api.post(`/add_new_feedback/${id}`, {...data});
    } catch (error) {
        console.error(error.message);
    }
};

export const addNewRestaurant = async (data) => {
    try {
        return await api.post('/add_new_restaurant', data,{
            headers: {
                'content-type': 'multipart/form-data',
            }
        });
    } catch (error) {
        console.error(error.message);
    }
};