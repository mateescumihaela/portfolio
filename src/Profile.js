import React from 'react';
import './Profile.css';
import styled, { keyframes } from 'styled-components'
import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'
import devicon from 'devicon'
import { 
    Link,
} from 'react-router-dom'


const BounceInLeft = styled.div`animation: 2s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: 2s ${keyframes`${bounceInRight}`}`


export default function Profile(props) {
    return(
        <div className="profile-pageWrapper">
            <div className="profile-container">
                <BounceInLeft>
                <div className="profile-section-container">
                    <h6 className="profile-heading">About</h6>
                    <div className="profile-text"> 
                        <p>Passionate about all things growth. I come from a digital marketing background and love tech. Switching to web dev/growth engineering was a no brainer.</p> 
                    </div>
                    <div className="profile-link-wrapper">
                        <Link className="router-link profile-links" to="/experience">See experience <i className="far fa-arrow-alt-circle-right"></i></Link>
                        <Link className="router-link profile-links" to="/education">See education <i className="far fa-arrow-alt-circle-right"></i></Link>
                    </div>
                </div>
                </BounceInLeft>
                <div className="profile-skills-icons-wrapper">   
                <BounceInRight>  
                    <div className="skill-icon-container">
                        <div className="skil-icon-wrapper">
                            <i className="devicon-react-original leng-icon"></i>
                            <p className="profile-skills-list-items">ReactJS</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-nodejs-plain leng-icon"></i>
                            <p className="profile-skills-list-items">NodeJS</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-javascript-plain leng-icon"></i>
                            <p className="profile-skills-list-items">JavaScript</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-html5-plain leng-icon"></i>
                            <p className="profile-skills-list-items">HTML5</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-css3-plain leng-icon"></i>
                            <p className="profile-skills-list-items">CSS3</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-bootstrap-plain leng-icon"></i>
                            <p className="profile-skills-list-items">Bootstrap</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-express-original leng-icon"></i>
                            <p className="profile-skills-list-items">ExpressJS</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-visualstudio-plain leng-icon"></i>
                            <p className="profile-skills-list-items">VS Code</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-git-plain leng-icon"></i>
                            <p className="profile-skills-list-items">Git</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-github-plain leng-icon"></i>
                            <p className="profile-skills-list-items">GitHub</p>
                        </div>
                        <div className="skil-icon-wrapper">
                            <i className="devicon-chrome-plain leng-icon"></i>
                            <p className="profile-skills-list-items">Chrome Dev tools</p>
                        </div>  
                    </div> 
                </BounceInRight>
                </div>
            </div>
        </div>  
    ) 
}