import { ContactBar } from "../ContactBar/ContactBar";
import { Navbar } from "../Navbar/Navbar";

export const AboutMe = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-evenly py-8 px-12 bg-cover min-h-[100vh] bg-center bg-[url('../../public/images/horse_head_nebula.jpg')]">
      <Navbar />
      <div className="flex flex-row flex-wrap gap-8 min-w-[80vw] justify-around items-center bg-gray-950/50 p-4 rounded-lg">
        <img
          src="images/me.jpg"
          className="w-96 object-cover rounded-xl"
          alt="A picture of me"
        />
        <div className="flex flex-col items-start max-w-xl justify-evenly gap-4">
          <h1 className="text-4xl sm:text-6xl font-serif place-self-center">
            About me
          </h1>
          <p className="text-lg">
            Hi, I&rsquo;m Melody! I am a full stack software engineer for{" "}
            <a
              href="https://www.nandos.co.uk"
              target="_blank"
              className="text-rose-300"
            >
              Nando&rsquo;s UK
            </a>
            , based in Bristol. I love crafting inventive solutions to problems
            with elegant code.
          </p>
          <p className="text-lg">
            I&rsquo;m particularly fond of working with Typescript and exploring
            the capabilities of Google Cloud Platform (GCP). That said, I'm
            always up for experimenting with new technologies and software to
            keep things interesting!
          </p>

          <p className="text-lg">
            Here&rsquo;s a list of a few technologies I have been working with:
          </p>
          <div className="skills_and_cv_box flex flex-col items-center max-w-5xl gap-4 place-self-center">
            <ul className="skills_grid list-disc sm:grid sm:grid-cols-3 gap-8 text-xl justify-around">
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Typescript</li>
              <li>GCP</li>
              <li>Terraform</li>
              <li>CI/CD</li>
              <li>PostGreSQL</li>
              <li>GraphQL</li>
              <li>REST APIs</li>
              <li>Python</li>
              <li>Go</li>
              <li>HTML / CSS </li>
            </ul>
            <a
              className="solo_link rounded-full bg-rose-400 p-2 text-lg font-bold hover:bg-rose-500"
              href="otherAssets/MSylvestre_CV.pdf"
              target="_blank"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  );
};
