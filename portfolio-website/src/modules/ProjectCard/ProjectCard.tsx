export type Project = {
    title: string
    image: string
    altDescription: string
    description: string
    githubLink: string
    liveLink?: string
}

export type projectCardProps = {
    project: Project
}

export const ProjectCard = (props: projectCardProps): JSX.Element => {
    return (
        <div className="project_card" key={props.project.title}>
            <img src={props.project.image} alt={props.project.altDescription} />
            <h3>{props.project.title}</h3>
            <div className="project_text">
                <p>{props.project.description}</p>
                <div className="project_links_bar">
                    <a href={props.project.githubLink} target="_blank">Github</a>
                    {props.project.liveLink && <a href={props.project.liveLink} target="_blank">Live</a>}
                </div>
            </div>
        </div>
    )
}