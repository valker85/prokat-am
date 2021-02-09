import React from 'react';

// images
import WhatsUp from '../../assets/img/footer/whatsapp.svg'
import Viber from '../../assets/img/footer/Viber.svg'
import Messanger from '../../assets/img/footer/Messanger.svg'



export default class Footer extends React.Component{


    render(){
        return(
            <div className='footer'>
                <div className='social-wrapper'>
                    <a href='https://www.messenger.com/' target='_blank'>
                        <div className='mess'>
                            <img src={WhatsUp} />
                        </div>
                    </a>

                    <a href='https://www.viber.com/ru/' target='_blank'>
                        <div className='viber'>
                            <img src={Viber} />
                        </div>
                    </a>

                    <a href='https://www.whatsapp.com/' target='_blank'>
                        <div className='whatsup'>
                            <img src={Messanger} />
                        </div>
                    </a>
                </div>

            </div>
        )
    }
}