import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Loading from './Loading';

const Countries = () => {
    // Pour modifier data, il faudra passer par setDat
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
// le useEffet se jour lorsque le composant est monté
useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => 
        setData(res.data));
        setLoading(true);


}, []);

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul>
            {loading ? data.map((country, index) =>{
                return <Card key={index} country={country}/>
            }):<Loading/>}
            </ul>
        </div>
    );
};

export default Countries;