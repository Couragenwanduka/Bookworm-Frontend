import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../../public/toastStyles.css';
// const baseUrl ='https://bookworm-backend-1.onrender.com';
const base= 'http://localhost:7000';



export const loginFunction = async (email, password, setResponse, setUser) => {
    try {
        const response = await axios.post(`${base}/sign-in`, {
            email,
            password
        });

        // console.log(response.data); 
        setUser(response.data.user);
        setResponse('User signed up successfully'); 

    } catch (error) {
        if (error.response && error.response.data) {
            // Extract the error message from the HTML response
            const htmlMessage = error.response.data;
            const errorMessage = extractErrorMessage(htmlMessage);
            
            setResponse(errorMessage); // Set the extracted error message
        } else if (error.message) {
            // Fallback to generic error message
            setResponse(`Error: ${error.message}`);
        } else {
            // Fallback generic error handling
            console.error('Error in sign-in:', error);
            setResponse('Error: Failed to sign in. Please try again.'); 
        }
    }
};

// Function to extract error message from HTML content
const extractErrorMessage = (htmlMessage) => {
    const startIndex = htmlMessage.indexOf('Error:');
    if (startIndex !== -1) {
        const endIndex = htmlMessage.indexOf('<', startIndex);
        return htmlMessage.slice(startIndex, endIndex !== -1 ? endIndex : undefined).trim();
    }
    return 'Error: Unknown error occurred';
};



export const toastConfig = {
    // position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const showSuccessToast = (message) => {
    console.log(message,'from js');
    toast.success(message, toastConfig);
};

export const showErrorToast = (message) => {
    toast.error(message, toastConfig);
};
