import { Route, Routes } from "react-router-dom";
import Restaurant from "../Content/Restaurant/Restaurant";
import RestaurantList from "../Content/RestaurantList/RestaurantList";
import AddNewRestaurant from "../Content/AddNewRestaurant/AddNewRestaurant";
import NoData from "../../UI/NoData/NoData";

function RouteList() {
    return (
        <Routes>
            <Route exact path='/' element={<RestaurantList />} />
            <Route path='/restaurant/:id' element={<Restaurant />} />
            <Route path='/add' element={<AddNewRestaurant />} />
            <Route path='*' element={<NoData />} />
        </Routes>
    )
}

export default RouteList;