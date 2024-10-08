/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DraggableBook from './dragable.jsx';
import { DndProvider } from 'react-dnd';
import EditModal from "./editModel.jsx";
import DroppableArea from "./dropable.jsx";
import { saveBook } from './dashboards.js';
import { getSavedBook } from './dashboards.js';
import { useUser } from '../../hooks/action.jsx';
import NavBar from "../../components/nav/navBar.jsx";
import { getBookFunction } from './dashboards.js';
import { MdModeEditOutline } from "react-icons/md";
import { HTML5Backend } from 'react-dnd-html5-backend';
import SideBar from "../../components/sideBar/sideBar.jsx";
import dashboardImage from "../../Images/assets/dashboardImage.svg";
import ReadBook from "../../Images/Icons/ReadBook.svg";
import savedBook from "../../Images/Icons/savedBook.svg";
import Loading from "../../components/Animation/Loading.jsx";
import LoadingAnimation from "../../Images/assets/Loading.json"

const DashBoard = () => {
  const { userDetails } = useUser(); 
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingBook, setLoadingBook] = useState(true);
  const [categorys, setCategory] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  const [divContents, setDivContents] = useState([]);
  const [groupedBooks, setGroupedBooks] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("popular");
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
      setLoadingBook(true);
      const books = await getBookFunction(category);
      setBooks(books);
      setLoadingBook(false);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoadingBook(false);
    }
  };

  const fetchSavedBooks = async () => {
    try {
      setLoading(true);
      const books = await getSavedBook(id);
      setSavedBooks(books);
      setLoading(false);
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
      <div className="bg-primaryColor overflow-hidden h-screen flex ">
        <SideBar  className={'w-[16%]'}/>
        <section className="w-[86%]">
            <NavBar />
            <div className="flex ml-10 h-screen">
              <div className="flex flex-col  overflow-y-auto h-screen w-[70%]">

                <div className="bg-[#27373A] flex  justify-evenly rounded-xl w-full">
                  <span className="flex flex-col ">
                    <h1 className="text-white text-4xl text-warp inline-block w-72 font-inter mt-10  font-normal">
                      Read free library Ebooks online
                    </h1>
                    <p className="text-white text-opacity-30 text-warp inline-block w-60  text-sm mt-2">
                      Discover and read any book you can possibly think of!
                    </p>
                    <button className="bg-secondaryColor mt-5 w-20  rounded-md text-base  py-2 mb-5">
                      Explore
                    </button>
                  </span>
                  <span>
                    <img src={dashboardImage} alt="Illustration" className="w-60 mt-10 ml-20 mb-10 " />
                  </span>
                </div>

                <div className="mt-10 mb-40">
                  <h1 className="text-white text-3xl font-inter">Categories</h1>
                  <span className="flex gap-20 mt-5 font-inter text-base font-semibold w-full text-textColor ">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        className={` w-20 p-2 rounded-lg  ${activeCategory === category.value ? 'bg-secondaryColor text-black' : 'text-white text-opacity-40'} `}
                        onClick={() => handleCategoryChange(category.value)}
                      >
                        {category.label}
                      </button>
                    ))}
                  </span>
                  <div className="grid grid-cols-5 gap-5 mt-10 w-full ">
                    {loadingBook && <div className="col-span-3 "><Loading animation={LoadingAnimation}/></div>}
                    {!loadingBook && books.map((book) => (
                      <DraggableBook key={book.id} book={book} />
                    ))}
                  </div>
                </div>
              </div>


              <div className="flex flex-col  -mt-4 overflow-y-scroll h-screen p-4 w-[30%]">
                <div className="flex w-[90%]">
                  <span className="bg-[#27373A]  w-[50%] items-center rounded-xl">
                    <img src={ReadBook} alt="Books Read Icon" className="ml-5 mt-3" />
                    <p className="ml-5 text-white text-opacity-35 text-lg mr-5">Books Read</p>
                    <p className="mt-5 ml-5 text-white text-4xl font-inter">0</p>
                  </span>
                  <span className="bg-[#27373A]  w-[50%] items-center rounded-xl ml-3">
                    <img src={savedBook} alt="Books Saved Icon" className="ml-5 mt-3" />
                    <p className="ml-5 text-white text-opacity-35 text-lg mr-5">Books Saved</p>
                    <p className="mt-5 ml-5 text-white text-4xl font-inter mb-3">{savedBooks.length}</p>
                  </span>
                </div>
                <div className="h-full mb-20">
                  <span className="flex mt-5">
                    <h1 className="text-white mr-10 font-normal text-2xl text-semibold ">My BookShelf</h1>
                    <button className="text-2xl text-white font-inter mt-1 mb-0" onClick={addDiv}>{String.fromCharCode(0x002B)}</button>
                  </span>
                  <div  className=" rounded bg-[#27373A] h-full w-[90%] pt-3.5 pl-1 pb-20">
            {divContents.map((content, index) => (
              <div key={index} className="ml-3">
                {/* {content} */}
                <DroppableArea onDrop={handleDrop} className='mt-4'/>
                <span className="relative group">
            <button className="hidden group-hover:flex absolute  left-32">
              <MdModeEditOutline className="text-sm text-secondaryColor" />
            </button>
            <p className=" p-1 bg-slate-800 w-32 text-textColor2 text-sm font-inter font-semibold">New Bookshelf</p>
            </span>
              </div>
              
            ))}
          <div className="flex flex-col w-10/12">
        <div className="flex flex-col w-full ml-3 mb-12">
      {Object.keys(groupedBooks).map((category) => (
        <div key={category} className="flex flex-col">
          <DroppableArea onDrop={handleDrop} />
          <div className="flex overflow-x-auto w-56 ">
            {groupedBooks[category].map((book) => (
              <div key={book._id} className="flex-shrink-0 w-10">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-20 h-32 border-4 border-[#55686B]"
                />
              </div>
            ))}
          </div>
          <span className="relative group flex items-start">
           <span className="flex justify-center items-center">
           <button className="hidden group-hover:flex absolute  ml-28 mt-1"  onClick={() => handleCategoryClick(category)}>
            <MdModeEditOutline className="text-sm text-[#655A3F]" />
            </button>
            <p className="p-1 bg-[#E0DEAD] w-32 text-[#655A3F] text-sm font-inter font-semibold">
          {category}
          </p>
           </span>
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
        </section>
        
      </div>
    </DndProvider>
  );
};



export default DashBoard;
