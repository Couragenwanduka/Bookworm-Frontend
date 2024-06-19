const ForgotPassword = () => {
  

  return (
    <div className="flex">
      <div className="bg-teal-950 flex-1 h-custom-h3 p-10">
        <img src="src\assets\Frame 63.png" alt="Frame" className="mt-10" />
        <h1 className="text-white text-xl font-normal font-inter mt-10">Forgot password?</h1>
        <p className="text-customTextColor text-sm mt-10">No worries, we’ll send you reset information</p>
        <form className="mt-20 space-y-4 ">
          <div className="flex items-center border-b border-borderColor py-3 rounded mb-10">
            <input
              type="email"
              placeholder="Enter your email address"
              className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
              aria-label="Email"
            />
          </div>
          <button className="w-full bg-customYellow text-black py-2 rounded mt-20 font-bold" >Reset password</button>
          <p className="ml-40 text-customYellow font-normal text-l mt-20 ">Open the pages to a world of free reads!</p>
        </form>
      </div>
      <div className="hidden lg:flex lg:flex-1 bg-div3Color">
        <div>
          <img src="src\assets\yy.png" className=" ml-28 w-96 mt-5" alt="Ellipse" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
