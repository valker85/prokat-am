import React from 'react';
import { NavLink } from 'react-router-dom';

// images
import Messanger from '../../assets/img/footer/fixed social/Messanger.svg'
import Viber from '../../assets/img/footer/fixed social/Viber.svg'
import WhatsUp from '../../assets/img/footer/fixed social/whatsapp.svg'

import Logo from '../../assets/img/header/ProkatAm Logo.png'

import Fb from '../../assets/img/footer/other social/fb.svg'
import Insta from '../../assets/img/footer/other social/insta.svg'
import YouTube from '../../assets/img/footer/other social/yotube.svg'

import Cards from '../../assets/img/footer/payment_cards.svg'


export default class Footer extends React.Component{


    render(){
        return(
            <div className='footer'>
                <div className=' content'>
                    <div className='container160'>
                        <div className='top'>
                            <div className='logo'>
                                <img src={Logo} alt='logo'/>
                            </div>
                            <div className='social'>
                                <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">
                                    <img src={Fb} alt='facebook'/>
                                </a>
                                <a href='https://www.instagram.com/?hl=ru' target='_blank' rel="noopener noreferrer">
                                    <img src={Insta} alt='instagram'/>
                                </a>
                                <a href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer">
                                    <img src={YouTube} alt='youtube'/>
                                </a>
                            </div>
                        </div>

                        <div className='other_content'>
                            <div className='left'>
                                <ul>
                                    <li>Սայաթ-Նովա 28</li>
                                    <li><p>(+374 94) 77 25 28</p><p>(+374 99) 77 25 28</p></li>
                                    <li>info@prokat.am</li>
                                </ul>
                            </div>

                            <div className='right'>
                                <ul>
                                    <li><NavLink to='/'>Ապրանքներ</NavLink></li>
                                    <li><NavLink to='/'>Ծառայություններ</NavLink></li>
                                </ul>

                                <ul className='desktop'>
                                    <li><NavLink to='/about'>Մեր մասին</NavLink></li>
                                    <li><NavLink to='/'>Պայմաններ</NavLink></li>
                                    <li><NavLink to='/'>Հետադարձ կապ</NavLink></li>
                                </ul>

                                <ul className='mob'>
                                    <ul>                                    
                                        <li><NavLink to='/about'>Պորտֆոլիո</NavLink></li>
                                        <li><NavLink to='/'>Փառատոն</NavLink></li>
                                        <li><NavLink to='/'>Բարեգործական միջոցառումներ</NavLink></li>
                                    </ul>
                                    <ul>
                                        <li><NavLink to='/'>Մեր մասին</NavLink></li>
                                        <li><NavLink to='/'>Պայմաններ</NavLink></li>
                                        <li><NavLink to='/'>Հետադարձ կապ</NavLink></li>
                                    </ul>
                                </ul>

                            </div>
                        </div>

                        <div className='bottom'>
                            <div className='info'>
                                <p>© 2021 Prokat.am</p>
                                <p>Made by WeFlex</p>
                            </div>

                            <div className='cards'>
                                <img src={Cards} alt='card'/>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='social-wrapper'>
                    <a href='https://www.messenger.com/' target='_blank' rel="noopener noreferrer">
                        <div className='mess'>
                            <img src={Messanger} alt='messanger'/>
                        </div>
                    </a>

                    <a href='https://www.viber.com/ru/' target='_blank' rel="noopener noreferrer">
                        <div className='viber'>
                            <img src={Viber} alt='viber'/>
                        </div>
                    </a>

                    <a href='https://www.whatsapp.com/' target='_blank' rel="noopener noreferrer">
                        <div className='whatsup'>
                            <img src={WhatsUp} alt='whatsapp'/>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}