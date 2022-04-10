import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getRestaurantOnlyOneApi, getRestaurantsApi} from "../Services/ApiService";

const initialState = {
    restaurants: [],
    restaurant_only_one: {},
    isLoading: false,
    selectedMarker: null
};

export const getRestaurantsData = createAsyncThunk(
    '/restaurants',
    async () => {
      const response = await getRestaurantsApi();
      return response.data;
    }
);

export const getRestaurantOnlyOneData = createAsyncThunk(
    '/restaurant/:id',
    async (id) => {
        const response = await getRestaurantOnlyOneApi(id);
        return response.data;
    }
);

const restaurantSlice = createSlice({
    name:'resaurants',
    initialState,
    reducers: {
        setSelectedMarker(state, action) {
            state.selectedMarker = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurantsData.fulfilled, (state, action) => {
            state.restaurants = action.payload
        });
        builder.addCase(getRestaurantOnlyOneData.fulfilled, (state, action) => {
            state.restaurant_only_one = action.payload
        });
    }
});

export const { setSelectedMarker } = restaurantSlice.actions;

export default restaurantSlice.reducer;

export const getRestaurants = (state) => state?.restaurant?.restaurants;
export const getRestaurantOnlyOne = (state) => state?.restaurant?.restaurant_only_one;
export const getSelectedMarker = (state) => state?.restaurant?.selectedMarker;