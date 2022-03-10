import React, { Component } from 'react';
import './Resume.css';
import appcert from './Images/Apprenticeship Cert.jpg'

class Resume extends Component {
    render() {
        return(
            <div className='flex-container'>
                <div>
                    <h2>Experience - </h2>
                        <br></br>
                    <h4>Application Developer</h4>
                    <h4>IBM / June 2019 - Present</h4>
                        <br></br>
                    <ul>
                        <li>Contributed software expertise in the development of solutions for federal agencies from requirements definition through successful deployment.</li>
                        <li>Practiced agile fundamentals to enhance workflow and efficiency.</li>
                        <li>Excelled at rapid application development and management of technological issues for assigned projects.</li>
                        <li>Trained new hires through a mock internal project to get them up to speed with how enterprise development works.</li>
                    </ul>
                        <br></br>
                    <h2>Education - </h2>
                        <br></br>
                    <h4>Allegany College of Maryland</h4>
                    <p>Associates Degree, General Studies / 2015 - 2018</p>
                        <br></br>
                    <h2>Certifications - </h2>
                        <br></br>
                    <h4>Certification of Completion of Apprenticeship</h4>
                    <p>From the Dept of Labor stating that I completed an accredited apprenticeship with IBM in Application Development.</p>
                        <br></br>
                    <img src={appcert} alt='of Application Developer Certification' id='appcert'></img>
                </div>
            </div>
        )
    }
}

export default Resume;