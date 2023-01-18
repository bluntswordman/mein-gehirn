import brand from 'assets/svg/logo.svg'
import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { RiCloseLine, RiMenu4Line } from 'react-icons/ri'
import styled from 'styled-components'

interface MainLayoutProps {
  children?: React.ReactNode
  className?: string
}

const Mail = styled.a`
	writing-mode: vertical-rl;
	letter-spacing: 0.08em;
`

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollPosition(window.pageYOffset)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className='bg-slate-900 text-neutral-50'>
      <header
        className={`w-full border-b border-slate-800 px-5 md:px-10 flex z-50 flex-row items-center justify-between fixed transform duration-300 bg-slate-900 ${scrollPosition > 185 ? 'h-12' : 'h-16'
          }`}
      >
        <Link
          to='/'
          data-aos="flip-left"
          data-aos-duration='600'
          className='hover:scale-125 hover:rotate-6 duration-300 transition-all'
        >
          <img
            src={brand}
            alt='my logo'
            className={`transform duration-300 ${scrollPosition > 185 ? 'h-8 w-8' : 'h-12 w-12'}`}
          />
        </Link>
        <nav
          className={`flex flex-col items-center bg-slate-900 w-full h-screen px-10 py-12 space-y-5 fixed top-[64px] z-50 left-0 transform duration-500 ${isOpen ? 'translate-x-[25%]' : 'translate-x-full'
            } md:w-fit md:space-y-0 md:px-0 md:py-0 md:h-16 md:translate-x-0 md:flex-row md:space-x-10 md:items-center md:static`}
        >
          <Link
            to='/about'
            className={`flex flex-row items-center space-x-4 justify-start w-full`}
          >
            <span className={`font-black text-amber-500 transform duration-300 ${scrollPosition > 185 ? 'text-xs' : 'text-sm'}`}>{`01.`}</span>
            <p
              className={`font-semibold text-neutral-300 hover:text-amber-500 transition-all duration-300 transform ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
                }`}
            >
              About
            </p>
          </Link>
          <Link
            to='/portfolio'
            className='flex flex-row items-center space-x-4 justify-start w-full'
          >
            <span className={`font-black text-amber-500 transform duration-300 ${scrollPosition > 185 ? 'text-xs' : 'text-sm'}`}>{`02.`}</span>
            <p
              className={`text-sm font-semibold text-neutral-300 hover:text-amber-500 transition-all duration-300 transform ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
                }`}
            >
              Portfolio
            </p>
          </Link>
          <Link
            to='/contact'
            className='flex flex-row items-center space-x-4 justify-start w-full'
          >
            <span className={`font-black text-amber-500 transform duration-300 ${scrollPosition > 185 ? 'text-xs' : 'text-sm'}`}>{`03.`}</span>
            <p
              className={`text-sm font-semibold text-neutral-300 hover:text-amber-500 transition-all duration-300 transform ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
                }`}
            >
              Contact
            </p>
          </Link>
          <div className='flex flex-row items-center justify-start w-full'>
            <a
              href='/'
              className={`border-2 border-amber-500 rounded-md font-bold text-neutral-50 bg-slate-900 hover:border-amber-700 transition-all duration-300 transform ${scrollPosition > 185 ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-sm'
                }`}
            >
              Resume
            </a>
          </div>
        </nav>
        <button
          className='md:hidden'
          onClick={() => setIsOpen(!isOpen)}
          data-aos="flip-left"
          data-aos-duration='600'
        >
          {isOpen ? (
            <RiCloseLine
              className={`text-amber-500 font-black transform duration-300 ${scrollPosition > 185 ? 'w-6 h-6' : 'w-8 h-8'}`}
            />
          ) : (
            <RiMenu4Line
              className={`text-amber-500 font-black transform duration-300 ${scrollPosition > 185 ? 'w-6 h-6' : 'w-8 h-8'}`}
            />
          )}
        </button>
      </header>
      <div className='fixed bottom-0 left-14 z-40 hidden lg:block'>
        <div className='flex flex-col justify-center items-center space-y-5'>
          <div className='flex flex-col justify-center space-y-5'>
            <a
              href='https://github.com/bluntswordman'
              className='flex flex-col justify-center'
              data-aos="flip-left"
              data-aos-duration='600'
            >
              <BsGithub className='w-6 h-6 text-neutral-300 hover:text-amber-500 transition-all duration-300 hover:scale-125' />
            </a>
            <a
              href='https://www.linkedin.com/in/bedy-b-wijaya'
              className='flex flex-col justify-center'
              data-aos="flip-left"
              data-aos-duration='600'
            >
              <BsLinkedin className='w-6 h-6 text-neutral-300 hover:text-amber-500 transition-all duration-300 hover:scale-125' />
            </a>
            <a
              href='https://www.instagram.com/_brln.by'
              className='flex flex-col justify-center'
              data-aos="flip-left"
              data-aos-duration='600'
            >
              <BsInstagram className='w-6 h-6 text-neutral-300 hover:text-amber-500 transition-all duration-300 hover:scale-125' />
            </a>
          </div>
          <span className='border h-28 rounded-full border-neutral-300 animate-pulse'></span>
        </div>
      </div>
      <div className='fixed bottom-0 right-14 z-40 hidden lg:block'>
        <div className='flex flex-col justify-center items-center space-y-5'>
          <Mail
            href='mailto:brln.by@gmail.com'
            className='text-neutral-50 hover:text-amber-500 hover:scale-125 transition-all duration-300 text-base font-medium animate-pulse hover:animate-none'
            data-aos="flip-right"
            data-aos-duration='600'
          >
            brln.by@gmail.com
          </Mail>
          <span className='border border-neutral-300 rounded-full h-16'></span>
        </div>
      </div>
      <main className={`min-h-fit w-full pt-20 px-5 md:px-28 z-0 ${className} ${isOpen ? 'blur-sm' : 'blur-none'}`}>{children}</main>
      <footer className={`min-h-fit w-full z-0 ${className} ${isOpen ? 'blur-sm' : 'blur-none'}`}></footer>
    </div>
  )
}

export default MainLayout
