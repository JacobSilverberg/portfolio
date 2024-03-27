import { useEffect, useState, useRef } from 'react';

export function About() {
    const [isAboutVisible, setAboutIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const currentRef = aboutRef.current;
                    if (currentRef) {
                        setTimeout(() => {
                            setAboutIsVisible(true);
                        }, 500); 
                        observer.unobserve(currentRef);
                    }
                }
            },
            { rootMargin: '-100px 0px' } 
        );

        const currentRef = aboutRef.current; 

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
        <section
            id="about"
            ref={aboutRef}
            className={`flex flex-col gap-12 ${isAboutVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}
        >
            <h2 className="text-center font-atkinson text-4xl md:text-5xl font-bold"> 
                About Me
            </h2>
            <div className="mx-auto flex flex-col md:flex-row items-center w-3/5 gap-10">
                <img src="../images/about/headshot.jpeg" alt="headshot" className="w-48 h-48 md:w-auto md:h-auto rounded-full mb-6 md:mb-0"/>
                <ul className="mx-auto flex flex-col items-start gap-3 text-start">
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/about/wave.svg" alt="wave" className="size-6 align-middle"/>
                            <p className="">
                                Hi, I&#39;m Jacob and welcome to my portfolio website made with <b>React</b> and <b>Tailwind</b>!.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/about/school.svg" alt="school" className="size-6 align-middle"/>
                            <p className="align-middle">
                                I am a Computer Science graduate from <b>Oregon State University</b> and have also earned an MBA from <b>Northeastern University</b>.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/about/computer.svg" alt="computer" className="size-6 align-middle"/>
                            <p className="align-middle">
                                Currently seeking full-time employment as a <b>full-stack developer</b>. Take a look around to see what I can do!
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/about/web.svg" alt="web" className="size-6 align-middle"/>
                            <p className="align-middle">
                                My stack of choice is <b>ReactJS</b> styled with <b>Tailwind</b> and have a strong foundation with <b>JavaScript</b> and <b>Python</b> for the backend.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/about/strategy.svg" alt="strategy" className="size-6 align-middle"/>
                            <p className="align-middle">
                                In addition to Software Engineering, I am proficient at <b>Data Analysis</b>. I worked in the healthcare sector as a Business Analyst and keep my skills sharp with Fantasy Football!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
