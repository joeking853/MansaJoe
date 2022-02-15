import React, { Component } from 'react'
import './Profile.css'
import pfpicture from './Images/Me.jpg'

class Profile extends Component {
    render() {
        return(
            <div className='flex-container'>
                <div>
                    <h3>About Me</h3>
                    <p>This is a test of the Flexbox</p>
                </div>
                <div><img src={pfpicture} className='profile-picture' alt='Of Joseph King'></img></div>
            </div>
        )
    }
}

export default Profile;