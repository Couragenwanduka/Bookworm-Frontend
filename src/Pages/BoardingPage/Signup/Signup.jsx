import { useState, useEffect} from 'react';
import { FcGoogle } from "react-icons/fc";
import { MdOutlinePersonPin, MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { SignupFunction, showSuccessToast, showErrorToast } from './signup.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../../Images/Icons/Logo.svg';
import Dot from '../../../Images/Icons/Dot.svg';
import Reading from '../../../Images/assets/Reading.png';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [response, setResponse] = useState('');
    const navigate = useNavigate();

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
        <main className="lg:flex  h-full">
            <section className="bg-[#192E31] flex-1 lg:h-screen p-10 ">
                <img src={Logo} alt="Frame"  onClick={()=>{navigate('/')}} className='cursor-pointer'/>
                <h1 className="text-white text-xl font-normal font-inter mt-10">Create an account</h1>
                <p className="text-white text-opacity-50 text-sm mt-2">Choose a preferred sign-up method</p>
                <button className="flex items-center justify-center mt-6 h-12 bg-transparent border-secondaryColor border w-full text-secondaryColor rounded mb-4">
                    <FcGoogle className="mr-2" /> Sign up with Google
                </button>
                <p className=" hidden lg:contents text-white text-opacity-30" id="or">Or</p>
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                    <div className="flex items-center border border-white border-opacity-30 h-12 rounded">
                        <MdOutlinePersonPin className=" w-6 h-6 text-white text-opacity-50 ml-2" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="appearance-none bg-transparent border-none w-full placeholder:text-white placeholder:text-opacity-30 text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
                            aria-label="Full Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center border border-white border-opacity-30 h-12 rounded">
                        <MdOutlineEmail className="w-6 h-6 text-white text-opacity-50 ml-2" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
                            aria-label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative-parent flex items-center  border border-white border-opacity-30 h-12 rounded relative">
                        <CiLock className="w-6 h-6 text-white text-opacity-50 ml-2" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            aria-label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-opacity-30">
                            {showPassword ? <FiEye /> : <FiEyeOff />}
                        </button>
                    </div>
                    <div className="relative-parent flex items-center  border border-white border-opacity-30 h-12 rounded relative">
                        <CiLock className="w-6 h-6 text-white text-opacity-50 ml-2" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            aria-label="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-opacity-30">
                            {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
                        </button>
                    </div>
                    <button className="w-full bg-secondaryColor text-black py-2 rounded h-12">Create Account</button>
                    <p className="lg:ml-40 text-white  font-normal text-sm mt-10  cursor-pointer" onClick={()=>{navigate('/signin')}}>Already have an account? <span className="text-secondaryColor">Login</span></p>
                </form>
                <ToastContainer />
            </section>
            <section className=" lg:flex lg:flex-1 flex-col justify-center items-center  bg-[#243F46] h-screen">
                <div>
                    <img src={Reading} className="" alt="Ellipse" />
                </div>
                <div className="text-center">
                    <p className="text-2xl font-normal mt-10 text-white">Let’s Get You Started</p>
                    <p className="mt-2 lg:ml-custom-h2 text-secondaryColor text-sm">Open the pages to a world of free reads!</p>
                </div>
                <div className='w-9 h-9 mt-5'>
                   <img src={Dot}/>
                </div>
            </section>
        </main>
    );
};

export default SignUp;
