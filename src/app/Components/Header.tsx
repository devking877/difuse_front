import { Dropdown, Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled]=useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <Navbar
      fluid
      rounded
      className={`px-5 pt-4 sticky top-0 bg-[#d6dbdc] z-10`}
    >
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/logo.svg"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Home
        </Navbar.Link>
        <Navbar.Link>
          <Dropdown label="Products" inline arrowIcon={true}>
            <Dropdown.Item href='/products/dmsbg100'>DMSBG-100</Dropdown.Item>
            <Dropdown.Item href='/products/dpbx50'>DPBX-50</Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link href="/about">
          About Us
        </Navbar.Link>
        <Navbar.Link>
          <Dropdown label="Support" inline arrowIcon={true}>
            <Dropdown.Item href='https://docs.difuse.io/'>Documentation</Dropdown.Item>
            <Dropdown.Item href='https://forum.difuse.io/'>Forum</Dropdown.Item>
            <Dropdown.Item href='/contact'>Contact Us</Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link href='/contact'>
          1800-599-TECH
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}