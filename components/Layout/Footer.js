import Logo from '../misc/Logo';
import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';
const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo />
          <p className="mb-4">
            <strong className="font-medium">Balita Belajar</strong> belajar
            bahasa Indonesia mudah dengan suara dan gambar
          </p>

          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Balita Belajar
          </p>
        </div>
        <div className=" row-span-4 sm:col-span-3 sm:col-start-7 sm:col-end-10 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Navigasi</p>
          <ul className="text-black-500 flex flex-row gap-8">
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all whitespace-nowrap">
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
              >
                Tentang
              </LinkScroll>
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all whitespace-nowrap">
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
              >
                Kontak Kami
              </LinkScroll>
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all whitespace-nowrap">
              {/* <LinkScroll
                activeClass="active"
                to="privacy-policy"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-50}
                onSetActive={() => {
                  setActiveLink('privacy-policy');
                }}
              >
                Kebijakan & Privasi
              </LinkScroll> */}

              <Link href="/privacy-policy"> Kebijakan & Privasi</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
