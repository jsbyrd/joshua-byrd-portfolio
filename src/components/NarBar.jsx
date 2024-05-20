import { navLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { menu, close } from '../assets';

const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex items-center py-5 fixed top-0 z-20 bg-primary'>
      <div className='w-full flex justify-between items-center ml-10 mr-10'>
        <Link to='/' className='flex items-center gap-2'>
          <p className='text-white text-[28px] font-bold flex'>
            Joshua Byrd
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-6'>
          {
            navLinks.map((link) => {
              return (
                <li key={link.id} className='cursor-pointer text-[20px] text-quaternary hover:text-white'>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )
            })
          }
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center' >
          <img
            src={toggle ? close : menu}
            alt='menu icon'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-secondary to-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-quaternary hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>  
    </nav>
  )
}

export default NavBar;