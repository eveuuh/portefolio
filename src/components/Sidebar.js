import React from 'react'
import linkedin from '../assets/icons/lkd.jpeg'
import github from '../assets/icons/github.png'
import pin from '../assets/icons/pin.jpeg'
import cv from '../assets/icons/cv.png'
import photo from '../assets/photo.jpeg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:eve.jourdan@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={photo} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Eve <span>JOURDAN</span> </div>
            <div className="sidebar__item sidebar__title">Développeuse Web</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={cv} alt="resume" className="sidebar__icon" />Telecharger mon CV
                </div>
            </a>
     
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/eveuuh"><img src={github} alt="github" className="sidebar__icon mr-3" />Github</a>
                </div>
                <div className="sidebar__item sidebar__github">
                <a href="https://www.linkedin.com/in/evejourdan/"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" />Linkedin</a>
                </div>

                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Aix - Marseille</div>
            </div>
            <a href="tel:+33658490093">06.58.49.00.93</a>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Contactez moi</div>
        </motion.div>
    )
}

export default Sidebar;