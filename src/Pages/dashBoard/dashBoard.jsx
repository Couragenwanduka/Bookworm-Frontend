/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DraggableBook from './dragable';
import { DndProvider } from 'react-dnd';
import EditModal from "./editModel.jsx";
import DroppableArea from "./dropable.jsx";
import { saveBook } from './dashboards.js';
import { getSavedBook } from './dashboards.js';
import { useUser } from '../../hooks/action.jsx';
import NavBar from "../../components/nav/navBar";
import { getBookFunction } from './dashboards.js';
import { MdModeEditOutline } from "react-icons/md";
import { HTML5Backend } from 'react-dnd-html5-backend';
import SideBar from "../../components/sideBar/sideBar";

const DashBoard = () => {
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("popular");
  const [divContents, setDivContents] = useState([]);
  const [groupedBooks, setGroupedBooks] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categorys, setCategory] = useState([]);
  const { userDetails } = useUser(); 
  const id = userDetails._id

  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Novels", value: "novels" },
    { label: "Science", value: "science" },
    { label: "Wiki", value: "wiki" },
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Tech", value: "tech" },
    { label: "Fashion", value: "fashion" }
  ];

  const fetchBooksByCategory = async (category) => {
    try {
      setLoading(true);
      const books = await getBookFunction(category);
      setBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSavedBooks = async () => {
    try {
      setLoading(true);
      const books = await getSavedBook(id);
      setSavedBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleCategoryDivision =  () => {
    try {
      // Initialize an object to hold the grouped categories
      const categoryGroups = {};
  
      // Iterate over each saved book to populate the categoryGroups object
      savedBooks.forEach((book) => {
        const category = book.category.trim(); // Trim any whitespace
        if (!categoryGroups[category]) {
          categoryGroups[category] = []; // Initialize an array for each category
        }
        categoryGroups[category].push(book); 
      });
      return categoryGroups;
    } catch (error) {
      console.log('Error dividing category:', error);
    }
  };

  useEffect(() => {
    fetchBooksByCategory(activeCategory);
  }, [activeCategory,]);
 
  useEffect(() => {
    fetchSavedBooks();
    if (userDetails) {
      const groupBooks = () => {
        const grouped = handleCategoryDivision();
        setGroupedBooks(grouped);
      };
      groupBooks();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);

  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleDrop = async (item) => {
    try {
       await saveBook(item,id)
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const addDiv = () => {
    const newContent = `Div ${divContents.length + 1}`;
    setDivContents([...divContents, newContent]);
  };

  const handleCategoryClick = (category) => {
    const booksInCategory = savedBooks.filter(book => book.category === category);
    const ids = booksInCategory.map(book => book._id);
    
    setCategory(ids);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-teal-950 overflow-clip h-screen">
        <SideBar />
        <NavBar />
        <div className="flex ml-44 ">
          <div className="flex flex-col  overflow-y-auto h-screen w-full">
            <div className="bg-customDivColor flex justify-evenly rounded-xl w-full">
              <span className="flex flex-col mr05">
                <h1 className="text-white text-3xl text-warp inline-block w-60 font-inter mt-10  font-normal">
                  Read free library Ebooks online
                </h1>
                <p className="text-customTextColor text-warp inline-block w-60  text-sm mt-2">
                  Discover and read any book you can possibly think of!
                </p>
                <button className="bg-customYellow mt-5 w-20  rounded-md text-base font-semibold py-2 mb-5">
                  Explore
                </button>
              </span>
              <span>
                <img src="src/assets/Group 1.png" alt="Illustration" className="w-60 mt-10 ml-20 mb-10 " />
              </span>
            </div>
            <div className="mt-10">
              <h1 className="text-white text-xl font-inter">Categories</h1>
              <span className="flex justify-evenly mt-5 ml-custom-for-button font-inter text-base font-semibold w-full text-textColor ">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    className={` w-20 p-2 rounded-xl ${activeCategory === category.value ? 'bg-customYellow text-black' : ''} `}
                    onClick={() => handleCategoryChange(category.value)}
                  >
                    {category.label}
                  </button>
                ))}
              </span>
              <div className="grid grid-cols-4 gap-5 mt-6 w-full ">
                {loading && <div className="col-span-3 "><img src="src/assets/Spinner@1x-1.0s-200px-200px (2).svg" className="" /></div>}
                {!loading && books.map((book) => (
                  <DraggableBook key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col  ml-0 mt-0 overflow-y-scroll h-screen p-4 w-2/4">
            <div className="flex">
              <span className="bg-customDivColor w-30 items-center rounded-md">
                <img src="src/assets/Group 3.png" alt="Books Read Icon" className="ml-5 mt-3" />
                <p className="ml-5 text-customTextColor text-lg mr-5">Books Read</p>
                <p className="mt-5 ml-5 text-white text-4xl font-inter">0</p>
              </span>
              <span className="bg-customDivColor w-30 items-center rounded-md ml-3">
                <img src="src/assets/Group 4.png" alt="Books Saved Icon" className="ml-5 mt-3" />
                <p className="ml-5 text-customTextColor text-lg mr-5">Books Saved</p>
                <p className="mt-5 ml-5 text-white text-4xl font-inter mb-3">{savedBooks.length}</p>
              </span>
            </div>
            <div>
              <span className="flex mt-5">
                <h1 className="text-white mr-10 font-normal text-2xl text-semibold ">My BookShelf</h1>
                <button className="text-2xl text-white font-inter mt-1 mb-0" onClick={addDiv}>{String.fromCharCode(0x002B)}</button>
              </span>
              <div  className=" rounded bg-div4Color h-full w-10/12 pt-3.5 pl-1">
        {divContents.map((content, index) => (
          <div key={index} className="ml-3">
            {/* {content} */}
            <DroppableArea onDrop={handleDrop} className='mt-4'/>
            <span className="relative group">
         <button className="hidden group-hover:flex absolute  left-32">
          <MdModeEditOutline className="text-sm text-customYellow" />
         </button>
         <p className=" p-1 bg-div5Color w-32 text-textColor2 text-sm font-inter font-semibold">New Bookshelf</p>
        </span>
          </div>
          
        ))}
       <div className="flex flex-col w-10/12">
     <div className="flex flex-col w-full ml-3 mb-12">
  {Object.keys(groupedBooks).map((category) => (
    <div key={category} className="flex flex-col">
      <DroppableArea onDrop={handleDrop} />
      <div className="flex overflow-x-auto w-64 ">
        {groupedBooks[category].map((book) => (
          <div key={book._id} className="flex-shrink-0 w-10">
            <img
              src={book.image}
              alt={book.title}
              className="w-20 h-32 border-4 border-borderColor3"
            />
          </div>
        ))}
      </div>
      <span className="relative group">
         <button className="hidden group-hover:flex absolute  ml-28 mt-1"  onClick={() => handleCategoryClick(category)}>
         <MdModeEditOutline className="text-sm text-customYellow" />
         </button>
         <p className="p-1 bg-div5Color w-32 text-textColor2 text-sm font-inter font-semibold">
      {category}
       </p>
       <EditModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        category={categorys}
      />
        </span>
    </div>
  ))}
</div>
      </div>
      <span>
      </span>
      </div>        
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};



export default DashBoard;
