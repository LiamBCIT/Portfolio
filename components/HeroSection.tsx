"use client" // this is a client component
import React from "react"  
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Link2 from 'next/link'

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-0 py-12 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.gif"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Liam!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a quality-focused and goal-oriented <br/>{" "}
            <span className="font-semibold text-teal-600">
              Front End Developer{" "}
            </span>
            striving to deliver the best possible product that exceeds people's needs.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>

          <Link2
            href="https://drive.google.com/file/d/1Ys2TI6_UEp60f9ByiaUw3OcFoLa7RtdP/view?usp=sharing"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 m-6"
          >
            Resume
          </Link2>

        </div>
      </div>
      <div className="flex flex-row justify-center items-start text-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
        <HiArrowDown id="arrow" size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
