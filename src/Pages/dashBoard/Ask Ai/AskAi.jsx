import { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { io } from 'socket.io-client';
const base = 'http://localhost:7000';

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

    return (
        <div className='bg-aiDiv h-screen rounded-xl mb-40 mt-4 '>
            <div className='flex border-b border-customBOorderColor'>
                <span className='flex-1 flex mt-3 ml-5'>
                    <img src='src\assets\message-question.png' className='h-5 w-5' alt='icon' />
                    <p className='text-sm text-white ml-2'>Ask AI</p>
                </span>
                <span className='flex-2 flex mr-10 mt-3 mb-2'>
                    <img src='src\assets\Vector (2).png' className='w-4 h-4 mt-2' alt='icon' />
                    <p className='ml-5 h-4 w-4 text-customTextColor text-lg cursor-pointer'>X</p>
                </span>
            </div>
            <div className='flex flex-col items-start mt-4 ml-4 overflow-y-scroll max-h-96'>
                {messages.map((message, index) => (
                    <div key={index} className={`mb-2 ${message.type === 'question' ? 'text-left' : 'text-right'}`}>
                        <p className={`rounded-lg p-3 ${message.type === 'question' ? 'bg-bgAi text-white font-inter' : 'bg-serverBg text-white'}`}>
                            {message.text}
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
                    className='w-10/12 h-12 bg-transparent border border-customTextColor rounded-md p-3 outline-none relative text-white'
                />
                <button type="submit" className=' -ml-10  relative bg-arrowBgColor h-9 pb-3 pt-2 w-8 rounded-md '>
                    <FaArrowUp className='ml-2 cursor-pointer  ' />
                </button>
            </form>
        </div>
    );
}

export default AskAi;
