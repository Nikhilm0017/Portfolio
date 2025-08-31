import React from 'react'
import './Intro.css'
import bg from '../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Nikhil</span> <br/> Website Designer</span>
            <p className="introPara">I am a skilled and passion web designer with expirence in creating <br /> visually appealling and user-frinedly webiste</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro