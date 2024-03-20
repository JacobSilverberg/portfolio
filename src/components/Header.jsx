import { Link } from 'react-scroll';

export function Header() {
    return (
      <header className="bg-white text-black py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jacob Silverberg</h1>
          <div className="flex items-center"> {/* Flex container for navigation and toggle mode */}
            <nav className="mr-4"> {/* Margin-right for spacing */}
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70} // Adjust offset as needed
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
                    offset={-70} // Adjust offset as needed
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
                    offset={-70} // Adjust offset as needed
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
                    offset={-70} // Adjust offset as needed
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
