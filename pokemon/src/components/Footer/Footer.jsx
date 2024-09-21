import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='credit'>
        <h3 >
        <i>Developed By</i> Anurag prajapati
      </h3>
      <div className='social-accounts'>

     <div onClick={()=>window.open('https://github.com/anurag-prajapati34?tab=repositories','_blank')}  className='social'> <i class="fa-brands fa-github"></i></div>
      <div onClick={()=>window.open('https://www.linkedin.com/in/anurag-prajapati34/','_blank')} className='social'><i class="fa-brands fa-linkedin"></i></div>

      </div>

    </div>
  )
}
