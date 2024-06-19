const SideBar = () => {
    return (
      <aside className="bg-div3Color flex flex-col w-40 h-full mb-10 text-sm text-inter ">
        <div className="mt-10 ml-5 mb-20">
          <img src="src\assets\Frame 63.png" className="w-24" />
        </div>
        <div className="flex-1">
          <div className="flex ml-5">
            <span>
              <img src="src\assets\noun-dashboard-6699902 (1) 1.png" className="w-5" />
            </span>
            <span className="text-customTextColor ml-2">
              <button>
                DashBoard
              </button>
            </span>
          </div>
          <div className="flex ml-5 mt-10">
            <span>
              <img src="src\assets\noun-explore-2232152 1.png" className="w-5" />
            </span>
            <span className="text-customTextColor ml-2">
              <button>
                Explore
              </button>
            </span>
          </div>
          <div className="flex ml-5 mt-10">
            <span>
              <img src="src\assets\book.png" className="w-5" />
            </span>
            <span className="text-customTextColor ml-2">
              <button>
                Bookshelf
              </button>
            </span>
          </div>
          <div className="flex ml-5 mt-10">
            <span>
              <img src="src\assets\save-2.png"  className="w-5"/>
            </span>
            <span className="text-customTextColor ml-2">
              <button>
                About
              </button>
            </span>
          </div>
          <div className="flex ml-5 mt-10">
            <span>
              <img src="src\assets\setting.png" className="w-5" />
            </span>
            <span className="text-customTextColor ml-2">
              <button>
                Settings
              </button>
            </span>
          </div>
        </div>
        <div className="flex-1 ml-5 mt-20 flex mb-10">
          <span>
            <img src="src\assets\logout.png" className="w-5" />
          </span>
          <span className="text-customTextColor ml-2">
            <button>
              Logout
            </button>
          </span>
        </div>
      </aside>
    );
  };
  
  export default SideBar;
  