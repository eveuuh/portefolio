import React from 'react';
import { motion } from 'framer-motion'


const Formations = () => {

    const formation_variants = {
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
        <motion.div className="container resume"

            variants={formation_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    
                    
                    <div className="resume-card__body"> 
                    <h4 className="resume-card__heading">
                            Cursus <i className="fas fa-user-graduate"></i>
                    </h4>
                     <h5 className="resume-card__title">
                          Développeur Web et Web mobile
                        </h5>
                        <p className="resume-card__name">
                          Simplon Marseille (juin 2020-février 2021)
                        </p>
                        <h5 className="resume-card__title">
                          Développeur FullStack
                        </h5>
                        <p className="resume-card__name">
                          Le Wagon Marseille batch #392 (janvier-mars 2020)
                        </p>
                        <p className="resume-card__details"></p>
                        <p className="resume-card_split"> -------------------------------</p>

                        <h5 className="resume-card__title">
                          Infirmière Diplômée d'état
                        </h5>
                    

                        <p className="resume-card__name">(
                          IFSI St Joseph Croix Rouge Marseille (2009-2012)
                        </p>
                        <br></br>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                   
                    <div className="resume-card__body">
                    <h4 className="resume-card__heading">
                            Diplômes <i className="fas fa-award"></i>
                    </h4>
                        <h5 className="resume-card__title">
                            Concepteur - développeur d'applications Web - niveau VI
                        </h5>
                        <p className="resume-card__name">
                            Le Wagon - Juin 2020
                        </p>
                        <h5 className="resume-card__title">
                            Certification Opquast - Maitrise du web 
                        </h5>
                        <p className="resume-card__name">
                        (niveau avancé: 850/1000) -  Octobre 2020
                        </p>
                        <p className="resume-card_split"> -------------------------------</p>
                        <h5 className="resume-card__title">
                            Diplômée d'état d'Infirmière
                        </h5>
                        <p className="resume-card__name">
                            Juillet 2012
                        </p>
                        <br></br>
                        
                    </div>
                </div>
                <div className="col-lg-12 resume-card" >
                   
                    <div className="resume-card__body">
                    <h4 className="resume-card__heading">
                        Experiences <i class="fas fa-laptop-code"></i>
                    </h4>
                    <h5 className="resume-card__title">
                        Stage d'un mois chez Simple lif'- Marseille (Octobre-Novembre 2020)         
              
                    </h5>
                    <p className="resume-card__name">
                        Amélioration de l'interface utilisateur (UI-UX/responsive) de la version web (Réact)
                    </p>
                    <h5 className="resume-card__title">
                        Projet de fin d'étude au Wagon: Ludin (Mars-Avril 2020)         
              
                    </h5>
                    <p className="resume-card__name">
                        Création d'une application web en groupe de 4 developpeurs. Gestion du Front & Back (Ruby on Rails/JS)</p>
                    </div>
                </div>
            </div>

           
        </motion.div>
    );
};

export default Formations;