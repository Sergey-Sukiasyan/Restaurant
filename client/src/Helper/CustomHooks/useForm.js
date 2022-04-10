import {useState} from "react";

export default function useForm(initialState) {
    const [value, setValue] = useState(initialState);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return { value, onChange }
}