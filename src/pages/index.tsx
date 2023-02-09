import type { HeadFC, PageProps } from 'gatsby'
import MainLayout from 'layouts/MainLayout'
import React from 'react'
import profile from 'assets/img/profile.webp'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <div className="w-full h-screen flex flex-col space-y-4 items-start justify-start py-14">
        <h3
          data-aos="fade-down"
          data-aos-duration="700"
          className="text-amber-500 text-lg select-none"
        >
          Hi there! My name is
        </h3>
        <h1
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-4xl md:text-7xl font-black text-neutral-50 select-none"
        >
          Bedy Briliant Wijaya.
        </h1>
        <h2
          data-aos="fade-down"
          data-aos-duration="900"
          className="text-2xl md:text-4xl font-bold text-neutral-300 select-none"
        >
          {`I'm a Fullstack Web Developer.`}
        </h2>
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-neutral-400 text-lg w-full md:w-1/2 select-none"
        >
          {`I'm a Fullstack Web Developer from palembang, south sumatra,
          Indonesia. I'm passionate about building web applications that are
          fast, responsive, and accessible.`}
        </p>
        <button
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }}
          data-aos="fade-down"
          data-aos-duration="1100"
          className="text-neutral-50 text-base font-semibold px-8 py-2 border-2 border-amber-500 bg-slate-900 rounded-md transition-all duration-300 hover:border-amber-700 flex flex-row space-x-2 justify-center items-center"
        >
          Read More
        </button>
      </div>
      <div className="w-full h-screen flex flex-col items-center space-y-10">
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          className="flex flex-row items-center justify-start space-x-3 sm:space-x-5 w-full min-h-fit"
        >
          <div className="flex flex-row min-w-fit lg:justify-center items-center space-x-2 text-xl select-none">
            <span className="font-bold text-amber-500">01.</span>
            <h2 className="font-bold text-neutral-300">About Me</h2>
          </div>
          <span className="w-full lg:w-1/3 border border-slate-700 mt-2 rounded-full" />
        </div>
        <div className="w-full min-h-fit flex flex-col-reverse justify-center items-center sm:grid sm:grid-cols-2 sm:gap-7 lg:gap-10 lg:px-28 sm:content-center sm:justify-items-center">
          <div
            data-aos="fade-down"
            data-aos-duration="700"
            className="flex flex-col items-center space-y-4 py-5 sm:py-0"
          >
            <p className="text-neutral-400 text-lg select-none text-center sm:text-justify">
              {`I'm a Fullstack Web Developer from Palembang, South Sumatra,
              Indonesia. I'm passionate about building web applications that are
              fast, responsive, and accessible.`}
            </p>
            <p className="text-neutral-400 text-lg select-none text-center sm:text-justify">
              {`I'm currently working as a freelance web developer. I'm also a
              student at `}
              <a
                target="_blank"
                href="http://www.uigm.ac.id/"
                className="font-semibold text-amber-500 hover:text-amber-700 transition-all duration-300"
                rel="noreferrer"
              >
                University of Indo Global Mandiri
              </a>
              , majoring in{' '}
              <a
                target="_blank"
                href="http://if.uigm.ac.id/"
                className="font-semibold text-amber-500 hover:text-amber-700 transition-all duration-300"
                rel="noreferrer"
              >
                Informatics Engineering
              </a>
              .
            </p>
            <p className="text-neutral-400 text-lg select-none text-center sm:text-justify">
              {`When I'm not coding, I like to watch anime, read books and listen
              to music.`}
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="700"
            className="flex flex-col items-center justify-start sm:items-start sm:pl-10 sm:justify-center"
          >
            <img
              src={profile}
              alt="foto-profil"
              className="w-[50%] sm:w-[70%] lg:w-[40%] rounded-lg ring-4 transition-all duration-500 ring-neutral-300 hover:ring-amber-500 ring-offset-4 ring-offset-slate-50"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen"></div>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Bedy B Wijaya</title>
