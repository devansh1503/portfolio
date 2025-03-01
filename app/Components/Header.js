'use client'

import Link from 'next/link'
import React from 'react'

const Header = () => {
    const handleDownload = () => {
        const resumeUrl = "/resume.pdf"; // Resume file in public folder
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "devansh_resume.pdf"; // File name after download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div style={{
        display:'flex',
        fontSize:'20px',
        borderBottom:'1px solid rgb(116, 151, 180, 0.2)',
        alignItems:'center'
    }}>
        <div className='cyan-font' style={{width:'15%', padding:'15px'}}>
            devansh-abrol
        </div>
        <div style={{width:'70%', display:'flex'}}>
            <div className='nav-header'><Link className='link-style' href={'/'}>_hello</Link></div>
            <div className='nav-header'><Link className='link-style' href={'/about'}>_about-me</Link></div>
            <div className='nav-header'><Link className='link-style' href={'/projects'}>_projects</Link></div>
        </div>
        <div onClick={()=>{handleDownload()}} className='cyan-font' style={{borderLeft:'1px solid rgb(116, 151, 180, 0.2)',padding:'15px', cursor:'pointer'}}>
            _download-resume
        </div>
    </div>
  )
}

export default Header