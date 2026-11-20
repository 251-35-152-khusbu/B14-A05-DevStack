import logo from '../assets/logo-text.png'
import { FaBars } from "react-icons/fa";

const Nav = () => {
    return (
        <div className="bg-white">
            <div className=" container mx-auto grid grid-cols-3 items-center">
               <div className="md:hidden">

  <input type="checkbox" id="menu" className="peer hidden" />

  <label htmlFor="menu" className="text-2xl cursor-pointer">
    <FaBars />
    
  </label>

  <div className="hidden peer-checked:flex flex-col gap-4 p-5 bg-white shadow-lg">
    <a href="#">Home</a>
    <a href="#">Technology</a>
    <a href="#">Projects</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>

</div>
             <img src={logo} className="logo" alt="Logo" />
            <ul className=" hidden lg:flex justify-center items-center gap-8 text-black text-medium font-semibold hover:pointer-coarse:bg-pink-400">
                <li><a href="#home">Home</a></li>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

           <section className="flex justify-end items-center gap-4 mt-2.5">
            <button type="button" className=" bg-gray-200 border border-black-200 hover:bg-pink-600 transition-shadow cursor-pointer border-none text-black font-bold py-2 px-4 rounded-2xl">
                SignIn
            </button>
            <button type="button" className=" bg-gray-200 border border-black-200 hover:bg-pink-600 transition-shadow cursor-pointer border-none text-black font-bold py-2 px-4 rounded-2xl">
                SignUp
            </button>
              </section>
            </div>

        </div>
    );
};

export default Nav;