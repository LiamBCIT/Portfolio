import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "CrowdfundSuite Agency",
    description:
      "CrowdfundSuite is a local Vancouver agency that helps business owners raise capital, conducting everything from campaign planning to execution.",
    image: "/CrowdfundSuiteimg.png",
    github: "https://crowdfundsuite.com/",
    link: "https://crowdfundsuite.com/",
  },
  {
    name: "FindAPlace Real Estate",
    description: "FindAPlace is a real estate web application that uses Bayut API to fetch 24/7 real estate links. Developed the layout and functionality with my teammates using Next.js and Tailwind CSS.",
    image: "/Findaplaceimg.png",
    github: "https://github.com/LiamBCIT/FindAPlace",
    link: "https://findaplace.vercel.app/",
  },
  {
    name: "OnePlant",
    description:
      "Plant eCommerce site with add cart functionality, checkout and responsive-design using Woocommerce and FSE.",
    image: "/Oneplantimg.png",
    github: "https://github.com/LiamBCIT/oneplant/",
    link: "https://dev-oneplant.pantheonsite.io/",
  },
  {
    name: "FirstMaps",
    description:
      "A interactive resource for indigenous community members to share location, culture, art & tourism info. Catered to Indigenous community stakeholders that wished for a single convinent place to find info. Uses NextAuth.js for site security.",
    image: "/FirstMapsimg.png",
    github: "https://github.com/First-Maps/first-maps",
    link: "https://first-maps.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
