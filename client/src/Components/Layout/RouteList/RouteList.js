import { Route, Routes } from "react-router-dom";
import Restaurant from "../Content/Restaurant/Restaurant";
import RestaurantList from "../Content/RestaurantList/RestaurantList";

function RouteList() {
    return (
        <Routes>
            <Route exact path='/' element={<RestaurantList />} />
            <Route path='/restaurant/:id' element={<Restaurant />} />
        </Routes>
    )
}

export default RouteList;