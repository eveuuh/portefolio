import React from 'react';
import { motion } from 'framer-motion'
import Skillcard from './Skillcard';


    const skills = [
        {
            title: "Front-end",
            about: "Javascript - React - HTML/CSS-SCSS - Bootstrap "
        },
        {
            
            title: "Back-end ",
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
            about: "Heroku - Netlify - Vscode - Sublime Text - Linux(Ubuntu) - MacOs"
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
                   Retrouvez ici l'intégralité des technos utilisées au cours de mon apprentissage. Convaincue de l'importance des softs skills dans le milieu profesionnel, vous y trouverez également ce que je pense être des éléments clés pour m'intégrer dans votre équipe: 
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
                                <p>Travail en remote  </p>
                        </div>
                        <div className="workflow-card__body"> 
                            <p>Rôle de Product Owner  sur des projets de groupe</p>
                        </div>
                        <div className="workflow-card__body"> 
                                Travail en remote  
                        </div> 

                    </div>     
                </div>     
            </div>       
        
        </motion.div>   
        );
    };
export default Competences;