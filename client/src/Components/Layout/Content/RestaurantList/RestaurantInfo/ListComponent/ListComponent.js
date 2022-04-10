import List from "./List/List";

function ListComponent({ restaurants }) {
    return (
        <div className='col-sm-6'>
            {restaurants.map(restaurant => <List key={restaurant.id} restaurant={restaurant} />)}
        </div>
    );
}

export default ListComponent;