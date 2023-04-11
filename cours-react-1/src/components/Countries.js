import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Loading from './Loading';
import Pagination from './Pagination';

const Countries = () => {

// pagination
const [currentPage, setCurrentPage] = useState(1);
const [flagsPerPage, setflagsPerPage] = useState(16);

    // Pour modifier data, il faudra passer par setDat
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState([]);
// le useEffet se jour lorsque le composant est monté
useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then((res) =>
        setData(res.data));
        setLoading(true);

}, []);

// Paganisation

const lastFlagIndex = currentPage * flagsPerPage;
const firstFlagIndex = lastFlagIndex - flagsPerPage;
const currentFlags = data.slice(firstFlagIndex, lastFlagIndex);

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul>
            {loading ? currentFlags.map((country, index) =>{
                return <Card key={index} country={country}/>
            }):<Loading/>}
            </ul>
            <Pagination totalFlags={data.length}
                        flagsPerPage={flagsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
        </div>
    );
};

export default Countries;