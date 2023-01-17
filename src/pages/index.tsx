import type { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { Cirle } from '../components/Miscellaneous'
import BaseLayout from '../layouts/Base.layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <BaseLayout>
      <Cirle className='right-14 top-28' />
      <Cirle className='left-14 top-28' />
      <Cirle className='left-96 top-56' />
      <Cirle className='right-[32rem] bottom-56' />
      <Cirle className='left-[30rem] top-[50rem]' />
      <div className='container flex flex-col items-center justify-start w-full min-h-screen px-2 pt-48 mx-auto space-y-4'>
        <h1 className='z-0 text-4xl font-bold text-center text-catalina-blue-900'>
          Selamat Datang di Website Saya
        </h1>
        <p className='z-0 text-xl font-normal text-center text-catalina-blue-900'>
          Saya adalah Seorang Fullstack Web Developer
        </p>
        <span className='z-0 text-lg font-normal text-center text-catalina-blue-900'>
          lebih lanjut tentang saya
        </span>
        <button
          className='z-0 text-catalina-blue-900 animate-bounce'
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
        >
          <HiOutlineChevronDoubleDown className='w-8 h-8' />
        </button>
      </div>
      <div className='container w-full min-h-screen px-2 mx-auto bg-gradient-to-r'></div>
      <div className='w-full min-h-screen bg-gradient-to-r'></div>
      <div className='flex items-center justify-center w-full min-h-screen'></div>
    </BaseLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Bedy B Wijaya</title>
