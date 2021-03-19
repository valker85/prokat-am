import React from 'react';

// Components
import Path from '../components/other-components/path'
import Header from './other-components/header';

// Images
import Img1 from '../assets/img/charity-events/img1.png'
import Img2 from '../assets/img/charity-events/img2.png'
import Img3 from '../assets/img/charity-events/img3.png'
import Img4 from '../assets/img/charity-events/img4.png'




export default class CharityEvents extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            events:[
                {name: 'Փրկենք Վարդուշի հարսանիքը',                  date: '17.07.2021', src: Img1, url: '/charity-events/prkel-harsaniqy'},
                {name: 'Փրկենք մեր հայկական գործիքները',             date: '17.07.2021', src: Img2, url: '/charity-events/prkel-harsaniqy'},
                {name: 'Ազգային հայրենասիրական բարեգործական համերգ', date: '17.07.2021', src: Img3, url: '/charity-events/prkel-harsaniqy'},
                {name: '«Ձեռք ձեռքի» բարեգործական միջոցառում',       date: '17.07.2021', src: Img4, url: '/charity-events/prkel-harsaniqy'}
            ]
        }
    }

    render(){
        return(
            <>
            <Header/>
            <div className='charity-events'>
                <Path/>

                <div className='container160'>
                    <h1>Բարեգործական միջոցառումներ</h1>

                    <div className='events'>
                    {
                        this.state.events.map((event, idx)=>{
                            return(
                                <div className='event' key={idx} onClick={()=>{this.props.history.push(event.url)}}>
                                    <div className='gradient'></div>

                                    <img src={event.src} alt='event' />

                                    <div className='info'>
                                        <h3>{event.name}</h3>
                                        <div className='line'></div>
                                        <p className='date'>{event.date}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            </>
        )
    }
}