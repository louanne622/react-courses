import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    // Pour modifier data, il faudra passer par setDat
const [data, setData] = useState([]);
    {/* le useEffet se jour lorsque le composant est monté*/}
useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => setData(res.data));

}, []);

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul className='flags'>
                {
                    data.map((country, index) => 
                    <Card key={index} country={country}/>
                    )
                }
            </ul>
        </div>
    );
};

export default Countries;