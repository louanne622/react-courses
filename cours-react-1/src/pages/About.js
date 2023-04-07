import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import axios from 'axios';
import Loading from '../components/Loading';

const About = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // le useEffet se jour lorsque le composant est monté
useEffect(() => {
    axios.get('https://api.github.com/users/landscht/repos')
    .then((res) => 
        setData(res.data));
        setLoading(true);
}, []);

    return (
        <div>
            <Logo />
            <Navigation />

        </div>
    );
};

export default About;