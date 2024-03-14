import languages from "../data/languages.json"
import frameworks from "../data/frameworks.json"
import tools from "../data/tools.json"


export function Skills () {    
    return (
        <section className="flex columns-3 justify-center mx-auto gap-8 shadow-slate-200/50">
            <div>
                <h4 className="text-xl font-bold">
                    Languages
                </h4>
                {languages.map((language) => {
                    return (
                        <div key={language.key} className="flex gap-3 items-center mt-4">
                            <img src={language.icon} className="size-6" />
                            <p>{language.name}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <h4 className="text-xl font-bold">
                    Frameworks
                </h4>
                {frameworks.map((framework) => {
                    return (
                        <div key={framework.key} className="flex gap-3 items-center mt-4">
                            <img src={framework.icon} className="size-6" />
                            <p>{framework.name}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <h4 className="text-xl font-bold">
                    Other Tools
                </h4>
                {tools.map((tool) => {
                    return (
                        <div key={tool.key} className="flex gap-3 items-center mt-4">
                            <img src={tool.icon} className="size-6" />
                            <p>{tool.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}