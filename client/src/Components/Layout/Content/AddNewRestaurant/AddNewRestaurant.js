import classes from "./AddNewRestaurant.module.css";
import Input from "../../../UI/Input/Input";
import {useState} from "react";
import {addNewRestaurant} from "../../../../Services/ApiService";
import Textarea from "../../../UI/Textarea/Textarea";
import {ToastError, ToastSuccess} from "../../../../Helper/Tostify";
import { useNavigate } from "react-router-dom";

function AddNewRestaurant() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [address, setAddress] = useState('');
    const [info, setInfo] = useState('');
    const [tariff, setTariff] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [errors, setErrors] = useState([]);

    const Add = async () => {
        try {
            const data = new FormData();
            data.append('name', name);
            data.append('avatar', avatar);
            data.append('address', address);
            data.append('info', info);
            data.append('tariff', tariff);
            data.append('latitude', latitude);
            data.append('longitude', longitude);

            const restaurant = await addNewRestaurant(data);

            if(restaurant.data?.error) {
                setErrors(restaurant.data?.error);
                ToastError('Enter correct data');
            } else {
                navigate('/');
                ToastSuccess('New Restaurant Successfully added!!!');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='container mt-5'>
            <h2 className={classes.name}>Add New Restaurant</h2>
            <div className="mt-3">
                <Input type='text' value={name} onChange={e => setName(e.target.value)} error={errors.name} label='Name' placeholder='Name' />
                <Input type='file' onChange={e => setAvatar(e.target.files[0])} label='Avatar' error={errors.avatar} placeholder='Avatar' />
                <Input type='text' value={address} onChange={e => setAddress(e.target.value)} label='Address' error={errors.address} placeholder='Address' />
                <Input type='text' value={tariff} onChange={e => setTariff(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0'))} label='Tariff' error={errors.tariff} placeholder='Tariff' />
                <Textarea type='text' value={info} onChange={e => setInfo(e.target.value)} label='Description' error={errors.info} rows={4} placeholder='Description' />
                <Input value={latitude} onChange={e => setLatitude(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0'))} label='Latitude' error={errors.latitude} placeholder='Latitude' />
                <Input value={longitude} onChange={e => setLongitude(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0'))} label='Longitude' error={errors.longitude} placeholder='Longitude' />
                <button className='btn btn-primary mt-3' onClick={Add}>Add</button>
            </div>
        </div>
    );
}

export default AddNewRestaurant;