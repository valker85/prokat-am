import React from 'react';
import axios from 'axios';

// Components
import Path from '../components/other-components/path'
import Header from './other-components/header';

// Images
// import Img1 from '../assets/img/charity-events/img1.png'
// import Img2 from '../assets/img/charity-events/img2.png'
// import Img3 from '../assets/img/charity-events/img3.png'
// import Img4 from '../assets/img/charity-events/img4.png'




export default class CharityEvents extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            events:[]
        }
    }

    componentDidMount(){
        let config = {
            headers: {
                auth:{
                    username: 'prokat',
                    password: '9H8lFCGGAHksplo9h9kQ'
                }
            }
        }

        axios.post('https://prokat.weflex.am/api/events', {  }, config.headers)
            .then((response) => {

                console.log( response.data.data )

                this.setState({
                    events: response.data.data
                })
            })
            .catch(function (error) {
                console.log(error)
            })
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
                                <div className='event' key={idx} onClick={()=>{this.props.history.push( `/am/charity-events/${event.url}` )}}>
                                    <div className='gradient'></div>

                                    <img src={`https://prokat.weflex.am/public/uploads/events/${event._id}/${event.img}`} alt='event' />

                                    <div className='info'>
                                        <h3>{event.title_am}</h3>
                                        <div className='line'></div>
                                        <p className='date'>{ new Date(`${event.date}`).toLocaleDateString() }</p>
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