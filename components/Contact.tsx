"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Link2 from 'next/link'

export default function Contact() {

  return (
    <>
        <section id = "contact" className="body-font relative mt-16">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
            <h1 className="mt-10 text-center font-bold text-4xl">
                Get In Touch
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">I'd love to chat with you! Feel free to send me a email or <br/> connect with me on {" "}
            <Link2
            href="https://www.linkedin.com/in/liam-conkin/"
            className="text-teal-500 hover:text-teal-600 underline"
          >
            LinkedIn 
          </Link2>
            {" "} and I will get back to you ASAP.</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" action="https://formsubmit.co/liam.conkin@gmail.com" method="POST">
                <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                </div>
                <div className="p-2 w-full">
                <button className="flex mx-auto text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700">Send</button>
                </div>        
                
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-teal-700" href="mailto:liamconkin@gmail.com">liam.conkin@gmail.com</a>
                </div>


            </form>
            </div>
        </div>
        </section>
    </>
  )
}
