import { ContactBar } from "@/modules/ContactBar/ContactBar";

export default function aboutMe() {
    return (

        <div id="about_me" className="about_me_section p-12">

            <div className="about_me_card flex flex-row flex-wrap justify-around items-center ml-12">
                <img src="images/hands_on_laptop.jpg" className="w-96 object-cover rounded-xl"
                    alt="A drawing of someone using a laptop while taking notes on a notepad." />
                <div className="about_me_text flex flex-col items-center max-w-xl" >
                    <h1 className="text-5xl">About me</h1>

                    <p>Hi, I'm Melody! I recently graduated from <a className="inline_link"
                        href="https://io-academy.uk/courses/full-stack-track">the iO Academy bootcamp</a> as a full
                        stack software developer. With 10 years of experience in coding from my previous roles as an
                        astrophysicist and an operational researcher in international trade, I bring strong problem-solving
                        skills and a knack for quickly learning and adapting to new technologies and fields. I believe these
                        skills will enable me to excel in my software development career.
                    </p>
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
                        <a className="solo_link rounded-full bg-rose-400 p-1" href="images/MSylvestre_CV.pdf" target="_blank">Download my CV</a>
                    </div>
                </div>
            </div>

            <ContactBar />

            <footer className="flex flex-row justify-end p-12">
                <p>Illustration by <a
                    href="https://www.freepik.com/free-vector/hand-drawn-business-coffee-illustration_28924485.htm#query=programming%20hands&position=33&from_view=search&track=ais">Freepik</a>
                    - © Copyright 2023</p>
            </footer>

        </div>
    )
}