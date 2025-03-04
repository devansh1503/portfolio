import React from 'react'
import Code from './Code'

const page = () => {
  return (
    <div style={{backgroundColor:"rgb(1,22,39)", width:"100%", display:'flex'}}>
        <div style={{padding:"20px", width:'50%'}}>
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
        <div className='orange-font' style={{borderLeft:'1px solid rgb(116, 151, 180, 0.2)', height:"90vh", padding:"10px",}}>
            <p>//OUTPUT-</p>
            <div className='comment-font' style={{backgroundColor:"black", marginTop:"30px", padding:'20px'}}>
              <p style={{marginBottom:"20px"}}>👋 Hi, I'm Devansh. I'm a Software Engineer passionate about coding and problem-solving.</p>
              <p style={{marginBottom:"20px"}}>
              🎓 Education:
                <p>Chitkara University, B.E. in Computer Science | CGPA: 9.62/10.0</p>
              </p>
              <p>
              💼 Work Experience:
                <p>Software Engineer at Onsite Electro Service (Aug 2024 – Present)</p>
                <p>- Upgraded React Native framework from v0.72 to v0.76, improving app performance by 20%.</p>
                <p>- Implemented ad-hoc SKU creation, reducing product configuration time by 30%.</p>
                <p>- Led ERP migration from SAP to ERPNext, enhancing system functionality.</p>
                <p style={{marginBottom:"20px"}}>- Contributed to schema redesign for a scalable, multi-incentive handling structure.</p>

                <p>Software Engineer Intern at Onsite Electro Service (June 2023 – July 2024)</p>
                <p>- Enhanced backend security with encryption and Redis caching (ISO 27001 compliant).</p>
                <p>- Developed a referral program, increasing monthly revenue by 15%.</p>
                <p>- Built a React & Django-based portal, saving 10+ hours/week for product and sales teams.</p>
              </p>
            </div>
        </div>
    </div>
  )
}

export default page