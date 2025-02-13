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
          <Link href="/"><h5>Heintz Enterprize</h5></Link>
        </div>

        <div className="Mobile_Menu" style={{ padding: "20px" }}>
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
        </div>  
      </div>

      <div className={ mobileMenu ? "Menu_Visible" : "Menu" }>
        <Navigation />
      </div>
    </div>    
  )
}
