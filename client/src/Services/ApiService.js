import axios from 'axios';

const getUrl = (url) => process.env.REACT_APP_SERVER_URL + url;

export const getRestaurantsApi = async () => {
    try {
        return await axios.get(getUrl('/restaurants'));
    } catch (error) {
        console.error(error.message);
    }
};

export const getRestaurantOnlyOneApi = async (id) => {
    try {
        return await axios.get(getUrl(`/restaurant/${id}`));
    } catch (error) {
        console.error(error.message);
    }
};