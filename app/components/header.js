'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './navigation';

export default function Header() {

  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);  

  return (
    <div className="Header">
      <div className="Header_Sections">
        <div className="Logo">
          <Link href="/">Heintz Enterprize</Link>
        </div>

        <div className="Mobile_Navigation" style={{ padding: "20px" }}>
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Hide" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Hide" }>X</button>
        </div>  
      </div>

      <div className={ mobileMenu ? "" : "Hide" }>
        <Navigation />
      </div>
    </div>    
  )
}
