import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div style={{
        display:'flex',
        fontSize:'20px',
        borderTop:'1px solid rgb(116, 151, 180, 0.2)',
        alignItems:'center',
        position:'absolute',
        bottom:'0',
        width:'100%',
        backgroundColor:'rgb(1,22,39)'
    }}>
        <div className='cyan-font' style={{
            padding:'15px',
            width:"10%",
            borderRight:'1px solid rgb(116, 151, 180, 0.2)'
        }}>
            find me in:
        </div>
        <div style={{width:'75%', display:"flex"}}>
            <div style={{padding:'15px', borderRight:'1px solid rgb(116, 151, 180, 0.2)'}}>
                <Link href={'/'}>
                    <Image
                    src={'https://cdn-icons-png.flaticon.com/512/61/61109.png'}
                    width={25}
                    height={25}
                    alt='linkedin'
                    ></Image>
                </Link>
            </div>
            <div style={{padding:'15px', borderRight:'1px solid rgb(116, 151, 180, 0.2)'}}>
                <Link href={'/'}>
                    <Image
                    src={'https://cdn-icons-png.flaticon.com/512/733/733635.png'}
                    width={25}
                    height={25}
                    alt='twitter'
                    ></Image>
                </Link>
            </div>
        </div>
        <div className='cyan-font' style={{padding:'15px', borderLeft:'1px solid rgb(116, 151, 180, 0.2)', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{marginRight:'20px'}}>@devansh1503</p>
            <Link href={'/'}>
                <Image
                 src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}
                 width={25}
                 height={25}
                 alt='git'
                 ></Image>
            </Link>
        </div>
    </div>
  )
}

export default Footer