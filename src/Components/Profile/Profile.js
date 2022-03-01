import React, { Component } from 'react'
import './Profile.css'
import pfpicture from './Images/Me.jpg'
import { SocialIcon } from 'react-social-icons';

class Profile extends Component {
    render() {
        return(
            <div className='flex-container' id='profile'>
                <div>
                    <h1>About Me</h1>
                    <p>I am an application developer working for IBM out of Rocket Center, WV.</p>
                </div>
                <div><img src={pfpicture} className='profile-picture' alt='Of Joseph King'></img></div>
                <div>
                    <h3>Social Media</h3>
                    <div className='socialIcon'><SocialIcon url="https://twitter.com/Mansa_joe" /></div>
                    <div><SocialIcon url="https://www.linkedin.com/in/joeking853/" /></div>
                </div>
            </div>
        )
    }
}

export default Profile;