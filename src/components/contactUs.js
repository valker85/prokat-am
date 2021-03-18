import React from 'react'

// Components
import Path from '../components/other-components/path'

// Images
import Img from '../assets/img/contact-us/img.png'

export default class ContactUs extends React.Component{
    render(){
        return(
            <div className='contact-us'>
                <Path/>

                <div className='container160'>
                    <h1>Հետադարձ կապ</h1>

                    <div className='content'>
                        <div className='block'>
                            <div className='info'>
                                <ul className='info-block'>
                                    <li>Հեռ.՝</li>
                                    <li>Էլ. փոստ՝</li>
                                    <li>Հասցե՝</li>
                                    <li>Աշխ․ օրեր՝</li>
                                    <li>Աշխ․ ժ՝</li>
                                    <li>Հետևեք մեզ՝</li>
                                </ul>

                                <ul className='info-block'>
                                    <li>(+374 94) 77-25-28,<br/> (+374 99) 77-25-28</li>
                                    <li>info@prokat.am</li>
                                    <li>Սայաթ-Նովա 28</li>
                                    <li>Երկ—Կիր</li>
                                    <li>09<sup>00</sup> — 20<sup>00</sup></li>
                                    <li>
                                        <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">facebook</a>
                                        <a href='https://www.instagram.com/?hl=ru' target='_blank' rel="noopener noreferrer">instagram</a>
                                    </li>
                                </ul>
                            </div>

                            <form>
                                <h3>Կամ գրեք մեզ</h3>
                                <input placeholder="Անուն*" />
                                <div className='inps'>
                                    <input placeholder="Հեռախոս*" />
                                    <input placeholder="Email*" />
                                </div>
                                <textarea placeholder='Հաղորդագրություն*'></textarea>
                                <button type='submit'>Ուղարկել</button>
                            </form>
                        </div>

                        <div className='block'>
                            <img src={Img} alt="prokat"/>
                        </div>
                    </div>
                </div>

                <div className='map desktop'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398268014387!2d44.52356989977459!3d40.177949334813405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcee431236cf%3A0xef791b49afa2902e!2sProkat.am!5e0!3m2!1sru!2s!4v1615536894579!5m2!1sru!2s" 
                        width="100%"
                        height="700"
                        style={{border:0}}
                        allowFullScreen=""
                        loading="lazy"
                        title='prokat'>
                    </iframe>
                </div>

                <div className='map mob'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398268014387!2d44.52356989977459!3d40.177949334813405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcee431236cf%3A0xef791b49afa2902e!2sProkat.am!5e0!3m2!1sru!2s!4v1615536894579!5m2!1sru!2s" 
                        width="100%"
                        height="414"
                        style={{border:0}}
                        allowFullScreen=""
                        loading="lazy"
                        title='prokat'>
                    </iframe>
                </div>
            </div>
        )
    }
}