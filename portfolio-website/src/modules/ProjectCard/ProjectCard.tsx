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
        <div className="flex flex-row flex-wrap-reverse justify-start xl:justify-between gap-6 items-center xl:w-[80vw] bg-gray-950/50 rounded-lg p-8 border border-rose-300">
            <div className="xl:max-w-[450px]">
                <h2 className="text-2xl">{props.project.title}</h2>
                <p className="text-md py-4">{props.project.description}</p>
                <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-12 justify-start">
                    <a href={props.project.githubLink} target="_blank" className="rounded-full bg-rose-400 p-2 font-bold hover:bg-rose-500" >Github</a>
                    {props.project.liveLink && <a href={props.project.liveLink} target="_blank" className="rounded-full px-[20px] bg-rose-400 p-2  font-bold hover:bg-rose-500">Live</a>}
                </div>
            </div>
            <img className="w-[450px] object-cover rounded-lg " src={props.project.image} alt={props.project.altDescription} />
        </div>
    )
}