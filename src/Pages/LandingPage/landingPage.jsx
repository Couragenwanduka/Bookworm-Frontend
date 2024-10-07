import Logo from '../../Images/Icons/Logo.svg';
import HeroPage from '../../Images/assets/HeroPage.svg';
import BodyText from '../../components/Text/BodyText';
import CardDiv from '../../components/Cards/div.jsx';
import Ebook from '../../Images/Icons/Ebook.svg'
import Book from '../../Images/Icons/Book.svg'
import Note from '../../Images/Icons/Note.svg'
import Ai from  '../../Images/Icons/Ai.svg'
import Query from '../../Images/Icons/Query.svg'
import Qiuz from '../../Images/Icons/Quiz.svg'
import Laptop from '../../Images/Icons/Laptop.svg'
import ResponsiveSlider from './slider.jsx';
import About1 from '../../Images/assets/About1.png'
import About2 from '../../Images/assets/About2.png'
import LogoGrey from '../../Images/Icons/LogoGrey.svg'
import social from '../../Images/Icons/socials.svg'
import { useNavigate } from 'react-router-dom'



const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <main className="bg-primaryColor">

              <section className=' w-full md:h-38 h-20'>
                   <div className=' w-full  flex justify-between items-center md:p-10 pt-5 pb-5 pl-2 pr-2  fixed bg-primaryColor z-10'>
                        <div className='ml-3'>
                                <img src={Logo}/>
                            </div>
                            <div className='gap-10 font-inter text-white text-[14px] cursor-pointer hidden md:flex'>
                                <h1 className='border-b-2 border-transparent hover:border-secondaryColor'>Features</h1>
                                <h1 className='border-b-2 border-transparent hover:border-secondaryColor'>About Us</h1>
                                <h1 className='border-b-2 border-transparent hover:border-secondaryColor'>Contact</h1>
                            </div>
                            <div className=' flex gap-10 font-inter text-[14px]'>
                                <button className='bg-secondaryColor pl-3 pr-3 pt-1 pb-1 rounded-md' onClick={()=>{navigate('/signup')}}>Sign Up</button>
                                <button className='bg-transparent border border-secondaryColor pl-3 pr-3 pt-1 pb-1 rounded-md text-secondaryColor'  onClick={()=>{navigate('/signin')}}>Log In</button>
                            </div>
                   </div>
              </section>

              <section className='w-full h-full bg-[#27373A] flex flex-col md:flex-row p-4'>
                <div className='h-full md:w-[50%] font-inter flex flex-col justify-center md:p-10 '>
                    <h1 className='md:text-5xl text-4xl text-white font-semibold'>Ignite your learning </h1>
                    <h1 className='md:text-5xl text-4xl text-white font-semibold'>journey with Bookworm</h1>
                    <BodyText className={'  mt-5 break-words md:w-8/12'} content={'Immerse yourself in a world of literature like never before with our cutting-edge online eBook reader. Discover thousands of titles spanning genres, from timeless classics to the latest bestsellers, all at your fingertips.'}/>
                    <button className='w-32 h-11 rounded-md mt-5 bg-secondaryColor'>Get Started</button>
                </div>
                <div className='h-full md:w-[50%]'>
                    <img src={HeroPage} alt='hero-page' className='w-[75%] ml-[8%] h-full'/>
                </div>
              </section>

              <section className='flex flex-col md:p-10 p-5 w-full h-full'>
                    <h1 className='text-center font-inter text-white md:text-[20px] text-[14px] '>Access Free Ebooks, Organize Study Materials, and Master Your Subjects with AI-Powered Tools</h1>

                    <div className=' md:grid-rows-4 lg:grid-cols-3 md:grid-cols-2 gap-10  mt-[4%] lg:ml-4 hidden md:grid '>
                        <CardDiv image={Ebook} headerText={'Free Ebook Library'} text={'Access a vast collection of free ebooks from reputable online repositories.'}/>
                        <CardDiv image={Book} headerText={' Bookshelf Organization'} text={'Create custom categories and organize ebooks for easy access and management. accessible location.'}/>
                        <CardDiv image={Note} headerText={'Notetaking and Annotation'} text={'Take notes, highlight text, and annotate ebooks directly within the app.'}/>
                        <CardDiv image={Ai} headerText={'AI-powered Summarization'} text={'Get concise summaries of ebooks to aid comprehension and time management.'}/>
                        <CardDiv image={Query} headerText={'Book Query'} text={'Quickly find specific information within ebooks using AI-powered search functionality.'}/>
                        <CardDiv image={Qiuz} headerText={'Custom Quiz Creation'} text={'Generate quizzes based on ebook content to test understanding and prepare for exams.'}/>
                          
                    </div>
                    <div className=' gap-10  mt-[4%] lg:ml-4  md:hidden flex flex-col items-center '>
                        <CardDiv image={Ebook} headerText={'Free Ebook Library'} text={'Access a vast collection of free ebooks from reputable online repositories.'}/>
                        <CardDiv image={Book} headerText={' Bookshelf Organization'} text={'Create custom categories and organize ebooks for easy access and management. accessible location.'}/>
                        <CardDiv image={Note} headerText={'Notetaking and Annotation'} text={'Take notes, highlight text, and annotate ebooks directly within the app.'}/>
                        <CardDiv image={Ai} headerText={'AI-powered Summarization'} text={'Get concise summaries of ebooks to aid comprehension and time management.'}/>
                        <CardDiv image={Query} headerText={'Book Query'} text={'Quickly find specific information within ebooks using AI-powered search functionality.'}/>
                        <CardDiv image={Qiuz} headerText={'Custom Quiz Creation'} text={'Generate quizzes based on ebook content to test understanding and prepare for exams.'}/>
                          
                    </div>
              </section>

              <section className='w-full h-full relative md:-mt-[30%] md:bg-primaryColor bg-[#653F00] '>
                <div className='md:-top-24 top-72 absolute  bg-[#653F00] md:bg-transparent'>
                     <img src={Laptop}/>
                </div>
                <div className='bg-[#653F00] w-full md:h-80  text-center flex flex-col justify-center items-center text-white font-inter pb-10 md:pb-0'>
                   <div className='md:ml-[35rem] mt-2 md:mt-0'>
                        <div>
                                <div className='text-left'>
                                <h1 className='text-2xl font-medium'>Unlock your </h1>
                                <h1 className='text-2xl font-medium'> full study potential</h1>
                            </div>
                            <ul className="text-white text-opacity-65 text-[14px] mt-5">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Browse the Ebook Library
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Organize Your Bookshelf
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Take Notes and Annotate
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Access AI-Powered Tools
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Ace Your Exams with Custom Quizzes
                                </li>
                            </ul>
                            <div className='flex items-center w-52'>
                                <button className='w-32 h-11 rounded-md mt-5 bg-secondaryColor text-black items-start' >Get Started</button>
                            </div>
                            </div>
                   </div>
                </div>
              </section>
              <section className='bg-primaryColor mt-60 h-full w-full hidden md:block'>
                 <ResponsiveSlider/>
              </section>

              <section>
                <div className='grid md:grid-cols-2 gap-2 md:gap-0 w-full h-full md:p-14 p-4 bg-[#27373A] md:mt-20 mt-72'>
                    <div className='flex flex-col gap-7 font-inter md:w-[90%] w-full justify-center'>
                         <h1 className='text-white text-[20px]'> About Us </h1>
                        <BodyText  content={"At Bookworm, we are passionate about revolutionizing the way students learn and study. Founded by Sophia Abubakar, a dedicated educator with a vision for leveraging technology to enhance education, Bookworm is the culmination of years of research and development aimed at addressing the challenges students face in managing their study resources effectively."}/>
                        <BodyText className={'md:hidden lg:block'} content={"Our team comprises experienced developers, designers, and educators who share a common goal: to empower students of all ages and disciplines to excel academically. We understand the struggles students encounter when trying to juggle multiple textbooks, notes, and study materials. That's why we've created Bookworm - your all-in-one study buddy designed to streamline your study process and maximize your learning potential."}/>
                    </div>
                    <div>
                        <img src={About1} alt='about1' className='w-[90%]'/>
                        
                    </div>
                    <div>
                        <img src={About2} alt='about2' className='w-[90%] mt-5'/>
                    </div>
                    <div className='flex flex-col gap-7 font-inter md:w-[90%] justify-center'>
                        <h1 className='text-white text-[20px]'>Our Mission</h1>
                        <BodyText content={"Bookworm's mission is simple yet powerful: to provide students with a comprehensive and user-friendly platform that simplifies the study experience and fosters academic success. We believe that every student deserves access to high-quality educational resources and tools that facilitate learning and comprehension."}/>
                         <BodyText className={'md:hidden lg:block'} content={"Our commitment to excellence is reflected in every aspect of our platform, from the intuitive user interface to the cutting-edge AI-powered features. We strive to stay at the forefront of technological innovation, continuously improving and expanding Bookworm's capabilities to meet the evolving needs of students worldwide."}/>
                    </div>

                </div>
              </section>
              

            <section className='mt-20 md:flex w-full h-full bg-[#192E31] md:p-10 '>
                <div className='md:w-[50%] h-full mt-6'>
                    <h1 className='text-white text-xl font-inter ml-6 md:ml-0'>Why Choose Bookworm:</h1>
                    <ul className='flex flex-col gap-5 mt-5 text-white  ml-6 md:ml-0'>
                        <l1 className="flex items-start">
                            <span className="mr-2">•</span>
                            <BodyText className={'break-words w-[90%]'} content={"Comprehensive Study Solutions: Whether you're looking for free ebooks, tools for organizing study materials, or AI-powered assistance with summarization and quiz creation, Bookworm has you covered."}/>
                        </l1>
                        <l1 className="flex items-start">
                            <span className="mr-2">•</span>
                            <BodyText className={'break-words w-[90%]'} content={"Personalized Learning Experience: We understand that every student learns differently. That's why Bookworm offers customizable features that adapt to your unique learning style and preferences."}/>
                        </l1>
                        <l1 className="flex items-start">
                            <span className="mr-2">•</span>
                            <BodyText  className={'break-words w-[90%]'} content={"Trusted by Students and Educators: Bookworm has earned rave reviews from students, educators, and educational institutions alike. Join the thousands of users who have already transformed their study routine with Bookworm."}/>
                        </l1>
                    </ul>
                </div>
                <div className='bg-[#101B11] flex flex-col rounded-lg md:w-[50%] h-full  w-full'>
                    <h1 className='text-white text-xl font-inter mt-6 ml-6'>Join the Bookworm Community:</h1>
                    <div className='mt-10 ml-6 flex flex-col gap-5'>
                        <BodyText className={'md:break-words md:w-[90%]'} content={"Ready to take your study routine to the next level? Join the Bookworm community today and embark on a journey of academic excellence. Whether you're a high school student preparing for exams or a college student tackling complex course materials or just a book lover, Bookworm is here to support you every step of the way."}/>
                        <BodyText  className={'break-words w-[90%]'} content={"Together, let's unlock the power of knowledge and unleash your full potential with Bookworm."}/>
                    </div>
                    <button className='bg-secondaryColor w-32 h-10 ml-6 mt-6 rounded-md mb-6'>Sign In</button>
                </div>
            </section>

            <section className='bg-[#0E100E] text-white font-inter text-opacity-45'>
                <div className='md:flex justify-between p-10 '>
                    <div className='flex flex-col gap-2'>
                        <img src={LogoGrey} alt='footer' className='w-full'/>
                        <img src={social} alt='social' className='w-20 h-20'/>
                    </div>
                    <div className='md:flex  gap-60 mr-2'> 
                        <div className='flex flex-col gap-2'>
                            <h1>contact@bookwormapp.com</h1>
                            <p>234-709-892-1741</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1>Privacy Policy</h1>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>
                <div className='text-center pb-10'>
                © 2024 Bookworm. All rights reserved
                </div>
            </section>
        </main>
    )
}

export default LandingPage;