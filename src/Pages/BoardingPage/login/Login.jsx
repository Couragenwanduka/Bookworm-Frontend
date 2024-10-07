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
import Logo from '../../../Images/Icons/Logo.svg';
import Dot from '../../../Images/Icons/Dot.svg';
import Reading from '../../../Images/assets/Reading2.png';
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [user, setUser] = useState('');
  const {  setUserDetails } = useUser(); 
  const navigate = useNavigate();
  
  

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
    <main className="flex h-full font-inter">
      <section className="bg-primaryColor flex-1 h-custom-h3 p-10 h-screen ">
      <img src={Logo} alt="Frame"  onClick={()=>{navigate('/')}} className='cursor-pointer'/>
        <h1 className="text-white text-xl font-normal font-inter mt-10">Login Into your Account</h1>
        <p className="text-white text-opacity-50 text-sm mt-2">Welcome back! Choose a preferred login method</p>
        <button className="flex items-center justify-center p-3 mt-4 bg-transparent border-secondaryColor border w-full text-secondaryColor rounded mb-5">
          <FcGoogle className="mr-2" /> Sign up with Google
        </button>
        <p className="mt-3 text-white text-opacity-30" id="or">Or</p>
        <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
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

          <div className="flex justify-between font-inter font-thin">
            <div className="text-customYellow flex justify-center items-center gap-3 text-secondaryColor">
            <input 
              type="checkbox" 
              className="w-5 h-5 appearance-none bg-transparent checked:bg-transparent border-2 border-secondaryColor rounded checked:before:content-['✔'] checked:before:text-secondaryColor checked:before:text-[10px] checked:before:flex checked:before:justify-center checked:before:items-center" 
            /> Remember me

            </div>
            <div className="flex text-secondaryColor">
              <button>Forgot password</button>
            </div>
          </div>

          <button className="w-full bg-secondaryColor text-black py-2 rounded mt-4 ">Login</button>
          <p className="lg:ml-40 text-white font-normal cursor-pointer" onClick={()=>{navigate('/signup')}}>Create an account? <span className="text-secondaryColor">Signup</span></p>
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

export default Login;
