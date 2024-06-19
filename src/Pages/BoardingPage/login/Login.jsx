import { useState, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { loginFunction } from './login';
import { showSuccessToast, showErrorToast } from './login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../../../hooks/action'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [user, setUser] = useState('');
  const {  setUserDetails } = useUser(); 
  
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginFunction(email, password, setResponse, setUser);
    } catch (error) {
      console.log(error);
      showErrorToast('Failed to sign up');
    }
  };

  useEffect(() => {
    if (response) {
      if (response === 'User signed up successfully') {
        showSuccessToast(response);
        setUserDetails(user)
      } else {
        showErrorToast(response);
      }
    }
  }, [response, user, setUserDetails]);

  return (
    <div className="flex">
      <div className="bg-teal-950 flex-1 h-custom-h3 p-10">
        <img src="src/assets/Frame 63.png" alt="Frame" />
        <h1 className="text-white text-xl font-normal font-inter mt-3">Create an account</h1>
        <p className="text-customTextColor text-sm mt-2">Choose a preferred sign-up method</p>
        <button className="flex items-center justify-center p-3 mt-4 bg-teal-950 border-customYellow border w-full text-black rounded">
          <FcGoogle className="mr-2" /> Sign up with Google
        </button>
        <p className="mt-3" id="or">Or</p>
        <form className="mt-1 space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border border-borderColor py-3 rounded">
            <MdOutlineEmail className="mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
              aria-label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative-parent flex items-center border border-borderColor py-3 rounded relative">
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
          <div className="flex">
            <div className="text-customYellow flex-1">
              <input type="checkbox" /> Remember me
            </div>
            <div className="flex-1 lg:ml-80 text-customYellow">
              <button>Forgot password</button>
            </div>
          </div>
          <button className="w-full bg-customYellow text-black py-2 rounded mt-4 font-bold">Login</button>
          <p className="lg:ml-40 text-white font-normal text-l">Create an account? <span className="text-customYellow">Signup</span></p>
        </form>
        <ToastContainer />
      </div>
      <div className="hidden lg:flex lg:flex-1 bg-div3Color">
        <div>
          <img src="src/assets/Ellipse 18 (1).png" className="mt-10 ml-20" alt="Ellipse" />
        </div>
        <div className="text-center m-auto mt-96 mb-12">
          <p className="text-2xl font-normal mt-12 ml-custom-h2 text-white mb-2">Let’s Get You Started</p>
          <p className="mt-2 ml-custom-h2 text-customYellow text-sm mb-3">Open the pages to a world of free reads!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
