export function Contact() {
  return (
    <div id="contact" className="container mx-auto py-8">
      <div className="text-center">
        <h2 className="font-atkinson text-4xl md:text-5xl font-bold mb-12">
          Contact
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="flex justify-between space-x-8">
            <li className="flex flex-col items-center">
              <span className="text-lg font-semibold mb-2">GitHub</span>
              <a
                href="https://github.com/JacobSilverberg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../images/skills/GitHub.svg"
                  alt="GitHub"
                  className="w-8 h-8"
                />
              </a>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-lg font-semibold mb-2">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/jacobsilverberg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../images/footer/linkedin.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-lg font-semibold mb-2">Email</span>
              <a href="mailto:JacobSilverberg@gmail.com">
                <img
                  src="../images/footer/email.svg"
                  alt="Email"
                  className="w-8 h-8"
                />
              </a>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-lg font-semibold mb-2">Resume</span>
              <a
                href="/silverberg_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../images/contact/resume.svg"
                  alt="Resume"
                  className="w-8 h-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
