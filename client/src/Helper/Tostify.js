import {toast} from "react-toastify";

const options = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const ToastError = (message) => toast.error(message, options);
export const ToastSuccess = (message) => toast.success(message, options);