'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const colors = ['orange-font', 'cyan-font', 'blue-font',]

const Sidebar = (props) => {
  const [currFile, setFile] = useState(0);
  const rotateStyle = {
    rotate:'270deg'
  }
  return (
    <div style={{
      // position:'absolute',
      padding:'20px',
      color:"white",
      // fontSize:'19px',
      borderRight:'1px solid rgb(116, 151, 180, 0.2)',
      height:"90vh",
      cursor:'pointer',
    }}>
      {props.objects.map((item, key)=>{
        return (
          <div key={key} style={{marginBottom:"20px"}}>
            <div onClick={()=>setFile(key)} style={{display:"flex", color:(currFile==key?"white":"rgb(116, 151, 180, 0.7)")}}>
              {"> "}<Image style={{marginInline:"10px"}} src={"https://img.icons8.com/ios11/512/FFFFFF/folder-invoices.png"} width={22} height={22} alt='folder'></Image>{ item.head}
            </div>
            {
            (currFile == key) && 
            <div>
              <Insider objects={item.files}/>
            </div>
            }
          </div>
        )
      })}
    </div>
  )
}

const Insider = (props) => {
  return (
    <div>
      {props.objects.map((item, key)=>{
        return (
          <div key={key} style={{marginLeft:"22px", marginTop:'10px'}}>
            <Link href={item.link} className={colors[key%props.objects.length]} style={{textDecoration:'none'}}>
              {item.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar