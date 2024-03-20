export function Hero() {
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
      <ul className="flex w-5/6 justify-between md:w-1/5">
        <li>
          <a
            href="https://github.com/JacobSilverberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../images/skills/GitHub.svg"
              alt="GitHub"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jacobsilverberg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../images/footer/linkedin.svg"
              alt="LinkedIn"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
        </li>
        <li>
          <a href="mailto:JacobSilverberg@gmail.com">
            <img
              src="../images/footer/email.svg"
              alt="Email"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
        </li>
      </ul>
      <button className="relative px-2 py-1 md:px-4 md:py-2 rounded-xl border-transparent border-stone-600 bg-transparent text-stone-900 hover:border-stone-200 hover:bg-transparent hover:text-stone-200">
        <a
          href="/silverberg_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="mr-2">Resume</span>
          <img
            src="../images/hero/arrow-top-right.svg"
            alt="Arrow"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </a>
      </button>
    </header>
  );
}
