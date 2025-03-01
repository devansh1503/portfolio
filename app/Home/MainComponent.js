import React from 'react'

const MainComponent = () => {
  return (
    <div>
      <div style={{
        color:"white", 
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:'15%',
        marginTop:'10%',
        textAlign:"left"
      }}>
        <p style={{fontSize:"22px"}}>Hi all. I am</p>
        <h1 style={{fontSize:'50px'}}>Devansh Abrol</h1>
        <p className='blue-font' style={{fontSize:'35px'}}>{'>'} Full-stack developer </p>

        <div style={{marginTop:'30px', fontSize:'18px'}}>
          <p style={{marginTop:'15px', color:'rgb(116, 151, 180, 0.7)'}}>{"//"} My Number</p>
          <div style={{display:'flex'}}><p className='blue-font' style={{marginRight:'10px'}}>const</p><p style={{marginRight:'10px'}} className='cyan-font'>mobileNum</p> <p style={{marginRight:'10px'}}>=</p><p className='orange-font'>"+91-8558906689";</p></div>

          <p style={{marginTop:'15px', color:'rgb(116, 151, 180, 0.7)'}}>{"//"} My e-mail</p>
          <div style={{display:'flex'}}><p className='blue-font' style={{marginRight:'10px'}}>const</p><p style={{marginRight:'10px'}} className='cyan-font'>email</p> <p style={{marginRight:'10px'}}>=</p><p className='orange-font'>"abroldevansh1503@gmail.com";</p></div>

          <p style={{marginTop:'15px', color:'rgb(116, 151, 180, 0.7)'}}>{"//"} find my github profile below</p>
          <div style={{display:'flex'}}><p className='blue-font' style={{marginRight:'10px'}}>const</p><p style={{marginRight:'10px'}} className='cyan-font'>githubLink</p> <p style={{marginRight:'10px'}}>=</p><p className='orange-font'>"https://github.com/devansh1503";</p></div>

          <p style={{marginTop:'15px', color:'rgb(116, 151, 180, 0.7)'}}>{"//"} find my linkedin profile below</p>
          <div style={{display:'flex'}}><p className='blue-font' style={{marginRight:'10px'}}>const</p><p style={{marginRight:'10px'}} className='cyan-font'>linkedinProfile</p> <p style={{marginRight:'10px'}}>=</p><p className='orange-font'>"https://www.linkedin.com/in/devansh-abrol-46463b201/";</p></div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent