export function Hero () {
    return (
      <header className="flex h-screen flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center font-atkinson text-6xl md:text-8xl">
            Jacob Silverberg
          </h1>
          <h3 className=" mx-auto w-11/12 text-center text-xl text-yellow-600 md:text-2xl">
            Full-Stack developer based in Providence, Rhode Island
          </h3>
        </div>
        <ul className="flex w-5/6 justify-between md:w-1/2">
          <li>
            <button className="px-2 py-1 md:px-4 md:py-2 rounded-xl border-transparent bg-stone-200 text-stone-900 hover:border-stone-200 hover:bg-transparent hover:text-stone-200">
                <a
                    href="https://https://github.com/JacobSilverberg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </button>
          </li>
          <li>
            <button className="px-2 py-1 md:px-4 md:py-2 rounded-xl border-transparent bg-stone-200 text-stone-900 hover:border-stone-200 hover:bg-transparent hover:text-stone-200">
                <a
                    href="https://www.linkedin.com/in/jacobsilverberg/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Linkedin
                </a>
            </button>
          </li>
          <li>
            <button className="px-2 py-1 md:px-4 md:py-2 rounded-xl border-transparent bg-stone-200 text-stone-900 hover:border-stone-200 hover:bg-transparent hover:text-stone-200">
                <a
                    href="/silverberg_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </button>
          </li>
        </ul>
      </header>
    );
  }
  