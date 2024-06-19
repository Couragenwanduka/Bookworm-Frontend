import { useState, useEffect} from 'react';
import { FcGoogle } from "react-icons/fc";
import { MdOutlinePersonPin, MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { SignupFunction, showSuccessToast, showErrorToast } from './signup.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [response, setResponse] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await SignupFunction(e, name, email, password, confirmPassword, setResponse);
        } catch (error) {
            console.error('Error in signup:', error);
            showErrorToast('Failed to sign up');
        }
    };

    useEffect(() => {
      // Check if response is not empty and show corresponding toast
      if (response) {
          if (response === 'User saved successfully') {
              showSuccessToast(response);
          } else {
              showErrorToast(response);
          }
      }
  }, [response]);

    return (
        <div className="lg:flex ">
            <div className="bg-teal-950 flex-1 lg:h-custom-h3 p-10 ">
                <img src="src\assets\Frame 63.png" alt="Frame" />
                <h1 className="text-white text-xl font-normal font-inter mt-3">Create an account</h1>
                <p className="text-customTextColor text-sm mt-2">Choose a preferred sign-up method</p>
                <button className="flex items-center justify-center p-1 mb-2 mt-4 bg-teal-950 border-customYellow border w-full text-black rounded">
                    <FcGoogle className="mr-2" /> Sign up with Google
                </button>
                <p className="lg:mt-10  hidden lg:contents" id="or">Or</p>
                <form className="mt-1 space-y-3" onSubmit={handleSubmit}>
                    <div className="flex items-center border border-borderColor py-1 rounded">
                        <MdOutlinePersonPin className="mr-2" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
                            aria-label="Full Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center border border-borderColor py-2 rounded">
                        <MdOutlineEmail className="mr-2" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
                            aria-label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative-parent flex items-center border border-borderColor py-2 rounded relative">
                        <CiLock className="mr-2" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            aria-label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            {showPassword ? <FiEye /> : <FiEyeOff />}
                        </button>
                    </div>
                    <div className="relative-parent flex items-center border border-borderColor py-1 rounded relative">
                        <CiLock className="mr-2" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            aria-label="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
                        </button>
                    </div>
                    <button className="w-full bg-customYellow text-black py-2 rounded mt-4 font-bold">Create Account</button>
                    <p className="lg:ml-40 text-white font-normal text-l ">Already have an account? <span className="text-customYellow">Login</span></p>
                </form>
                <ToastContainer />
            </div>
            <div className=" lg:flex lg:flex-1 bg-div3Color">
                <div>
                    <img src="src\assets\Ellipse 18.png" className=" lg:mt-10 lg:ml-20 w-58 ml-10" alt="Ellipse" />
                </div>
                <div className="text-center m-auto lg:mt-96 mt-24">
                    <p className="text-2xl font-normal mt-10 lg:ml-custom-h2 text-white">Let’s Get You Started</p>
                    <p className="mt-2 lg:ml-custom-h2 text-customYellow text-sm">Open the pages to a world of free reads!</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
