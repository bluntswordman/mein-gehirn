import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineArrowUp } from 'react-icons/ai'

interface BaseLayoutProps {
  children?: React.ReactNode
  className?: string
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollPosition(window.pageYOffset)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed flex flex-row items-center justify-between w-full px-4 bg-white shadow-md md:px-10 transform duration-500 z-[1] ${scrollPosition > 185 ? 'h-10' : 'h-16'
          }`}
      >
        <h1 className='flex flex-row items-center'>
          <Link
            to='/'
            className={`font-bold text-catalina-blue-900 transform duration-500 ${scrollPosition > 185 ? 'text-lg ' : 'text-2xl'
              }`}
          >
            brln.by
          </Link>
        </h1>
        <nav className='flex flex-row'>
          <button
            className='block md:hidden text-catalina-blue-900'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu
              className={`transform duration-500 ${scrollPosition > 185 ? 'w-4 h-4' : 'w-6 h-6'
                }`}
            />
          </button>
          <div
            className={`fixed left-0 right-0 min-h-screen bg-white md:bg-transparent flex flex-col py-20 items-center space-y-3 transform duration-500 md:static md:flex-row md:translate-x-0 md:min-h-0 md:top-0 md:space-x-2 md:space-y-0 capitalize font-semibold ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } ${scrollPosition > 185 ? 'top-12' : 'top-[74px]'}`}
          >
            <a
              href='https://github.com/bluntswordman'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center justify-center space-x-5 duration-300 md:flex-none space-transition-all text-catalina-blue-900 hover:text-catalina-blue-700'
            >
              <FaGithubSquare
                className={`w-8 h-8 md:transform md:duration-500 ${scrollPosition > 185 ? 'md:w-5 md:h-5' : 'md:w-8 md:h-8'
                  }`}
              />
              <span
                className={`md:hidden md:transform md:duration-500 ${scrollPosition > 185 ? 'md:text-sm' : 'md:text-base'
                  }`}
              >
                Github
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/bedy-b-wijaya/'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center justify-center space-x-5 duration-300 space-transition-all text-catalina-blue-900 hover:text-catalina-blue-700 md:flex-none'
            >
              <FaLinkedin
                className={`w-8 h-8 md:transform md:duration-500 ${scrollPosition > 185 ? 'md:w-5 md:h-5' : 'md:w-8 md:h-8'
                  }`}
              />
              <span
                className={`md:hidden md:transform md:duration-500 ${scrollPosition > 185 ? 'md:text-sm' : 'md:text-base'
                  }`}
              >
                LinkedIn
              </span>
            </a>
            <a
              href='https://www.instagram.com/_brln.by/'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center justify-center space-x-5 duration-300 space-transition-all text-catalina-blue-900 hover:text-catalina-blue-700 md:flex-none'
            >
              <FaInstagramSquare
                className={`w-8 h-8 md:transform md:duration-500 ${scrollPosition > 185 ? 'md:w-5 md:h-5' : 'md:w-8 md:h-8'
                  }`}
              />
              <span
                className={`md:hidden md:transform md:duration-500 ${scrollPosition > 185 ? 'md:text-sm' : 'md:text-base'
                  }`}
              >
                Github
              </span>
            </a>
          </div>
        </nav>
      </header>
      <main className={`${className} pt-16 pb-5`}>{children}</main>
      <footer className='flex flex-col items-center justify-center w-full px-4 py-2 bg-white min-h-fit'>
        {`© ${new Date().getFullYear()} Bedy B Wijaya`}
      </footer>
      <div
        className={`w-10 h-10 fixed bottom-10 sm:bottom-5 right-3 sm:right-10 bg-catalina-blue-900 hover:bg-catalina-blue-700 rounded-full flex flex-row justify-center items-center transition-all duration-300 ${scrollPosition >= 250 ? 'opacity-100' : 'opacity-0'}`}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`cursor-pointer ${scrollPosition >= 250 ? 'block delay-100' : 'hidden'}`}>
          <AiOutlineArrowUp className='w-6 h-6 text-white m-auto' />
        </button>
      </div>
    </>
  )
}

export default BaseLayout
