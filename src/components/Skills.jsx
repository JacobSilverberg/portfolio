import languages from "../data/languages.json"
import frameworks from "../data/frameworks.json"
import tools from "../data/tools.json"


export function Skills () {    
    return (
        <section id="skills" className="flex justify-center mx-auto gap-8">
            <div className="p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4">
                    Languages
                </h4>
                {languages.map((language) => {
                    return (
                        <div key={language.key} className="flex gap-3 items-center mt-2">
                            <img src={language.icon} className="w-6 h-6" alt={language.name} />
                            <p>{language.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4">
                    Frameworks
                </h4>
                {frameworks.map((framework) => {
                    return (
                        <div key={framework.key} className="flex gap-3 items-center mt-2">
                            <img src={framework.icon} className="w-6 h-6" alt={framework.name} />
                            <p>{framework.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4">
                    Other Tools
                </h4>
                {tools.map((tool) => {
                    return (
                        <div key={tool.key} className="flex gap-3 items-center mt-2">
                            <img src={tool.icon} className="w-6 h-6" alt={tool.name} />
                            <p>{tool.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}