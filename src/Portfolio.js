
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Portfolio.css'
import { Carousel } from 'react-responsive-carousel';
import styled, { keyframes } from 'styled-components'
import {bounceInLeft} from 'react-animations'
import {bounceInRight} from 'react-animations'


const BounceInLeft = styled.div`animation: 2s ${keyframes`${bounceInLeft}`}`
const BounceInRight = styled.div`animation: 2s ${keyframes`${bounceInRight}`}`

export default function Portfolio(){
    return(
        <div className="portfolio-container">
            <div className="portfolio-wrapper">
                <BounceInLeft className="portfolio-text-wrapper-bounce">
                    <div className="portfolio-text-wrapper">
                    <h6 className='portfolio-heading'>Check Out My Work</h6>
                    <p className="portfolio-text">blah blah</p> 
                </div>
                </BounceInLeft>
                <BounceInRight className="portfolio-grid-bounce">
                    <div className="portfolio-grid">
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                               <h6 className="portfolio-item-heading">Speed Typing Game</h6>
                                <p className="portfolio-item-text">A vanilla JS game</p>
                                <a className='portfolio-demo-link' href="https://alpha-pop.netlify.app">DEMO</a> 
                            </div>
                        </div>
                        <img className='portfolio-item-img' src="pop.png" alt="pop cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">EBB</h6>
                                <p className="portfolio-item-text-poll">A crowdsourced list of female-friendly tech companies</p>
                                <a className='portfolio-demo-link' href="http://hi-ebb.herokuapp.com/">DEMO</a>
                            </div>  
                        </div>
                        <img className='portfolio-item-img' src="ebb.png" alt="ebb cover"/>
                    </div>
                    <div className="portfolio-item-container">
                        <div className="portfolio-item-overlay">
                            <div className='portfolio-item-overlay-content-wrapper'>
                                <h6 className="portfolio-item-heading">Waver</h6>
                                <p className="portfolio-item-text">Fullstack app showcasing Portugal's local surf scene</p>
                                <a className='portfolio-demo-link' href="http://stokd.s3-website-eu-west-1.amazonaws.com/">DEMO</a>
                            </div>
                        </div>
                        <img className='portfolio-item-img' src="waver3.png" alt="waver cover"/>
                    </div>

                </div>
                </BounceInRight>
                <BounceInRight className="portfolio-mobile-view-bounce">
                    <div className="portfolio-mobile-view">
                        <Carousel 
                            autoPlay
                            infiniteLoop
                            showArrows={false} 
                            showStatus={false} 
                            showIndicators={false}
                            showThumbs={false}
                            width="250px"
                            className="portfolio-grid-carousal">
                            <div className="portfolio-item-container">
                                <div className="portfolio-item-overlay">
                                    <div className='portfolio-item-overlay-content-wrapper'>
                                    <h6 className="portfolio-item-heading">Tic-Tac-Toe</h6>
                                        <p className="portfolio-item-text">A board game with options to play between two players or with computer bot. Developed using HTML, CSS and JavaScript.</p>
                                        <a className='portfolio-demo-link' href="https://jatin-d.github.io/project1-tic-tac-toe/">DEMO</a> 
                                    </div>
                                </div>
                                <img className='portfolio-item-img' src="tictactoe.png" alt="tic-tac-toe cover"/>
                            </div>
                            <div className="portfolio-item-container">
                                <div className="portfolio-item-overlay">
                                    <div className='portfolio-item-overlay-content-wrapper'>
                                        <h6 className="portfolio-item-heading">Poll To Pass</h6>
                                        <p className="portfolio-item-text">A web-based platform to post polls. Developed using HTML5, and CSS for front-end and Ruby with Sinatra for the back-end.</p>
                                        <a className='portfolio-demo-link' href="https://poll-to-pass-api.herokuapp.com/">DEMO</a>
                                    </div>  
                                </div>
                                <img src="polltopass.png" alt="poll-to-pass cover"/>
                            </div>
                            <div className="portfolio-item-container">
                                <div className="portfolio-item-overlay">
                                    <div className='portfolio-item-overlay-content-wrapper'>
                                        <h6 className="portfolio-item-heading">Common utils</h6>
                                        <p className="portfolio-item-text">A React application for common utilities having server side on NodeJS and database on PostgreSQL.</p>
                                        <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                                    </div>
                                </div>
                                <img src="common-utils.png" alt="common-utils cover"/>
                            </div>
                            <div className="portfolio-item-container">
                                <div className="portfolio-item-overlay">
                                    <div className='portfolio-item-overlay-content-wrapper'>
                                        <h6 className="portfolio-item-heading">Magic Melbourne</h6>
                                        <p className="portfolio-item-text">A web app to guide tourists around Melbourne. Developed in a team of four using NodeJS</p>
                                        <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                                    </div>
                                </div>
                                <img src="waver.png" alt="waver cover"/>
                            </div>
                            <div className="portfolio-item-container">
                                <div className="portfolio-item-overlay">
                                    <div className='portfolio-item-overlay-content-wrapper'>
                                        <h6 className="portfolio-item-heading">Portfolio Website</h6>
                                        <p className="portfolio-item-text">My portfolio website created using ReactJS.</p>
                                        <a className='portfolio-demo-link' href="https://magic-melbourne-moments.herokuapp.com/">DEMO</a>
                                    </div>
                                </div>
                                <img src="portfolio-jatin.png" alt="portfolio cover"/>
                            </div>

                        </Carousel>
                    </div>
                </BounceInRight>
            </div>
        </div>
    )
}