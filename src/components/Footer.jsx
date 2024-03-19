export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <img src="../images/footer/copyright.svg" alt="Copyright Logo" className="h-6 inline-block mr-2" />
                <span className="text-sm">© {currentYear} Jacob Silverberg</span>
            </div>
            <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/jacobsilverberg/" target="_blank" rel="noopener noreferrer">
                    <img src="../images/footer/linkedin.svg" className="size-8" />
                </a>
                <a href="https://github.com/JacobSilverberg" target="_blank" rel="noopener noreferrer">
                    <img src="../images/skills/GitHub.svg" className="size-8" />  
                </a>
                <a href="mailto:JacobSilverberg@gmail.com">
                    <img src="../images/footer/email.svg" className="size-8" />
                </a>
                <button className="bg-transparent hover:bg-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded inline-flex items-center">
                    <img src="../images/footer/arrow_up.svg" className="size-8" />
                </button>
                {/* <button className="bg-transparent hover:bg-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-200 rounded">
                    <img src="../images/footer/moon.svg" className="size-8" />
                </button> */}
            </div>
        </div>
    </footer>
  );
}