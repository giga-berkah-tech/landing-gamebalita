import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Import react scroll
import { Link as LinkScroll } from 'react-scroll';
import LogoVPN from '../../public/assets/Logo.svg';
import Logo from '../misc/Logo';
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          'fixed top-0 w-full  z-50 bg-white-500 transition-all h-100' +
          (scrollActive ? ' shadow-md pt-0' : ' pt-4')
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <LogoVPN className="h-8 w-auto" />
             */}
            <Logo></Logo>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'about'
                  ? ' text-purple-500 animation-active '
                  : ' text-black-500 hover:text-purple-500 a')
              }
            >
              Tentang
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-50}
              onSetActive={() => {
                setActiveLink('contact');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'contact'
                  ? ' text-purple-500 animation-active '
                  : ' text-black-500 hover:text-purple-500 a')
              }
            >
              Kontak Kami
            </LinkScroll>
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-center items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'about'
                  ? '  border-purple-500 text-purple-500'
                  : ' border-transparent')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Tentang
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('contact');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'contact'
                  ? '  border-purple-500 text-purple-500'
                  : ' border-transparent ')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Kontak Kami
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
