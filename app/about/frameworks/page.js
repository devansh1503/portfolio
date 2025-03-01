import Image from 'next/image'
import React from 'react'

const page = () => {
    const objects =  [
        {
            "title":"react.js",
            "icon":"https://cdn-icons-png.flaticon.com/512/919/919851.png",
            "done":true,
        },
        {
            "title":"next.js",
            "icon":"https://www.cdnlogo.com/logos/n/80/next-js.svg",
            "done":false,
        },
        {
            "title":"react-native",
            "icon":"https://cdn-icons-png.flaticon.com/512/3334/3334886.png",
            "done":true,
        },
        {
            "title":"node.js",
            "icon":"https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
            "done":true,
        },
        {
            "title":"django",
            "icon":"https://cdn-icons-png.flaticon.com/512/9307/9307630.png",
            "done":true,
        },
        {
            "title":"express.js",
            "icon":"https://img.icons8.com/nolan/512/express-js.png",
            "done":true,
        },
        {
            "title":"mongo-db",
            "icon":"https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
            "done":true,
        },
        {
            "title":"redis",
            "icon":"https://cdn.iconscout.com/icon/free/png-256/free-redis-icon-download-in-svg-png-gif-file-formats--open-source-logo-sign-symbols-icons-83994.png",
            "done":true,
        },
        {
          "title":"rabbitmq",
          "icon":"https://static-00.iconduck.com/assets.00/rabbitmq-icon-484x512-s9lfaapn.png",
          "done":false,
        },
        {
          "title":"scikit-learn",
          "icon":"https://cdn-icons-png.flaticon.com/512/6985/6985703.png",
          "done":true,
        },
        {
          "title":"pandas",
          "icon":"https://img.icons8.com/color/512/pandas.png",
          "done":true,
        },
    ]
  return (
    <div style={{backgroundColor:"rgb(1,22,39)", color:"white", padding:"60px", width:"100%"}}>
        <div style={{width:'100%'}}>
            <h1>frameworks-and-libraries</h1>
            <p className='comment-font' style={{marginTop:'10px'}}>// frameworks and libraries that I have learned or am learning</p>
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