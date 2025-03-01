import Image from 'next/image'
import React from 'react'

const page = () => {
    const objects =  [
        {
            "title":"git",
            "icon":"https://cdn-icons-png.flaticon.com/512/733/733609.png",
            "done":true,
        },
        {
            "title":"jira",
            "icon":"https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
            "done":true,
        },
        {
            "title":"data-structures-and-algorithms",
            "icon":"https://cdn-icons-png.flaticon.com/512/8637/8637656.png",
            "done":true,
        },
        {
            "title":"docker",
            "icon":"https://cdn-icons-png.flaticon.com/512/919/919853.png",
            "done":true,
        },
        {
            "title":"linux",
            "icon":"https://cdn-icons-png.flaticon.com/512/518/518713.png",
            "done":true,
        },
        {
          "title":"system-design",
          "icon":"https://cdn-icons-png.flaticon.com/512/7655/7655685.png",
          "done":false,
      },
    ]
  return (
    <div style={{backgroundColor:"rgb(1,22,39)", color:"white", padding:"60px", width:"100%"}}>
        <div style={{width:'80%'}}>
            <h1>tools-and-other-skills</h1>
            <p className='comment-font' style={{marginTop:'10px'}}>// tools and other skills I have learned or am learning</p>
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