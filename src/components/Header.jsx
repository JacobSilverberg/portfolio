import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  return (
    <header className={`bg-white text-black py-4 fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center"> 
          <img
            src="../images/JS.svg"
            alt="JS Logo"
            className="w-8 h-8 md:w-10 md:h-10 mr-4"
          />
          <h1 className="text-2xl font-bold">Jacob Silverberg</h1>
        </div>
        <div className="flex items-center"> 
          <nav className="mr-4"> 
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} 
                  className="hover:text-gray-800 hover:underline cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} 
                  className="hover:text-gray-800 hover:underline cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} 
                  className="hover:text-gray-800 hover:underline cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} 
                  className="hover:text-gray-800 hover:underline cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* <button className="bg-transparent hover:bg-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded">
              <img src="../images/footer/moon.svg" className="size-8" />
          </button> */}
        </div>
      </div>
    </header>
  );
}
