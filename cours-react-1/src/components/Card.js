import React from 'react';

const Card = ({ country }) => {
    console.log(country);
    return (
        <li className='card'>
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
            </div>
            <img src={country.flags.svg} alt={"drapeau" + country.translations.fra.common} width="20%" height="20%"/>
        </li>
    );
};

export default Card;