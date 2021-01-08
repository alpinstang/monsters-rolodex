import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img className="monster-image"
            alt={"monster " + props.monster.name}
            src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}
            />
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
)
