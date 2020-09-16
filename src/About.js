import React from 'react'
import './About.css'
import AboutAnimate from './AboutAnimate'
import styled, { keyframes } from 'styled-components'
import {fadeInLeft} from 'react-animations'
import {fadeInRight} from 'react-animations'
import {flash} from 'react-animations'
import {bounceInLeft} from 'react-animations'
import Typical from 'react-typical'
import { 
    Link,
} from 'react-router-dom'


const FadeIn = styled.div`animation: 2s ${keyframes`${fadeInLeft}`}`
const FadeInR = styled.div`animation: 2s ${keyframes`${fadeInRight}`}`
const BounceInLeft = styled.div`animation: ${props => props.delay}s ${keyframes`${bounceInLeft}`}`


function getLinkElement(text, delay){
    return <BounceInLeft delay={delay}>
    <div className='about-intro-navigation-link' href="">{text}</div>
    </BounceInLeft>
}

function About(){
    return(
        <div className="about-container">
            <main className="about-text">
                <div className="about-intro">
                    <div className="about-intro-text-wrapper">
                            <FadeIn className='intro-address'>
                                <p className='address'>Hi, I'm Mihaela</p>
                            </FadeIn>
                            <FadeIn className='intro-typical'>
                                <Typical
                                    className ='typical'
                                    loop={Infinity}
                                    wrapper='b'
                                    steps ={[
                                        'Growth Marketer', 1000,
                                        'Turned Growth Engineer', 1000,
                                    ]}>    
                                </Typical>
                            </FadeIn>
                        </div>
                    <div className="about-intro-navigation">
                        <Link className="router-link" to="/profile">{getLinkElement('About', 1.5)}</Link>
                        <Link className="router-link" to="/work">{getLinkElement('Work', 2)}</Link>
                        <Link className="router-link" to="/contact">{getLinkElement('Get in touch', 2.50)}</Link>
                    </div>
                </div>
            </main>
            <FadeInR>
            <aside className='about-animation-container'>
                  <AboutAnimate />  
            </aside>
            </FadeInR>
        </div>
    )
}
export default About