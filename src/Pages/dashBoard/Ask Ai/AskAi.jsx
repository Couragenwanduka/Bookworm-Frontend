import { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { io } from 'socket.io-client';
import message from '../../../Images/Icons/message-question.svg'
import sideArrow from '../../../Images/Icons/Frame.svg'
const base = 'http://localhost:8000';

const AskAi = () => {
    const [inputValue, setInputValue] = useState('');
    const [newSocket, setNewSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = io(base);
        setNewSocket(socket);

        socket.on('connect', () => {
            socket.emit('message', 'Hello from client');
        });

        socket.on('chat message', (message) => {
            addMessage({ text: message, type: 'answer' });
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const addMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            addMessage({ text: inputValue, type: 'question' });
            newSocket.emit('chat message', inputValue);
            setInputValue('');
        }
    };

    const formatMessage = (message) => {
        // Ensure message is a valid string before processing
        if (typeof message !== 'string') {
          return ''; // Return an empty string or a fallback message if it's null or not a string
        }
      
        return message.replace(/\*/g, '<strong><br></strong>'); // Replace **text** with <strong>text</strong>
      };
      

    return (
        <div className='bg-white bg-opacity-10 h-screen rounded-xl mb-40 mt-4 '>
            <div className='flex border-b border-white border-opacity-40 justify-center items-center'>
                <span className='flex-1 flex mt-3 ml-5'>
                    <img src={message} className='h-5 w-5' alt='icon' />
                    <p className='text-sm text-white ml-2'>Ask AI</p>
                </span>
                <span className='flex-2 flex mr-10 mt-3 mb-2'>
                    <img src={sideArrow} className='w-4 h-4 mt-2' alt='icon' />
                    <p className='ml-5 h-4 w-4 text-white text-opacity-40 font-thin text-lg cursor-pointer'>X</p>
                </span>
            </div>
            <div className='flex flex-col items-start mt-4 ml-4 overflow-y-scroll max-h-96'>
                    {messages.map((message, index) => (
                        <div
                        key={index}
                        className={`mb-2 flex ${message.type === 'question' ? 'justify-start' : 'justify-end'} w-full`}
                        >
                        <p
                            className={`rounded-lg p-3 max-w-xs ${message.type === 'question' ? 'bg-white bg-opacity-40 text-white' : 'bg-white bg-opacity-70 text-black mr-3'} font-inter`}
                            dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                        >
                            {/* {message.text} */}
                          
                        </p>
                        </div>
                    ))}
                    </div>

            <form className='mt-4 ml-4 ' onSubmit={sendMessage}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder='Ask for anything ...'
                    onChange={(e) => setInputValue(e.target.value)}
                    className='w-11/12 h-12 bg-transparent border border-white border-opacity-30 rounded-md p-3 focus:outline-none relative text-white'
                />
                <button type="submit" className=' -ml-10  relative bg-white bg-opacity-10 h-9 pb-3 pt-2 w-8 rounded-md '>
                    <FaArrowUp className='ml-2 cursor-pointer text-white' />
                </button>
            </form>
        </div>
    );
}

export default AskAi;
