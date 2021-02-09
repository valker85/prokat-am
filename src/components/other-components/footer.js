import React from 'react';


// images
import Messanger from '../../assets/img/footer/Messanger.svg'
import Viber from '../../assets/img/footer/Viber.svg'
import WhatsUp from '../../assets/img/footer/whatsapp.svg'




export default class Footer extends React.Component{


    render(){
        return(
            <div className='footer'>
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