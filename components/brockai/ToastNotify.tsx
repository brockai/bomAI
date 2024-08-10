import { Bounce, toast, ToastContent, TypeOptions, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToastAndWait = (message: ToastContent, type: TypeOptions) => {
    return new Promise<void>((resolve) => {
        toast(message, {
            type,
            onClose: () => resolve(),
        });
    });
};

const toastMsg = (msg: string, type: 'success' | 'error' | 'info') => {
    const className = `toast-${type}`;
    toast(msg, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        className,
    });
};

const ToastNotification: React.FC = () => {
    return <ToastContainer />;
};

export { showToastAndWait, toastMsg, ToastNotification };
