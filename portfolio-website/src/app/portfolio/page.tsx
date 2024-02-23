import { Project, ProjectCard } from "@/modules/ProjectCard/ProjectCard"
import projectsList from "../../modules/projects.json"
export default function portfolio() {

    const projects: Array<Project> = projectsList.projects
    console.log(projects)
    return (
        <>
            {projects.forEach(project => {
                <ProjectCard project={project} />

            })
            }
        </>
    )
}