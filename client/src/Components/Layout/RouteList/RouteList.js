import { Route, Routes } from "react-router-dom";
import Restaurant from "../Content/Restaurant/Restaurant";
import RestaurantList from "../Content/RestaurantList/RestaurantList";
import AddNewRestaurant from "../Content/AddNewRestaurant/AddNewRestaurant";
import Static from "../../UI/Static/Static";

function RouteList() {
    return (
        <Routes>
            <Route exact path='/' element={<RestaurantList />} />
            <Route path='/restaurant/:id' element={<Restaurant />} />
            <Route path='/add' element={<AddNewRestaurant />} />
            <Route path='/500' element={<Static text='500 Internal Server Error' />} />
            <Route path='*' element={<Static text='404 Not Found' />} />
        </Routes>
    )
}

export default RouteList;