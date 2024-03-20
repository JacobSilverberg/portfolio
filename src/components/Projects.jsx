import projects from "../data/projects.json";

export function Projects() {
  return (
    <div id="projects" className="container mx-auto py-8 w-4/5">
      <h2 className="text-center font-atkinson mb-8 text-4xl md:text-5xl font-bold"> 
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col justify-between bg-white shadow-md rounded-lg p-6 relative">
            <div>
              <img src={project.img} alt={project.name} className="w-full mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-2 flex flex-wrap">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-2 py-1 rounded-full mr-1 mb-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-self-end">
              {project.link && (
                <p className="mb-2">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600"
                  >
                    Link
                  </a>
                </p>
              )}
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer" 
              >
                <img src="../images/skills/GitHub.svg" className="size-8" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
