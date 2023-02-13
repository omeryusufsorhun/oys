import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
    faPython,
    faCss3,
    faJava,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

import Layout from '../Layout';
import Sidebar from '../Sidebar';
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <Layout />
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>

                    <p>
                        I'm still an CS student and enthusiast, hoping that in the future
                        I will get a role in a established IT company with the opportunity to work 
                        with the latest technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quietly confident, naturally curious, I see myself as a person who can always
                        solve a problem (it might take some time but I don't give up).
                    </p>
                    <p>
                        Outside of technology world a big fan of football and music.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#104E8B" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About