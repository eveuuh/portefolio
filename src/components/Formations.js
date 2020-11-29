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
                    <h4 className="resume-card__heading">
                            Formations
                    </h4>
                    <div className="resume-card__body"> 
                     <h5 className="resume-card__title">
                          Developpeur Web et Web mobile
                        </h5>
                        <p className="resume-card__name">
                          Simplon Marseille (juin 2020-février 2021)
                        </p>
                        <h5 className="resume-card__title">
                          Developpeur FullStack
                        </h5>
                        <p className="resume-card__name">
                          Le Wagon Marseille batch #392 (janvier-mars 2020)
                        </p>
                        <p className="resume-card__details"></p>
                        <p className="resume-card_split"> -------------------------------</p>

                        <h5 className="resume-card__title">
                          Infirmiére Diplômée d'état
                        </h5>
                        <p className="resume-card__name">(
                          IFSI St Joseph Croix Rouge Marseille (2009-2012)
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                            Diplômes
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Concepteur - développeur d'applications Web - niveau VI
                        </h5>
                        <p className="resume-card__name">
                            Le wagon - Juin 2020
                        </p>
                        <h5 className="resume-card__title">
                            Certification Opquast - Maitrise du web (niveau avancé: 850/1000)
                        </h5>
                        <p className="resume-card__name">
                            Octobre 2020
                        </p>
                        <p className="resume-card_split"> -------------------------------</p>
                        <h5 className="resume-card__title">
                            Diplômé d'état d'Infirmiére
                        </h5>
                        <p className="resume-card__name">
                            Juillet 2012
                        </p><br></br>
                        
                    </div>
                </div>
            </div>

           
        </motion.div>
    );
};

export default Formations;