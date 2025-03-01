import Image from 'next/image'
import React from 'react'

const page = () => {
    const objects =  [
        {
            "title":"java",
            "icon":"https://cdn-icons-png.flaticon.com/512/226/226777.png",
            "done":true,
        },
        {
            "title":"javascript",
            "icon":"https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            "done":true,
        },
        {
            "title":"python",
            "icon":"https://cdn-icons-png.flaticon.com/512/1387/1387537.png",
            "done":true,
        },
        {
            "title":"c++",
            "icon":"https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
            "done":true,
        },
        {
            "title":"c#",
            "icon":"https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
            "done":false,
        },
        {
            "title":"SQL",
            "icon":"https://cdn-icons-png.flaticon.com/512/2305/2305934.png",
            "done":true,
        },
        {
            "title":"kotlin",
            "icon":"https://cdn.iconscout.com/icon/free/png-256/free-kotlin-logo-icon-download-in-svg-png-gif-file-formats--company-brand-social-media-logos-icons-1720086.png?f=webp",
            "done":false,
        },
        {
            "title":"typescript",
            "icon":"https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
            "done":false,
        },
    ]
  return (
    <div style={{backgroundColor:"rgb(1,22,39)", color:"white", padding:"60px", width:"100%"}}>
        <div style={{width:'80%'}}>
            <h1>programming-languages</h1>
            <p className='comment-font' style={{marginTop:'10px'}}>// programming languages I have learned or am learning</p>
            <div style={{
                padding:'30px',
                marginTop:"40px", 
                backgroundColor:'rgb(1,18,33)', 
                borderRadius:"15px",
                display:'flex',
                flexWrap:'wrap',
                // width:"70%"
                }}>
                {
                    objects.map((item, key)=>{
                        return(
                            <div key={key} style={{display:'flex', margin:'30px'}}>
                                <input type='checkbox' style={{width:'35px', marginRight:'20px'}} checked={item.done} readOnly></input>
                                <Image src={item.icon} width={35} height={35} alt='language'></Image>
                                <p style={{marginLeft:"10px", marginRight:'20px', fontSize:'25px'}}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default page