import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getText, getChapter } from '../dashBoard/dashboards';
import { SaveBookToLocalStorage } from '../../hooks/book.hook';


const ReadBook = () => {
    const [currentChapter, setCurrentChapter] = useState({ chapterNumber: 1, chapterContent: '', totalChapters: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const { bookDetails } = SaveBookToLocalStorage();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const handleGetText = async () => {
            setIsLoading(true);
            try {
                if (bookDetails) {
                    const response = await getText(bookDetails.formats['text/html']);
                    // setText(response.text);
                    handleGetChapter(response.text, currentPage); // Call getChapter after setting text
                }
            } catch (error) {
                console.error('Error fetching text:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (bookDetails) {
            handleGetText();
        }
    }, [bookDetails, currentPage]); // Add currentPage to dependency array

    const handleGetChapter = (text, currentPage) => {
        const chapter = getChapter(text, currentPage);
        setCurrentChapter(chapter);
    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div className='bg-teal-950 fixed'>
            <div className='flex border-b border-customTextColor h-20 w-full'>
                <img src={'src/assets/Frame 63.png'} alt="Frame" className='mt-5 m-10 h-10'/>
                <p className='mt-7 ml-10 text-white text-xl font-inter text-warp inline-block w-2/4 truncate'>{bookDetails?.title}</p>
                <Link to={'/dashboard'}>
                    <p className='ml-28 mt-7 text-white text-xl cursor-pointer'>X</p>
                </Link>
            </div>
            <div className='flex'>
                {/* Table of Contents */}
                <div className='w-60 h-screen bg-div3Color'>
                    <p className='text-white ml-10 mt-10 text-base font-normal font-inter mb-5'>Table of Contents</p>
                    {[...Array(currentChapter.totalChapters).keys()].map(index => (
                        <div key={index} className='flex flex-col mt-4'>
                            <h3 className='ml-10 text-customTextColor text-lg font-extrabold'>Chapter {index + 1}</h3>
                        </div>
                    ))}
                </div>
                {/* Main content area for chapter content */}
                <div className='w-3/4 text-warp inline-block w-7/12  mt-1  overflow-y-auto h-screen '>
                    {isLoading ? (
                        <div className="col-span-5 h-screen ml-96 mt-40 w-screen">
                            <img src={'src/assets/Spinner@1x-1.0s-200px-200px (2).svg'} alt="Loading spinner" />
                        </div>
                    ) : (
                        <div className='ml-10'>
                            <p className='ml-96 mb-20 mt-10 text-white font-inter text-2xl font-normal'>{`Chapter ${currentChapter.chapterNumber}:`}</p>
                            <p className='text-warp inline-block w-11/12 ml-10 text-customTextColor text-lg font-inter '>{currentChapter.chapterContent}</p>
                        </div>
                    )}
                     {/* Pagination controls */}
                <div className=' mb-32 ml-96 mt-10'>
                        <button onClick={prevPage} disabled={currentPage === 1} className='bg-customYellow p-3 rounded font-inter font-semibold cursor-pointer'>Previous Chapter</button>
                        <button onClick={nextPage} disabled={currentPage === currentChapter.totalChapters} className=' border border-customYellow ml-3 p-3 font-inter font-semibold text-customYellow items-center rounded cursor-pointer'>Next Chapter</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ReadBook;
