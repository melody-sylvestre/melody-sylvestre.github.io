import { Project, ProjectCard } from "@/modules/ProjectCard/ProjectCard";
import projectsList from "../../modules/projects.json";
import { ContactBar } from "../ContactBar/ContactBar";

export const PortfolioPage = (): JSX.Element => {
  const projects: Array<Project> = projectsList.projects;
  return (
    <div className="flex flex-col gap-12 items-center justify-evenly">
      <p className="w-[80vw] text-center text-lg">
        Here&rsquo;s an overview of my personal projects, as well as the team
        projects I worked on as a student of{" "}
        <a
          href="https://io-academy.uk"
          target="_blank"
          className="text-rose-300"
        >
          the iO Academy bootcamp.
        </a>
      </p>

      <div className="flex flex-col flex-wrap gap-12 ">
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
      <ContactBar />
      <footer className="mt-12 text-sm">
        <p>
          © Melody Sylvestre 2024 - Image on the About page by{" "}
          <a
            className="text-rose-300"
            href="https://www.freepik.com/free-vector/hand-drawn-business-coffee-illustration_28924485.htm#query=programming%20hands&position=33&from_view=search&track=ais"
          >
            Freepik
          </a>
          .
        </p>
      </footer>
    </div>
  );
};
