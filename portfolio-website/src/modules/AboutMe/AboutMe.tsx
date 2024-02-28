import { ContactBar } from "../ContactBar/ContactBar"
import { Navbar } from "../Navbar/Navbar"

export const AboutMe = (): JSX.Element => {

    return (
        <div id="about_me" className="p-12 max-h-[100vh] bg-cover bg-center bg-[url('../../public/images/horse_head_nebula.jpg')]">
            <Navbar />
            <div className="flex flex-row flex-wrap justify-around items-center bg-gray-950/50 p-4">
                <img src="images/hands_on_laptop.jpg" className="w-96 object-cover rounded-xl"
                    alt="A drawing of someone using a laptop while taking notes on a notepad." />
                <div className="flex flex-col items-center max-w-xl" >
                    <h1 className="text-7xl font-serif p-4">About me</h1>
                    {/* TODO: improve the text in this section - shorter more focused */}
                    <p>Hi, I'm Melody! I am a full stack software engineer at Nando's UK. </p>
                    <p>I'm curious and thrive on challenges, especially those that push me outside of my comfort zone.
                        Coding is my passion, and I'm excited to pursue these interests in my new journey as a software
                        developer.
                    </p>
                    <p>Here's a list of a few technologies and methodologies I have been working on:
                    </p>
                    <div className="skills_and_cv_box flex flex-col items-center max-w-5xl gap-12">
                        <ul className="skills_grid list-disc grid grid-cols-3 gap-12 justify-around">
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>HTML / CSS</li>
                            <li>React.JS</li>
                            <li>Node.js</li>
                            <li>MySQL / MongoDB </li>
                            <li>OOP</li>
                            <li>REST APIs</li>
                            <li>Git</li>
                            <li>Agile</li>
                        </ul>
                        <a className="solo_link rounded-full bg-rose-400 p-1" href="otherAssets/MSylvestre_CV.pdf" target="_blank">Download my CV</a>
                    </div>
                </div>
            </div>

            <ContactBar />
        </div>
    )

}