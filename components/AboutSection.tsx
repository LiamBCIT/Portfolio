import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "React Native" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Node.js" },
  { skill: "Firebase" },
  { skill: "Wordpress" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="my-12 pb-12 md:pt-16 md:pb-48 animate-slideUpCubiBezier animation-delay-0">
          <h1 className="text-center font-bold text-4xl">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>

          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="md:w-1/2 ">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                Liam Conkin
              </h1>
              <p>
                I'm a {" "}
                <span className="font-bold text-teal-500">front end developer</span> with a passion for creating {" "}
                user-friendly, UX/UI accessibile web and mobile applications.
              </p>
              {/* <br /> */}
              {/* <p>
                I am currently in my last year as a Digital Design and Development student at BCIT and I have been working with
                small businesses and conducting freelance work.
              </p> */}
              <br />
              <p>
                With two years of experience in web development, I have honed my skills in front-end technologies. 
                This includes a strong foundation in UX/UI Design, responsive design, frontend libraries and frameworks such as React and NextJS.
              </p>
              <br />
              <p>
                
              Whether you are in need of a new application or a redesign of an existing one, I am confident that my skills and attention to detail will result in a website that meets your needs and exceeds your expectations.
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
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
              <Image
                id="reactimg"
                src="/react.gif"
                alt=""
                width={325}
                height={325}
                className="hidden md:block md:relative md:bottom-4 md:z-0"
              />
              {/* <video className="m-6 mt-20 flex flex-wrap flex-row justify-center"
                autoPlay
                loop
                muted
                width={323}
                height={315}
                src="hero-image.mp4"
              ></video> */}
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  )
}

export default AboutSection
