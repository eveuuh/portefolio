import React from 'react';

const Skillcard = ({ skill: { title, about } }) =>
    <div className="col-small-3">
        <div className="skill-card">
            <div className="skill-card-body">
                <h6 className="skill-card__title">{title}</h6>
                <p className="skill_card__content">{about}</p>
            </div>
        </div>
    </div>

export default Skillcard;