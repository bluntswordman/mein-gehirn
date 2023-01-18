import type { HeadFC, PageProps } from 'gatsby'
import MainLayout from 'layouts/MainLayout'
import React from 'react'

const IndexPage: React.FC<PageProps> = () => {
	return (
		<MainLayout>
			<div className='w-full h-screen flex flex-col space-y-4 items-start justify-start'>
				<h3 className='text-amber-500 text-lg'>Hi there! My name is</h3>
				<h1 className='text-4xl md:text-7xl font-black text-neutral-50'>Bedy Briliant Wijaya.</h1>
				<h2 className='text-2xl md:text-4xl font-bold text-neutral-300'>I'm a Fullstack Web Developer.</h2>
				<p className='text-neutral-400 text-lg w-full md:w-1/2'>
					I'm a Fullstack Web Developer from palembang, south sumatra, Indonesia. I'm passionate about building web applications that are fast,
					responsive, and accessible.
				</p>
				<button
					className='text-neutral-50 text-base font-semibold px-8 py-2 border-2 border-amber-500 bg-slate-900 rounded-md transition-all duration-300 hover:border-amber-700 flex flex-row space-x-2 justify-center items-center'
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }}
				>
          Read More
				</button>
			</div>
			<div className='w-full h-screen'>
				<h1
					className='text-xl font-bold'
					data-aos='fade-up'
				>
					wkwkwk
				</h1>
			</div>
			<div className='w-full h-screen'></div>
		</MainLayout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Bedy B Wijaya</title>
