import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import {navbar} from './styles/Navbar.css';

const Navbar = () => {
  return (
    <div className={navbar}>
        <a href='/' style={{fontWeight:700}}>FFCS Planner</a>
        <a style={{display:'flex',alignItems:'center',gap:10,background:'white',borderRadius:5,padding:5,fontSize:18,color:'black'}} href='https://github.com/kdx-08/vit-ffcs-planner'><FaGithub size={22} /> Github</a>
    </div>
  )
}

export default Navbar