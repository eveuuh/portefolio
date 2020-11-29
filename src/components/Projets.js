import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'
const Projets = () => {
    const [projets, setProjets] = useState(data_projects)
    const [active, setActive] = useState('All')


    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(projet => projet.category.includes(name))
        setProjets(new_array)
        setActive(name)
    }

    const projet_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container projects"
            variants={projet_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >

            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={
                    () => {
                        setProjets(data_projects)
                        setActive("All")

                    }


                }>Tous</div>
                <div className={active === 'react.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('react.js')}>React</div>
                <div className={active === 'php' && 'projects__navbar-active'} onClick={() => handleFilterCategory('php')}>PHP</div>
                <div className={active === 'js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('js')}>JS</div>
                <div className={active === 'rubyonrails' && 'projects__navbar-active'} onClick={() => handleFilterCategory('rubyonrails')}>Ruby on Rails</div>
                <div className={active === 'html' && 'projects__navbar-active'} onClick={() => handleFilterCategory('html')}>Intégration HTML/CSS</div>

            </div>

            <div className="row">

                {
                    projets.map(projet =>
                        <ProjectCard key={projet.name} projet={projet} />)
                }

            </div>
        </motion.div>
    );
};

export default Projets;