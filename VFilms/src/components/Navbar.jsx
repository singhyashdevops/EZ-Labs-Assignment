import React, { useState } from 'react'
import message from '../icons/envelope.png'
import open from '../assets/open.png'
import close from '../assets/close.png'
import logo from '../assets/logo.png'

export default function Navbar() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShow(false);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <img height={30} src={logo} alt='logo' />
        <div className={`cross ${show ? 'show-cross' : 'hide-cross'}`}>
          <a onClick={() => handleScroll("services")}><h5>Services</h5></a>
          <a onClick={() => handleScroll("aboutTeam")}><h5>About Team</h5></a>
          <a onClick={() => handleScroll("aboutUs")}><h5>About Us</h5></a>
          <a onClick={() => handleScroll("varnan")}><h5>Varnan</h5></a>
          <a onClick={() => handleScroll("contact")}><h5>Let's Talk <img src={message} height={15} alt="msg" /></h5></a>
        </div>

        <div onClick={() => setShow(!show)}>
          {!show
            ? <img src={open} height={18} alt='open menu' />
            : <img src={close} height={18} alt='close menu' />}
        </div>
      </nav>
    </>
  )
}
