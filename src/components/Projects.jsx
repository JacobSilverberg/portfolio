import projects from "../data/projects.json"

export function Projects() {
    return (
        <div className="container mx-auto py-8 w-3/5">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="mb-2 flex flex-wrap">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full mr-1 mb-1">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <p className="mb-2">
                                <a href={project.link} className="text-blue-600">
                                    Link
                                </a>
                            </p>
                        )}
                        <a href={project.github}>
                            <img src="../images/skills/GitHub.svg" className="size-8" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}