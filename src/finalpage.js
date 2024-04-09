import React, { useEffect, useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import image from './components/assets/dribbleblack.svg';
import image2 from './components/assets/dribblepink.svg';
import icon from './components/assets/dribbble-svgrepo-com.svg';
import icon2 from './components/assets/email_873371.svg';
import { IoBriefcaseOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; 
const avatarUrl = sessionStorage.getItem('userAvatar') || 'default-avatar-url';


const LastPage = () => {
    const navigate = useNavigate();
    const [avatarUrl, setAvatarUrl] = useState('');
    const email = sessionStorage.getItem('userEmail') || 'No email provided';
  
    useEffect(() => {
        // Retrieve the avatar URL from sessionStorage when the component mounts
        const storedAvatarUrl = sessionStorage.getItem('userAvatar');
        if (storedAvatarUrl) {
          setAvatarUrl(storedAvatarUrl);
        }
      }, []);
    
      useEffect(() => {
        console.log('Email:', email); // Logging the email to the console
      }, [email]);
    
      const handleChangeEmail = () => {
        navigate('/login'); // Navigate to the login page
      };

  return (
    <div className="bg-white text-gray-800 font-serif">
      {/* Header Section */}
      <header className=" text-white py-2 px-2 border-b-2 space-x-2">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo placeholder */}
            <img alt="logo" className="sm:p-2 md:p-4 w-36" src={image}></img>
          </div>
          <div className="flex justify-center items-center">
          <ul className="sm: hidden lg:flex space-x-8 absolute left-44 text-gray-500">
            <li><button className="hover:text-gray-300">Inspiration</button></li>
            <li><button className="hover:text-gray-300">Find Work</button></li>
            <li><button className="hover:text-gray-300">Learn Design</button></li>
            <li><button className="hover:text-gray-300">Go Pro</button></li>
            <li><button className="hover:text-gray-300">Hire Designers</button></li>
          </ul>
          </div>
          <div className="flex items-center space-x-6">
          <div className="relative">
          <input type="text" placeholder="Search" className=" lg:bg-[#fafafa] text-gray-500 px-2 py-1 rounded-full pr-2 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          </div>

          <button className="text-gray-500 lg:text-gray-500 w-6"><IoBriefcaseOutline/></button>
      <   div>
          {/* Display the user's avatar if it has been set */}
          {avatarUrl && <img src={avatarUrl} alt="Profile Avatar" className=" max-h-10 max-w-10 rounded-full" />}
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Upload</button>
          </div>
        </nav>
      </header>

      {/* Body Section */}
      <main className="container mx-auto my-8 flex flex-col items-center justify-center">
  <div className="flex items-center mb-8">
  </div>
  <div className="bg-white p-6 shadow w-full max-w-2xl flex flex-col items-center justify-center gap-y-4">
    <h1 className="text-3xl font-bold mb-4">Please verify your email...</h1>
    <img className="h-32" src={icon2} alt="email logo" />
    <p className="mb-2">Please verify your email address. We've sent a confirmation email to:</p>
    <p className="mb-2 font-bold">{email}</p>
    <p className="mb-2">Click the confirmation link in that email to begin using Dribbble.</p>
    <p className="mb-2">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <button href="#" className="text-pink-500 hover:underline">resend the confirmation email</button>.</p>
    <p className="mb-2">Wrong email address? <button onClick={handleChangeEmail} className="text-pink-500 hover:underline">Change it</button>.</p>
  </div>
</main>

      {/* Footer Section */}
      <footer className="bg-[#fafafa] text-black py-8 px-4">
        <div className="container mx-auto grid grid-cols-2 gap-x-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
            <div>
                <img alt="logo" className="p-4 w-52" src={image2}></img>
                <p className="mt-4 md:mt-0 p-4">Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                <div className="flex space-x-4 text-2xl p-4">
                    <button className="hover:text-gray-300"><FaTwitter /></button>
                <button className="hover:text-gray-300"><FaFacebook /></button>
            <button className="hover:text-gray-300"><FaInstagram /></button>
            <button className="hover:text-gray-300"><FaLinkedin /></button>
            </div>
            </div>
          <div>
            <h2 className="text-lg font-bold mb-4">For designers</h2>
            <ul className="space-y-4">
              <li><button className="hover:text-gray-300">Go Pro!</button></li>
              <li><button className="hover:text-gray-300">Explore design work</button></li>
              <li><button className="hover:text-gray-300">Design blog</button></li>
              <li><button className="hover:text-gray-300">Overtime podcast</button></li>
              <li><button className="hover:text-gray-300">Playoffs</button></li>
              <li><button className="hover:text-gray-300">Weeklu Warm-Up</button></li>
              <li><button className="hover:text-gray-300">Refer a Friend</button></li>
              <li><button className="hover:text-gray-300">Code of conduct</button></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Hire designers</h2>
            <ul className="space-y-4">
              <li><button className="hover:text-gray-300">Post a job opening</button></li>
              <li><button className="hover:text-gray-300">Post a freelance project</button></li>
              <li><button className="hover:text-gray-300">Search for designers</button></li>
            </ul>
            <h2 className="text-lg font-bold mb-4 mt-4">Brands</h2>
            <ul className="space-y-4">
              <li><button className="hover:text-gray-300">Advertise with us</button></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul className="space-y-4">
              <li><button className="hover:text-gray-300">About</button></li>
              <li><button className="hover:text-gray-300">Careers</button></li>
              <li><button className="hover:text-gray-300">Support</button></li>
              <li><button className="hover:text-gray-300">Media kit</button></li>
              <li><button className="hover:text-gray-300">Testimonials</button></li>
              <li><button className="hover:text-gray-300">API</button></li>
              <li><button className="hover:text-gray-300">Terms of service</button></li>
              <li><button className="hover:text-gray-300">Privacy policy</button></li>
              <li><button className="hover:text-gray-300">Cookie policy</button></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Directories</h2>
            <ul className="space-y-4">
              <li><button className="hover:text-gray-300">Design jobs</button></li>
              <li><button className="hover:text-gray-300">Designers for hire</button></li>
              <li><button className="hover:text-gray-300">Freelance designers for hire</button></li>
              <li><button className="hover:text-gray-300">Tags</button></li>
              <li><button className="hover:text-gray-300">Places</button></li>
            </ul>
            <h2 className="text-lg font-bold mb-4 mt-4">Design assets</h2>
            <ul className="space-y-4">
              <li><button className="hover:text-gray-300">Dribbble Marketplace</button></li>
              <li><button className="hover:text-gray-300">Creative Market</button></li>
              <li><button className="hover:text-gray-300">Fontspring</button></li>
              <li><button className="hover:text-gray-300">Font Squirrel</button></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Design Resources</h2>
            <ul className="space-y-4">
              <li><button className="hover:text-gray-300">Freelancing</button></li>
              <li><button className="hover:text-gray-300">Design Hiring</button></li>
              <li><button className="hover:text-gray-300">Design Portfolio</button></li>
              <li><button className="hover:text-gray-300">Design Education</button></li>
              <li><button className="hover:text-gray-300">Creative Process</button></li>
              <li><button className="hover:text-gray-300">Design Industry Trends</button></li>
              {/* Add more links */}
            </ul>
          </div>
        </div>
        <div className="flex flex-cols mt-8 md:flex-row justify-between items-center border-t-2">
          <p className="mt-2 flex font-sans text-gray-500 p-4 justify-end items-end">2023 Dribbble. All rights reserved</p>
          <div className="flex justify-center items-center space-x-1 m-6">
            <p className="font-sans text-gray-500"><b>20,501,853</b> shots dribbbled</p>
            <img className="flex p-4 w-14" alt="icon" src={icon}></img>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default LastPage;