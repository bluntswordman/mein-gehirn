import {HeadFC, Link, PageProps} from 'gatsby'
import React from 'react'

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main className='container flex flex-col items-center justify-center w-full min-h-screen mx-auto space-y-6 bg-slate-900'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-6xl font-bold text-catalina-blue-900'>404</h1>
				<p className='text-xl font-medium capitalize text-amber-500'>page not found</p>
			</div>
			<Link
				to='/'
				className='px-5 py-2 font-semibold text-neutral-300 transition-all duration-300 rounded-lg bg-catalina-blue-900 hover:bg-amber-500'
			>
				Go home
			</Link>
		</main>
	)
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
