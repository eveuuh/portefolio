import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [active, setActive] = useState('')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('About');
        else if (currentURL.endsWith('/projets'))
            setActive('Projets')
        else if (currentURL.endsWith('/formations'))
            setActive('Formations')
        else if (currentURL.endsWith('/competences'))
            setActive('Competences')
        else if (currentURL.endsWith('/contact'))
            setActive('Contact')
    }, [active])

    const navbar_variant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="navbar"
            variants={navbar_variant}
            initial='hidden'
            animate='visible'

        >
            <div className="navbar__active">
                {active}
            </div>

            <div className="navbar__items">
                {active !== 'About' &&
                    <Link to="/">
                        <div className="navbar__item" onClick={() => setActive('About')}>A propos</div>
                    </Link>
                }
                {active !== 'Formations' ?
                    <Link to="/formations">
                        <div className="navbar__item" onClick={() => setActive('Formations')}>Formations</div>
                    </Link> : null
                }
                {active !== 'Competences' &&
                    <Link to="/competences">
                        <div className="navbar__item" onClick={() => setActive('Competences')}>Competences</div>
                    </Link>
                }
                {active !== 'Contact' &&
                    <Link to="/contact">
                        <div className="navbar__item" onClick={() => setActive('Contact')}>Contact</div>
                    </Link>
                }
                {active !== 'Projets' &&
                    <Link to="/projets">
                        <div className="navbar__item" onClick={() => setActive('Projets')}>Projets</div>
                    </Link>
                }
                
                
            </div>

        </motion.div>
    );
};

export default Navbar;