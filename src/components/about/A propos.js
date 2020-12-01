import React from 'react';
import { motion } from 'framer-motion'
import './about.css'

const About = () => {
    const about_variants = {
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
        <motion.div className="about"
            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                        delay: .7
                        }
                    },
                    }}>
                    <h1 className="about_title">
                        Bienvenue
                    </h1>
            </motion.div>
            <h6 className="about__intro">
            Je m'appelle <b> <font color="black">Eve</font></b> et suite à une reconversion professionelle, je suis à la recherche d'un poste en tant que <b> <font color="black">Développeuse Web .</font></b><br></br>
           
            <br></br>J'ai tout d'abord exercé pendant 7 ans en tant qu'infirmière dans différents services d'urgences, ce qui m'a permis de parcourir une partie du monde, et exercer cette profession sur différents continents. Ces fabuleuses années m'ont permis de faire murir mon projet professionnel, afin d'allier mes précédentes expériences à mon appétence pour les nouvelles technologies, en travaillant dans l'<b> <font color="black">e-santé</font></b> afin de mettre à profit mes nouvelles compétences informatiques, et mon expérience en tant qu'infirmière.          
            <br></br>
            
            <br></br> D'un naturel <b> <font color="black">Dynamique, autonome et motivée </font></b>pour mener à bien des projets dans le developpement web, je suis persuadée que je saurai <b> <font color="black">m'intégrer et m'adapter</font></b> rapidement au sein d'une équipe technique.
            Les veilles technologiques et une polyvalence issue d'un parcours professionnel riche en expériences sont des atouts que je souhaite à présent partager au sein d'une nouvelle équipe.
            Je suis donc à la recherche d'un emploi en tant que Développeuse Web.
            <br></br>
            <br></br> <br></br> Vous trouverez ainsi sur ce portefolio mon parcours et les projets que j'ai pu réaliser.
            
            Si mon profil vous intéresse, n'hésitez pas à me <b> <font color="black">contacter</font></b> , je me ferai une joie d'écouter vos propositions !
            </h6>
        </motion.div>
       
    );
};

export default About;