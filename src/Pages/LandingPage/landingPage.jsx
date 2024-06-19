import ResponsiveSlider from "./slider";
import {Link} from 'react-router-dom'


const LandingPage=()=>{
    return(
        <>
        <div className="bg-teal-950 mx-auto">
        {/* The Header of the landing page */}
            <div className="flex ... py-8   sm:flex-row bg-teal-950 ">
                <div className="flex-1 ...  pl-10"><img src="src\assets\Frame 63.png"/></div>
                <nav className="flex-1 hidden lg:contents">
                    <ul className="flex ... text-white">
                        <li className="flex-1 ..."><a href="#">Feature</a></li>
                        <li className="flex-1 ... ml-10 w-40"><a href="#">About Us</a></li>
                        <li className="flex-1 ... ml-10"><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex-1 ... ml-20" id="btnDiv">
                    <Link to={'sign-up'}>
                    <button  id="signBtn">Sign Up</button>
                    </Link>
                    <Link to={'sign-in'}>
                    <button id="logBtn">Log In</button>
                    </Link>
                </div>
            </div>
            {/* The hero Section begins here */}
            <div className="flex h-2/5 " id="hero">
                <div>
                    <span className="text-wrap inline-block w-3/5 flex flex-col">
                        <h1 className="text-white pt-10 pl-20 text-3xl font-normal">Ignite your learning journey with Bookworm</h1>
                        <p className="text-white pt-10 pl-20" id="heroText">Immerse yourself in a world of literature like never before with our cutting-edge online eBook reader. 
                        Discover thousands of titles spanning genres, from timeless classics to the latest bestsellers, 
                        all at your fingertips.</p>
                    </span>
                    <span>
                        <button className="mt-10 mb-20 ml-20 bg-customYellow p-2 rounded px-5">Get Started</button>
                    </span>
                </div>
                <div className="mr-40 mt-10 mb-10">
                    <img src="src\assets\Frame 34691.png" className="w-custom-w2 h-custom-h2"/>
                </div>
            </div>
            {/* The about Section begins here */}
               <div className="flex flex-col ">
                <h1 className="text-center mt-20 mb-20 text-white font-inter font-normal">Access Free Ebooks, Organize Study Materials, and Master Your Subjects with AI-Powered Tools</h1>
                <div className="flex-col lg:flex  lg:flex-row">
                    <div className="bg-customDivColor ml-20 w-80 h-60 rounded-xl">
                        <span>
                            <img src="src\assets\Ellipse 22.png" className="w-20 ml-24 mt-5"/>
                        </span>
                        <p className="text-white text-center">Free Ebook Library</p>
                        <p className="text-warp inline-block w-4/5 ml-10 text-customTextColor">Access a vast collection of free ebooks from reputable online repositories.</p>
                    </div>
                    <div className="bg-customDivColor ml-20 w-80 h-60 rounded-xl">
                        <span>
                            <img src="src\assets\Ellipse 23.png" className="w-20 ml-24 mt-5"/>
                        </span>
                        <p className="text-white text-center">Bookshelf Organization</p>
                        <p className="text-warp inline-block w-4/5 ml-10 text-customTextColor">Create custom categories and organize ebooks for easy access and management.</p>
                    </div>
                    <div className="bg-customDivColor ml-20 w-80 h-60 rounded-xl">
                        <span>
                            <img src="src\assets\Ellipse 24.png" className="w-20 ml-24 mt-5"/>
                        </span>
                        <p className="text-white text-center">Note taking and Annotation</p>
                        <p  className="text-warp inline-block w-4/5 ml-10 text-customTextColor">Take notes, highlight text, and annotate ebooks directly within the app.</p>
                    </div>
                </div>
                <div className="flex  flex-col mt-10 lg:flex lg:flex-row">
                <div className="bg-customDivColor ml-20 w-80 h-60 rounded-xl">
                       <span>
                            <img src="src\assets\Ellipse 22 (1).png" className="w-20 ml-24 mt-5"/>
                        </span>
                        <p className="text-white text-center">AI-powered Summarization</p>
                        <p className="text-warp inline-block w-4/5 ml-10 text-customTextColor">Get concise summaries of ebooks to aid comprehension and time management.</p>
                    </div>
                    <div className="bg-customDivColor ml-20 w-80 h-60 rounded-xl mt-5 lg:mt-0">
                        <span>
                            <img src="src\assets\Ellipse 23 (1).png" className="w-20 ml-24 mt-5"/>
                        </span>
                        <p className="text-white text-center">Book Query</p>
                        <p className="text-warp inline-block w-4/5 ml-10 text-customTextColor">Quickly find specific information within ebooks using AI-powered search functionality.</p>
                    </div>
                    <div className="bg-customDivColor ml-20 w-80 h-60 rounded-xl mt-5 lg:mt-0">
                        <span>
                            <img src="src\assets\Ellipse 24 (1).png" className="w-20 ml-24 mt-5"/>
                        </span>
                        <p className="text-white text-center">Custom Quiz Creation</p>
                        <p className="text-warp inline-block w-4/5 ml-10 text-customTextColor">Generate quizzes based on ebook content to test understanding and prepare for exams.</p>
            
                </div>
               </div>
               </div>
               {/* Unlock your full study potential */}
               <div className="flex flex-col bg-customBgColor mt-40 h-3/6 lg:flex lg:flex-row lg:h-72"> 
                <div className="flex-1">
                    <img src="src/assets\Group 5358.png" className="h-96 mt-custom-m  w-custom-w lg:ml-24"/>
                </div>
                <div className="flex-1 ml-20">
                    <p className="text-white font-normal font-inter text-3xl text-warp inline-block w-52 mt-10">Unlock your full study potential</p>
                    <ul className="text-customTextColor list-disc ml-5 mt-5 text-sm">
                        <li>Browse the Ebook Library</li>
                        <li>Organize Your Bookshelf</li>
                        <li>Take Notes and Annotate</li>
                        <li>Access AI-Powered Tools</li>
                        <li>Ace Your Exams with Custom Quizzes</li>
                    </ul>
                    <button className="mt-5" id="signBtn">Get Started</button>
                </div>
               </div>
               {/* Don’t take our word for it */}
               <div className="flex flex-col lg:ml-20">
                <h1 className="ml-10 text-3xl mt-40 text-white font-normal font-inter lg:ml-96">Don’t take our word for it</h1>
                <p className="ml-10 text-customTextColor text-xs lg:ml-96">Here’s what our users are saying about Bookworm</p>
               </div>
               <div>
               <ResponsiveSlider/>
               </div>
               
               {/* our Mission */}
               <div className="flex flex-col bg-customDivColor mt-10 lg:flex-row">
                <div className="mt-10">
                <h1 className="text-white text-xl font-normal font-inter ml-20">About Us</h1>
                    <span >
                    <p className="text-customTextColor text-warp inline-size w-2/3 ml-20 mt-5 text-sm">At Bookworm, we are passionate about revolutionizing the way students learn and study. Founded by Sophia Abubakars,
                         a dedicated educator with a vision for leveraging technology to enhance education, Bookworm is the culmination of years of research 
                        and development aimed at addressing the challenges students face in managing their study resources effectively</p>
                    <p className="text-customTextColor text-warp inline-size w-2/3 ml-20 mt-5 text-sm">Our team comprises experienced developers, designers, and educators who share a common goal: to empower students of all
                         ages and disciplines to excel academically. We understand the struggles students encounter when trying to juggle multiple textbooks, notes, and 
                        study materials. Thats why we ve created Bookworm - your all-in-one study buddy designed to streamline your study process and maximize your learning potential.</p>
                    </span>
                    <img src="src\assets\Rectangle 756.png" className="w-96 mt-20 ml-5 lg:ml-20"/>
                </div>
                <div className="lg:ml-custom-h mb-20 ml-5">
                    <img src="src\assets\Rectangle 755.png" className="w-96 mt-24  lg:ml-0"/>
                    <span className="ml-custom-h">
                        <h1 className="text-white text-xl font-normal font-inter mt-10">Our Mission</h1>
                        <p className="text-customTextColor text-warp inline-size w-11/12 mt-5 text-sm">Bookworms mission is simple yet powerful: to provide students with a comprehensive and user-friendly platform 
                            that simplifies the study experience and fosters academic success. We believe that every student deserves access to 
                            high-quality educational resources and tools that facilitate learning and comprehension.
                        </p>
                        <p className="text-customTextColor text-warp inline-size w-11/12  mt-5 text-sm">
                        Our commitment to excellence is reflected in every aspect of our platform, from the intuitive user interface 
                        to the cutting-edge AI-powered features. We strive to stay at the forefront of technological innovation, continuously
                         improving and expanding Bookworms capabilities to meet the evolving needs of students worldwide.
                        </p>
                    </span>
                </div>
               </div>
               {/* why us */}
               <div className="flex lg:flex-row flex-col">
                <div className="mt-20 ml-20 flex-1"> 
                 <h1 className="text-white text-xl font-normal font-inter ">Why Choose Bookworm:</h1>
                 <ul className="text-customTextColor list-disc ml-10 mt-5 text-sm">
                    <li>Comprehensive Study Solutions: Whether you re looking for free ebooks, tools for organizing study materials, or AI-powered assistance with summarization and quiz creation, Bookworm has you covered.</li>
                    <li>Award-Winning AI-Powered Tools: Bookworms AI-powered tools, such as summarization, quiz creation, and note-taking and annotation, are designed to help students improve their comprehension and prepare for exams.</li>
                    <li>Customizable Features: Bookworms intuitive user interface allows you to customize your study experience to meet your unique learning needs.</li>
                 </ul>
                </div>
                <div className="bg-divColor lg:w-3/6 mt-10 flex-1 ml-10 mr-10 rounded-xl mb-10">
                  <h1 className="mt-5 ml-10 text-white text-lg mb-10 font-inter">Join the Bookworm Community:</h1>
                  <p className="text-customTextColor text-sm ml-10 mr-10">Ready to take your study routine to the next level? Join the Bookworm community today and embark on a journey of academic excellence. Whether you re a high school student preparing for exams or a college student tackling complex course materials or just a book lover, Bookworm is here to support you every step of the way.</p>
                  <p className="text-customTextColor text-sm ml-10 mt-5 mr-10" > Together, lets unlock the power of knowledge and unleash your full potential with Bookworm.</p>
                  <button className="bg-customYellow px-10 mt-10 mb-10 ml-10 py-1 rounded font-normal">Sign up</button>
                </div>
               </div>
               <div className="bg-div2Color">
                <div className="flex mt-10 mb-10">
                <span className="flex-1 ml-10 mt-10">
                    <img src="src\assets\Frame 34727.png"/>
                </span>
                <span className="flex-1 mt-10">
                    <img src='src\assets\Frame 34726.png'/>
                </span>
                </div>
                <span className="text-customTextColor">
                    <p className="mt-10 lg:ml-96  ">© 2024 Bookworm. All rights reserved</p>
                </span>
               </div>
        </div>
        </>
    )
}

export default LandingPage