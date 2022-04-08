import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../Animated Letters';

const Home =() => {
    const[letterClass, setLetterClass]= useState('text-animate')
    const nameArray =['K','e','m', 'b', 'o','i']
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r','.']



    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br/> I'm<br />
                {/* <img src={LogoTitle}  alt="developer"/> */}
                <AnimatedLetters  letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                {/* Kemboi */}
                <br/>
                <AnimatedLetters  letterClass={letterClass}
                jobArray={jobArray}
                idx={22}/>
                {/* web developer */}
                </h1>
                <h2> Frontend Developer | JavaScript </h2>
                <Link to="/contact" className='flat-button'>CONTACT</Link>
            </div>

        </div>
    );
}

export default Home