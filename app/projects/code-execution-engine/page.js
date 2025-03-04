'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown';

const page = () => {
    const [content, setContent] = useState("");

    const fetchContent = async() => {
        await axios.get('https://raw.githubusercontent.com/devansh1503/Code-Execution-System-Backend/refs/heads/main/README.md')
            .then((res)=>{
                setContent(res.data)
            })
            .catch((err)=>console.log(err))
    }

  useEffect(() => {
    fetchContent()
  }, []);
  return (
    <div style={{backgroundColor:"rgb(1,22,39)", width:"100%", display:'flex'}}>
        <div style={{color:'rgb(241,224,90)', padding:'20px', paddingLeft:"40px", height:'80vh', overflow:'scroll'}}>
            <Link className='orange-font' style={{textDecoration:'none', fontSize:"21px"}} href={'https://github.com/devansh1503/Code-Execution-System-Backend'}>See on Github</Link>
            <Markdown>{content}</Markdown>
        </div>
    </div>
  )
}

export default page