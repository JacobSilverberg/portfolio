import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import languages from "../data/languages.json";
import frameworks from "../data/frameworks.json";
import tools from "../data/tools.json";

export function Skills() {
    const [areSkillsVisible, setSkillsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const currentRef = skillsRef.current;
                    if (currentRef) {
                        setTimeout(() => {
                            setSkillsVisible(true);
                        }, 500);
                        observer.unobserve(currentRef);
                    }
                }
            },
            { rootMargin: '-100px 0px' }
        );

        const currentRef = skillsRef.current;

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
            id="skills"
            ref={skillsRef}
            className={`flex flex-col items-center justify-center gap-12 ${areSkillsVisible ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}
        >
            <h2 className="text-center font-atkinson text-4xl md:text-5xl font-bold transition-opacity duration-1000 ease-in-out">Skills</h2>
            <div className="flex justify-center gap-8">
                <SkillGroup title="Languages" items={languages} />
                <SkillGroup title="Frameworks" items={frameworks} />
                <SkillGroup title="Other Tools" items={tools} />
            </div>
        </section>
    );
}

function SkillGroup({ title, items }) {    
    SkillGroup.propTypes = {
        title: PropTypes.string,
        items: PropTypes.object
    }
    
    return (
        <div className="p-6 rounded-lg bg-white shadow-md">
            <h4 className="text-xl font-bold mb-4">{title}</h4>
            {items.map((item) => (
                <Skill key={item.key} name={item.name} icon={item.icon} />
            ))}
        </div>
    );
}

function Skill({ name, icon }) {
    Skill.propTypes = {
        name: PropTypes.string,
        icon: PropTypes.img
    }

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex gap-3 items-center mt-2 transform transition-transform duration-300 hover:scale-110"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={icon} className="w-6 h-6" alt={name} />
            <p>{name}</p>
        </div>
    );
}
