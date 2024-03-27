import { useEffect, useState, useRef } from 'react';

export function Contact() {
    const [isContactVisible, setContactVisible] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const currentRef = contactRef.current; 
                    if (currentRef) {
                        setTimeout(() => {
                            setContactVisible(true);
                        }, 500); 
                        observer.unobserve(currentRef);
                    }
                }
            },
            { rootMargin: '-100px 0px' } 
        );

        const currentRef = contactRef.current; 

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            id="contact"
            ref={contactRef}
            className={`container mx-auto py-8 ${isContactVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}
        >
            <div className="text-center">
                <h2 className="font-atkinson text-4xl md:text-5xl font-bold mb-12">
                    Contact
                </h2>
            </div>
            <div className="flex justify-center">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <ul className="flex justify-between space-x-8">
                        <li className="flex flex-col items-center">
                            <a
                                href="https://github.com/JacobSilverberg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold mb-2"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://github.com/JacobSilverberg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../images/skills/GitHub.svg"
                                    alt="GitHub"
                                    className="w-8 h-8 mx-auto"
                                />
                            </a>
                        </li>
                        <li className="flex flex-col items-center">
                            <a
                                href="https://www.linkedin.com/in/jacobsilverberg/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold mb-2"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jacobsilverberg/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../images/footer/linkedin.svg"
                                    alt="LinkedIn"
                                    className="w-8 h-8 mx-auto"
                                />
                            </a>
                        </li>
                        <li className="flex flex-col items-center">
                            <a
                                href="mailto:JacobSilverberg@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold mb-2"
                            >
                                Email
                            </a>
                            <a
                                href="mailto:JacobSilverberg@gmail.com"
                            >
                                <img
                                    src="../images/footer/email.svg"
                                    alt="Email"
                                    className="w-8 h-8 mx-auto"
                                />
                            </a>
                        </li>
                        <li className="flex flex-col items-center">
                            <a
                                href="/Jacob_Silverberg_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold mb-2"
                            >
                                Resume
                            </a>
                            <a
                                href="/Jacob_Silverberg_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../images/contact/resume.svg"
                                    alt="Resume"
                                    className="w-8 h-8 mx-auto"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
