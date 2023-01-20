import brand from 'assets/svg/logo.svg';
import {Link} from 'gatsby';
import React, {useEffect, useState} from 'react';
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FiArrowUpCircle} from 'react-icons/fi';
import {RiCloseLine, RiMenu4Line} from 'react-icons/ri';
import styled from 'styled-components';

interface MainLayoutProps {
  children?: React.ReactNode
  className?: string
}

const Mail = styled.a`
  writing-mode: vertical-rl;
  letter-spacing: 0.08em;
`;

const MainLayout: React.FC<MainLayoutProps> = ({children, className}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-slate-900 text-neutral-50">
      <header
        className={`w-full border-b border-slate-800 px-5 md:px-10 flex z-50 flex-row items-center justify-between fixed transform duration-300 bg-slate-900 ${scrollPosition > 185 ? 'h-12 bg-opacity-80' : 'h-16'}`}
      >
        <Link
          to="/"
          data-aos="flip-left"
          data-aos-duration="600"
          className="hover:scale-125 hover:rotate-6 duration-300 transition-all"
        >
          <img
            src={brand}
            alt="my logo"
            className={`transform duration-300 ${scrollPosition > 185 ? 'h-8 w-8' : 'h-12 w-12'}`}
          />
        </Link>
        <nav
          className={`flex flex-col items-center bg-slate-900 md:bg-transparent w-full h-screen px-10 py-12 space-y-5 fixed top-[64px] z-50 left-0 transform duration-500 ${isOpen ? 'translate-x-[25%]' : 'translate-x-full'
          } md:w-fit md:space-y-0 md:px-0 md:py-0 md:h-16 md:translate-x-0 md:flex-row md:space-x-10 md:items-center md:static`}
        >
          <Link
            to="/about"
            data-aos="fade-right"
            data-aos-duration="700"
            className={`flex flex-row items-center space-x-4 justify-start w-full`}
          >
            <span
              className={`font-black text-amber-500 transform duration-300 ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
              }`}
            >{`01.`}</span>
            <p
              className={`font-semibold text-neutral-300 hover:text-amber-500 transition-all duration-300 transform ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
              }`}
            >
              About
            </p>
          </Link>
          <Link
            to="/portfolio"
            data-aos="fade-right"
            data-aos-duration="700"
            className="flex flex-row items-center space-x-4 justify-start w-full"
          >
            <span
              className={`font-black text-amber-500 transform duration-300 ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
              }`}
            >{`02.`}</span>
            <p
              className={`text-sm font-semibold text-neutral-300 hover:text-amber-500 transition-all duration-300 transform ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
              }`}
            >
              Portfolio
            </p>
          </Link>
          <Link
            to="/contact"
            data-aos="fade-right"
            data-aos-duration="700"
            className="flex flex-row items-center space-x-4 justify-start w-full"
          >
            <span
              className={`font-black text-amber-500 transform duration-300 ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
              }`}
            >{`03.`}</span>
            <p
              className={`text-sm font-semibold text-neutral-300 hover:text-amber-500 transition-all duration-300 transform ${scrollPosition > 185 ? 'text-xs' : 'text-sm'
              }`}
            >
              Contact
            </p>
          </Link>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="flex flex-row items-center justify-start w-full"
          >
            <a
              href="/"
              className={`border-2 border-amber-500 rounded-md font-bold text-neutral-50 bg-slate-900 hover:border-amber-700 transition-all duration-300 transform ${scrollPosition > 185 ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-sm'}`}
            >
              Resume
            </a>
          </div>
        </nav>
        <button
          data-aos="flip-left"
          className="md:hidden"
          data-aos-duration="600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiCloseLine
              className={`text-amber-500 font-black transform duration-300 ${scrollPosition > 185 ? 'w-6 h-6' : 'w-8 h-8'
              }`}
            />
          ) : (
            <RiMenu4Line
              className={`text-amber-500 font-black transform duration-300 ${scrollPosition > 185 ? 'w-6 h-6' : 'w-8 h-8'
              }`}
            />
          )}
        </button>
      </header>
      <div className="fixed bottom-0 md:right-5 lg:left-14 lg:right-auto z-40 hidden md:block">
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className="flex flex-col justify-center space-y-5">
            <a
              target="_blank"
              data-aos="flip-left"
              data-aos-duration="600"
              href="https://github.com/bluntswordman"
              className="flex flex-col justify-center" rel="noreferrer"
            >
              <BsGithub className="w-6 h-6 text-neutral-300 hover:text-amber-500 transition-all duration-300 hover:scale-125" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bedy-b-wijaya"
              className="flex flex-col justify-center"
              data-aos="flip-left"
              data-aos-duration="600" rel="noreferrer"
            >
              <BsLinkedin className="w-6 h-6 text-neutral-300 hover:text-amber-500 transition-all duration-300 hover:scale-125" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/_brln.by"
              className="flex flex-col justify-center"
              data-aos="flip-left"
              data-aos-duration="600" rel="noreferrer"
            >
              <BsInstagram className="w-6 h-6 text-neutral-300 hover:text-amber-500 transition-all duration-300 hover:scale-125" />
            </a>
          </div>
          <span className="border md:h-56 lg:h-28 rounded-full border-neutral-300 animate-pulse" />
        </div>
      </div>
      <div className="fixed lg:bottom-[300px] lg:right-14 md:top-16 md:right-5 z-40 hidden md:block">
        <div className="flex flex-col justify-center items-center space-y-6">
          <span className="border border-neutral-300 rounded-full h-36" />
          <Mail
            href="mailto:brln.by@gmail.com"
            data-aos="flip-right"
            data-aos-duration="600"
            className="text-neutral-50 hover:text-amber-500 hover:scale-125 transition-all duration-300 text-base font-medium md:animate-none lg:animate-pulse lg:hover:animate-none"
          >
            brln.by@gmail.com
          </Mail>
        </div>
      </div>
      <main
        className={`min-h-fit w-full pt-20 px-5 md:px-10 lg:px-28 z-0 ${className} ${isOpen ? 'blur-sm' : 'blur-none'
        }`}
      >
        {children}
      </main>
      <footer
        className={`min-h-fit w-full z-0 flex flex-col justify-center items-center py-3 ${className} ${isOpen ? 'blur-sm' : 'blur-none'
        }`}
      >
        <h2 className="font-semibold text-sm text-neutral-300">{`© ${new Date().getFullYear()} Bedy B Wijaya`}</h2>
      </footer>
      <button
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        data-aos="fade-up"
        data-aos-mirror="true"
        data-aos-duration="600"
        data-aos-easing="ease-in-out-quart"
        className={`fixed bottom-5 right-5 md:right-14 z-50 p-1 bg-slate-800 hover:bg-amber-500 transition-all ease-in-out duration-300 rounded-full flex flex-col justify-center items-center ${scrollPosition > 150 ? 'block' : 'hidden'
        }`}
      >
        <FiArrowUpCircle className="w-6 h-6 text-slate-900" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default MainLayout;
