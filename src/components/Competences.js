import React from 'react';
import { motion } from 'framer-motion'
import Skillcard from './Skillcard';


    const skills = [
        {
            title: "Front-end",
            about: "Javascript - React - HTML/CSS-SCSS - Bootstrap "
        },
        {
            
            title: "Back-end developpement",
            about: "MySql - Mariadb - Ruby On Rails - PHP",
        },
        {
            title: "API Developpement",
            about: "Postman "
        },
       
        {
            title: "Outils collaboratif",
            about: "Git- Github- Bitbucket- Slack - Discord - Zoom - Trello - Figma"
        },
        {
            title: "Environnement de developpement",
            about: "Heroku - Netlify - Apache - Nginx - Vscode - Sublime Text - Linux(Ubuntu) - MacOs"
        },
     
    ]
    
    
    const Competences = () => {
        const about_variants = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    dealy: 0.2, duration: 0.6,
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
            <motion.div className="about"
    
                variants={about_variants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h6 className="intro">
                   Retrouvez ici les technos utilisées au cours de mon apprentissage ainsi que ma capacité de travail : 
                 </h6>
            <div className="column">  
                <div className="container technos__container">
                <h4 className="resume-card__heading">
                            Technos / Software
                </h4>
                {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
                <div className="col-md-6 resume-card" >
                    
                    <h4 className="workflow-card__heading">
                                Workflow
                        </h4>

                    <div className="container workflow__container">
                        <div className="workflow-card__body"> 
                            <p>Travail en remote et en équipe (Slack/Discord/Zoom)</p>
                        </div>
                        <div className="workflow-card__body"> 
                            <p>Product Owner lors de projets de groupe</p>
                        </div>
                        <div className="workflow-card__body"> 
                               Sensibilité à l'UI/UX  
                        </div> 
                        <div className="workflow-card__body"> 
                               Maquettage/ Wireframe avec Figma 
                        </div> 
                        <div className="workflow-card__body"> 
                               Développement agile
                        </div> 
                        <div className="workflow-card__body"> 
                               Respect des standards de qualité web
                        </div> 
                        <div className="workflow-card__body"> 
                            Collaboration & versioning avec Github/Bitbucket
                        </div> 
                        <div className="workflow-card__body"> 
                            Prise de parole en public 
                        </div> 

                    </div>     
                </div>     
            </div>       
        
        </motion.div>   
        );
    };
export default Competences;