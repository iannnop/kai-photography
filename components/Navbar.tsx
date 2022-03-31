import Link from "next/link"

import { CameraIcon, HomeIcon, MailIcon, PencilAltIcon, UserIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router"
import { ReactNode, useState } from "react";

interface NavItemProps {
  href: string;
  text: string;
  children: ReactNode;
}

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-50 bottom-0 left-0 w-full bg-neutral-900 text-neutral-300 bg-opacity-80">
        <ul className="flex">
          <NavItem href='/' text='Home' >
            <HomeIcon className="w-5 h-5" />
          </NavItem>
          <NavItem href='/about' text='About'>
            <UserIcon className="w-5 h-5" />
          </NavItem>
          <NavItem href='/blog' text='Blog' >
            <PencilAltIcon className="w-5 h-5" />
          </NavItem>
          <NavItem href='/photography' text='Photography' >
            <CameraIcon className="w-5 h-5" />
          </NavItem>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

const NavItem = ({ href, text, children }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <li className={`relative flex-1 flex ${ isActive && 'text-orange-600'} group`}>
      <Link href={ href }>
        <a className="py-2 flex flex-col items-center flex-grow">
          { children }
        </a>
      </Link>
      <span className="absolute pointer-events-none text-center w-full origin-bottom bottom-12 duration-150 sm:scale-0 group-hover:scale-100">
        <span className="hidden sm:inline-block bg-stone-800 bg-opacity-90 px-4 rounded-md shadow-md max-w-min">
          {text}
        </span>
      </span>
    </li>
  )
}