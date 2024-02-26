import { Project, ProjectCard } from "@/modules/ProjectCard/ProjectCard"
import projectsList from "../../modules/projects.json"
import { Navbar } from "@/modules/Navbar/Navbar"
export default function portfolio() {

    const projects: Array<Project> = projectsList.projects
    console.log(projects)
    return (
        <>
            <Navbar />
            <main>
                {projects.map(project => {
                    return (<ProjectCard project={project} />)
                })
                }
            </main>
        </>
    )
}