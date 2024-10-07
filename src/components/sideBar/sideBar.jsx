import { useState } from 'react';
import Logo from '../../Images/Icons/Logo.svg';
import dashBoard from '../../Images/Icons/noun-dashboard-6699902 (1) 1.svg';
import explore from '../../Images/Icons/noun-explore-2232152 1.svg';
import book from '../../Images/Icons/bookicon.svg';
import notification from '../../Images/Icons/notification.svg';
import settings from '../../Images/Icons/setting.svg';
import logout from '../../Images/Icons/logout.svg';

const SideBar = ({className}) => {
  // State to track the active sidebar item
  const [activeItem, setActiveItem] = useState('Dashboard');

  // Function to handle the click event
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <aside className={`bg-[#243F46] flex flex-col  h-full mb-10 text-sm font-inter text-white ${className}`}>
      <div className="mt-10 ml-5 mb-20">
        <img src={Logo} className="w-24" />
      </div>
      <div className="flex-1">
        <div
          className={`flex items-center ml-5 mt-10 w-32 h-10 p-2 justify-start rounded-md ${
            activeItem === 'Dashboard' ? 'bg-secondaryColor text-black' : ''
          }`}
          onClick={() => handleItemClick('Dashboard')}
        >
          <img src={dashBoard} className="w-5" />
          <button className="text-customTextColor ml-2">DashBoard</button>
        </div>
        
        <div
          className={`flex items-center ml-5 mt-10 w-32 h-10 p-2 justify-start rounded-md ${
            activeItem === 'Explore' ? 'bg-secondaryColor text-black' : ''
          }`}
          onClick={() => handleItemClick('Explore')}
        >
          <img src={explore} className="w-5" />
          <button className="text-customTextColor ml-2">Explore</button>
        </div>
        
        <div
          className={`flex items-center ml-5 mt-10 w-32 h-10 p-2 justify-start rounded-md ${
            activeItem === 'Bookshelf' ? 'bg-secondaryColor text-black' : ''
          }`}
          onClick={() => handleItemClick('Bookshelf')}
        >
          <img src={book} className="w-5" />
          <button className="text-customTextColor ml-2">Bookshelf</button>
        </div>
        
        <div
          className={`flex items-center ml-5 mt-10 w-32 h-10 p-2 justify-start rounded-md ${
            activeItem === 'About' ? 'bg-secondaryColor text-black' : ''
          }`}
          onClick={() => handleItemClick('About')}
        >
          <img src={notification} className="w-5" />
          <button className="text-customTextColor ml-2">About</button>
        </div>
        
        <div
          className={`flex items-center ml-5 mt-10 w-32 h-10 p-2 justify-start rounded-md ${
            activeItem === 'Settings' ? 'bg-secondaryColor text-black' : ''
          }`}
          onClick={() => handleItemClick('Settings')}
        >
          <img src={settings} className="w-5" />
          <button className="text-customTextColor ml-2">Settings</button>
        </div>
      </div>
      
      <div className="flex-1 ml-5 mt-20 flex mb-10">
        <img src={logout} className="w-5" />
        <button
          className={`text-customTextColor ml-2 ${
            activeItem === 'Logout' ? 'font-bold' : ''
          }`}
          onClick={() => handleItemClick('Logout')}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
