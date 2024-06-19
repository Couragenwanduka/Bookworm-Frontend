import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getText, getChapter } from '../dashBoard/dashboards';
import { SaveBookToLocalStorage } from '../../hooks/book.hook';

const ReadBook = () => {
    const [text, setText] = useState('');
    const [chapters, setChapters] = useState([]);
    const { bookDetails } = SaveBookToLocalStorage();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleGetText = async () => {
            setIsLoading(true);
            try {
                if (bookDetails) {
                    const response = await getText(bookDetails.formats['text/html']);
                    setText(response.text);
                    handleGetChapter(response.text); // Move this here to call after setting text
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookDetails]);

    const handleGetChapter = (text) => {
        const chapter = getChapter(text);
        setChapters(chapter);
    }

    return (
        <div className='bg-teal-950'>
            <div className=' flex border-b border-customTextColor h-20 w-full'>
                <img src={'src/assets/Frame 63.png'} alt="Frame" className='mt-5 m-10 h-10'/>
                <p className='mt-7 ml-28 text-white text-xl font-inter text-warp inline-block w-3/5 truncate '>{bookDetails?.title}</p>
                <Link to={'/dashboard'}>
                <p className='ml-32 mt-7 text-white text-xl cursor-pointer '>X</p>
                </Link>
            </div>
            <div className='flex'>
                <div className='w-60 h-full bg-div3Color'>
                     <p className='text-white ml-16 mt-10 text-base font-normal font-inter mb-5'> Table of content</p>
                    {chapters.map((chapter, index) => (
                        <div key={index} className='flex flex-col mt-4'>
                            <h3 className='ml-5 text-customTextColor text-lg font-extrabold'>Chapter {chapter.chapterNumber}</h3>
                            <p className='text-warp inline-block w-52 ml-5 text-xs font-normal text-customTextColor mt-5'>{chapter.first50Letters}</p>
                        </div>
                    ))}
                </div>
                <div className='w-3/4 text-warp inline-block w-9/12 ml-10 mt-10 overflow-hidden'>
                    {isLoading ? (
                        <div className="col-span-5 h-screen ml-96 mt-40"><img src={'src/assets/Spinner@1x-1.0s-200px-200px (2).svg'} alt="Loading spinner" /></div>
                    ) : (
                        <p className='text-bookColor'>{text}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ReadBook;
