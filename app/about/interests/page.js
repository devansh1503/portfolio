import React from 'react'
import Code from './Code'

const page = () => {
  return (
    <div style={{backgroundColor:"rgb(1,22,39)", width:"100%", display:'flex'}}>
        <div style={{padding:"20px", width:'60%'}}>
            <div className='cyan-font' style={{
                padding:'30px',
                backgroundColor:'rgb(1,18,33)', 
                borderRadius:"15px",
                display:'flex',
                flexWrap:'wrap',
                height:'80vh',
                overflow:"scroll",
            }}>
                <Code/>
            </div>
        </div>
        <div className='orange-font' style={{borderLeft:'1px solid rgb(116, 151, 180, 0.2)', height:"90vh", padding:"10px"}}>
            <p>//OUTPUT-</p>
            <div className='blue-font' style={{backgroundColor:"black", marginTop:"30px", padding:'20px'}}>
                <p style={{marginBottom:"30px"}}>Hi, I'm Devansh, 23 years old, and I have some fascinating hobbies!</p>
                <p>Here are the things I love to do:</p>
                <p>📸 I capture moments that tell a story, freezing time with my lens.</p>
                <p>📝 I create worlds with words, letting my imagination run wild on paper.</p>
                <p>💻 I bring ideas to life through code, solving problems and building solutions.</p>
                <p>🎨 I paint with pixels, expressing creativity through digital brushes.</p>
            </div>
        </div>
    </div>
  )
}

export default page