const RestPassword= () => {
  

    return (
      <div className="flex">
        <div className="bg-teal-950 flex-1 h-custom-h3 p-12">
          <img src="src\assets\Frame 63.png" alt="Frame" className="mt-1" />
          <h1 className="text-white text-xl font-normal font-inter mt-10">Forgot password?</h1>
          <p className="text-customTextColor text-sm mt-10">We sent a code to {}</p>
          <form className="mt-10 space-y-4 ">
            <div className="flex items-center border-b border-borderColor py-2 rounded mb-5">
              <input
                type="password"
                placeholder="Enter Password"
                className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
                aria-label="Password"
              />
            </div>
            <div className="flex items-center border-b border-borderColor py-2 rounded mb-5">
              <input
                type="password"
                placeholder="Confirm Password"
                className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
                aria-label="Confirm Password"
              />
            </div>
            <button className="w-full bg-customYellow text-black py-2 rounded mt-20 font-bold" >Reset Password</button>
            <div className=" flex border border-customYellow items-center ">
                <span className="ml-52">
                <img src="src\assets\arrow-left.png" />
                </span>
                <span className="ml-5">
                <button className="w-full  text-black py-2 rounded  font-bold" >Back to Login</button>
                </span>
            </div>
            <p className="ml-40 text-customYellow font-normal text-l mt-20 "> Open the pages to a world of free reads!</p>
          </form>
        </div>
        <div className="hidden lg:flex lg:flex-1 bg-div3Color">
          <div>
            <img src="src\assets\cc.png" className=" ml-28 w-96 mt-5" alt="Ellipse" />
          </div>
        </div>
      </div>
    );
  };
  
  export default RestPassword;
  