'use client'

import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import TextShpere from './TextShpere'

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "React Native"},
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "SASS" },
  { skill: "Git" },
  { skill: "Express" },
  { skill: "Node.js" },
  { skill: "Firebase" },
  { skill: "PostgresSQL" },
  { skill: "MySQL" },
  { skill: "SQL" },
  { skill: "Wordpress" },
  { skill: "Agile" },
  { skill: "Figma" },
  { skill: "UX/UI Design" },
  { skill: "Adobe Creative Cloud" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="my-12 pb-2 md:pt-16 md:pb-12 animate-slideUpCubiBezier animation-delay-0">
          <h1 className="text-center font-bold text-4xl">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>

          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="md:w-1/2 ">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                About Me
              </h1>
              <p>
                I&#39;m a
                <span className="font-bold text-teal-500"> {" "}full stack developer</span> with a passion for creating {" "}
                user friendly, UX/UI accessibile web and mobile applications.
              </p>
              <br />
              <p>
                I have recently completed 2 years at Digital Design and Development at BCIT and I have been working with
                small businesses and conducting freelance work for over 2 years.
              </p>
              <br />
              <p>
                Learning from my clients, professors, peers, mentors, and my experiences has helped me develop a strong foundation in UX/UI Design frontend, backend and building products.
              </p>
              <br />
              <p>          
                Most importantly, I believe that you should{" "}
                <span className="font-bold text-teal-500">
                  never stop growing
                </span>{" "}
                and that&#39;s what I strive to do, I am always looking for new opportunities to challenge myself and improve my skills.</p>
            </div>
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">Technology Stack</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold transform transition duration-500 hover:scale-110 hover:bg-grey-600 flex justify-center items-center hover:shadow-lg"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  )
}

export default AboutSection
