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
            <h1 className="about_title">Bienvenue sur mon portefolio!</h1>
            <h6 className="about__intro">
            Je m'appelle <b> <font color="#809aec">Eve</font></b> et suite à une reconversion professionelle, je suis à la recherche d'un poste en tant que <b> <font color="#809aec">Développeuse Web .</font></b><br></br>
           
            <br></br>J'ai tout d'abord exercé pendant 7 ans en tant qu'infirmiére dans différents services d'urgences, ce qui m'a permis de parcourir une partie du monde, et exercer cette profession sur différents continents. Malgrés ces fabuleuses années enrichissantes et passionantes, j'ai décidé de changer de voie et souhaite désormais travailler dans le <b> <font color="#809aec">e-santé</font></b><br></br>
            <br></br> Passionnée par le domaine du médical, je veux mettre à profit mes nouvelles compétences informatiques, et mon expérience d'infirmiére à profit. Mon ojectif profesionnel est de rejoindre une équipe et de collaborer afin d'améliorer le quotidien du personnel médical et des patients, et ce, en trouvant des solutions aux problémes pour améliorer la prise en charge des patients et faciliter le travail des professionels de santé. 
            
            
            <br></br>   <br></br> Vous trouverez ainsi sur ce portefolio, mon parcours et les projets que j'ai pu réaliser.
            
            Si mon profil vous intéresse, n'hesitez pas à me <b> <font color="#809aec">contacter</font></b> , je me ferai une joie d'écouter vos propositions!
            </h6>
        </motion.div>
    );
};

export default About;