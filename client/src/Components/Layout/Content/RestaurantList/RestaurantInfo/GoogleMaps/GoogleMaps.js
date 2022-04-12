import {GoogleMap, InfoWindow, LoadScript, Marker} from "@react-google-maps/api";
import {useMemo} from "react";
import {getSelectedMarker, setSelectedMarker} from "../../../../../../Redux/restaurantSlice";
import {useDispatch, useSelector} from "react-redux";
import no_image from '../../../../../../Static/images/no-image.jpg';
import classes from './GoogleMaps.module.css';
import {Link} from "react-router-dom";
import {asset} from "../../../../../../Helper/HelperMethods";
import Ratings from "../../../../../UI/Ratings/Ratings";

function GoogleMaps({ restaurants }) {
    const selectedMarker = useSelector(getSelectedMarker);
    const dispatch = useDispatch();

    const containerStyle = {
        width: '100%',
        height: '600px'
    };

    const averagePosition = useMemo(() => {
        let lat = 0, lng = 0;

        restaurants.forEach(index => {
            lat += +index.latitude;
            lng += +index.longitude;
        });

        return {
            lat: lat / restaurants.length,
            lng: lng / restaurants.length
        }

    }, [restaurants]);

    return (
        <div className='col-sm-6'>
            {restaurants.length ? (
            <LoadScript googleMapsApiKey = {process.env.REACT_APP_GOOGLE_MAPS_KEY} >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    zoom={13}
                    center={averagePosition}
                >
                    {restaurants.map((marker) => (
                        <Marker
                            key={`${marker.latitude}-${marker.longitude}`}
                            position={{ lat: +marker.latitude, lng: +marker.longitude }}
                            onClick={() => dispatch(setSelectedMarker(marker)) }
                            onMouseOver={() => dispatch(setSelectedMarker(marker)) }
                        />
                    ))}

                    {selectedMarker ? (
                        <InfoWindow
                            position={{ lat: +selectedMarker.latitude, lng: +selectedMarker.longitude }}
                            onCloseClick={() => { dispatch(setSelectedMarker(null)) }}
                        >
                            <div className='d-flex gap-2 justify-content-between'>
                                <div>
                                    <img src={selectedMarker.avatar ? asset(selectedMarker.avatar) : no_image} className={classes.img} />
                                </div>
                                <div>
                                    <h4>{selectedMarker.name}</h4>
                                    <div>{selectedMarker.address}</div>
                                    <div className={classes.tariff}><b>Tariff: {selectedMarker.tariff} $</b></div>
                                    <Ratings ratingValue={selectedMarker.rating} size={15} readonly={true} className={classes.rating} /><br />
                                    <Link to={`/restaurant/${selectedMarker.id}`}>View Restaurant</Link>
                                </div>
                            </div>
                        </InfoWindow>
                    ) : null}
                </GoogleMap>
            </LoadScript> ) : null }
        </div>
    );
}

export default GoogleMaps;