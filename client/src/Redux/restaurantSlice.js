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
        },
        setRestaurantOnlyOne(state, action) {
            state.restaurant_only_one = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurantsData.fulfilled, (state, action) => {
            state.restaurants = action.payload
            state.isLoading = false;
        });
        builder.addCase(getRestaurantsData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getRestaurantOnlyOneData.fulfilled, (state, action) => {
            state.restaurant_only_one = action.payload
            state.isLoading = false;
        });
        builder.addCase(getRestaurantOnlyOneData.pending, (state, action) => {
            state.isLoading = true;
        });
    }
});

export const { setSelectedMarker,setRestaurantOnlyOne } = restaurantSlice.actions;

export default restaurantSlice.reducer;

export const getRestaurants = (state) => state?.restaurant?.restaurants;
export const getLoadingStatus = (state) => state?.restaurant?.isLoading;
export const getRestaurantOnlyOne = (state) => state?.restaurant?.restaurant_only_one;
export const getSelectedMarker = (state) => state?.restaurant?.selectedMarker;