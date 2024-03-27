import { Link } from 'react-scroll';

export function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="relative bg-white text-black z-50 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="../images/footer/copyright.svg" alt="Copyright Logo" className="h-6 inline-block mr-2" />
            <span className="text-sm">{currentYear} Jacob Silverberg</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/JacobSilverberg" target="_blank" rel="noopener noreferrer">
              <img src="../images/skills/GitHub.svg" className="h-8" style={{ fill: 'white' }} />  
            </a>
            <a href="https://www.linkedin.com/in/jacobsilverberg/" target="_blank" rel="noopener noreferrer">
              <img src="../images/footer/linkedin.svg" className="h-8 fill-white"/>
            </a>
            <a href="mailto:JacobSilverberg@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="../images/footer/email.svg" className="h-8" style={{ fill: 'white' }} />
            </a>
            <Link to="hero" smooth={true} duration={500} spy={true} offset={-70}>
              <button className="bg-transparent hover:bg-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded inline-flex items-center">
                <img src="../images/footer/arrow_up.svg" className="h-8" style={{ fill: 'white' }} />
              </button>
            </Link>
            {/* <button className="bg-transparent hover:bg-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded">
              <img src="../images/footer/moon.svg" className="h-8" style={{ fill: 'white' }} />
            </button> */}
          </div>
        </div>
      </footer>
    );
}
