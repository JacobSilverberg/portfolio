export function About () {
    return (
        <section id="experiences" className="flex flex-col gap-12">
            <h2 
                className="text-center font-atkinson text-4xl md:text-6xl"
            > 
                About me
            </h2>
            <div className="mx-auto flex items-center w-3/5 gap-10">
                <img src="../images/headshot.jpeg" alt="headshot" className="size-48 rounded-full"/>
                <ul className="mx-auto flex flex-col items-center gap-3 text-start">
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../public/images/wave.svg" alt="wave" className="size-6"/>
                            <p className="">
                                Hi, I&#39;m Jacob and welcome to my portfolio website made with <b>React</b> and <b>Tailwind</b>!.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/school.svg" alt="school" className="size-6 align-middle"/>
                            <p className="align-middle">
                                I am a Computer Science graduate from <b>Oregon State University</b> and have also earned an MBA from <b>Northeastern University</b>.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/computer.svg" alt="computer" className="size-6 align-middle"/>
                            <p className="align-middle">
                                Currently seeking full-time employment as a <b>full-stack developer</b>. Take a look around to see what I can do!
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/web.svg" alt="web" className="size-6 align-middle"/>
                            <p className="align-middle">
                                My stack of choice is <b>ReactJS</b> styled with <b>Tailwind</b> and have a strong foundation with <b>JavaScript</b> and <b>Python</b> for the backend.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center">
                            <img src="../images/strategy.svg" alt="strategy" className="size-6 align-middle"/>
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