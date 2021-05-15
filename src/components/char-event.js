import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

// Components
import Path from '../components/other-components/path'
import Header from './other-components/header';



// Images
import GeneralImg from '../assets/img/char-event/genImg.png'
import Img1 from '../assets/img/char-event/img1.png'
import Img2 from '../assets/img/char-event/img2.png'

import topProd1 from '../assets/img/home/top-prods/prod1.png'
import topProd2 from '../assets/img/home/top-prods/prod2.png'
import topProd3 from '../assets/img/home/top-prods/prod3.png'
import topProd4 from '../assets/img/home/top-prods/prod4.png'

import Poster from '../assets/img/portfolio-post/videoImg.png'

// Videos
import Video from '../assets/video/portfolio-post/video.mp4'


class CharEvent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            event:{
                // name: 'Փրկենք Վարդուշի ամուսնությունը',
                // date: '17.07.2021',
                // generalImage: GeneralImg,
                // text1: 'Հարսանիքի զարգացման վաղ՝ մայրիշխանության շրջանում կատարվել է պարզ արարողություններով։ Որպես ամուսնության սովորութային ձևակերպում զարգացել է հայրիշխանության ընթացքում, երբ հաստատվել է մենամուսնությունը, որն արտահայտվել է կնոջ բնակությամբ ամուսնու տանը։ Ամուսնական արարողությունների շարքի հիմնական առանձնահատկությունը ծնողների տնից ամուսնու տուն տեղափոխվելու թատերականացված արտահայտությունն է։',
                // text2: 'Հարսանիքը, որպես կանոն, ուղեկցվում է խնջույքներով, նվերների փոխանակությամբ, երգ ու պարով և այլ զվարճություններով։ Հարսանիքին մասնակցում են փեսայի և հարսի ազգականները, մերձավորները, ծիսակարգի համար սահմանված հատուկ անձինք (խնամախոսներ, խնամիներ, կնքահայր, հարսնեղբայր, հարսնաքույր, խաչեղբայր, քահանա, քավոր և այլն)։ Ըստ եկեղեցական ավանդույթի Հարսնաքույր և խաչեղբայր անձը կարող է լինել իր կյանաքում միայն մեկ անգամ և միայն մեկ զույգի համար։ Եկեղեցու առաջ մի քանի անգամ արգելվում է լինել Խաչեղբայր և Հարսնաքույր, քանի որ նրանք հանդիսանում եմ միայն մեկ ամուսնական զույգի վկաներ։ խաչեղբայր և հարսնաքույր ընտրելիս պետք է ամպայման ուշադրություն դարցնել այս հանգամանքին։',
                // text3: 'Հայաստանի ազգագրական յուրաքանչյուր շրջան ունեցել է իրեն հատուկ հարսանեկան ծիսակարգ, որի մեջ առանձնացել են գրեթե բոլոր շրջանների համար ընդհանուր շատ արարողություններ։ Հարսանիքները կատարվել են հիմնականում աշնանը՝ գյուղատնտեսական աշխատանքներից հետո և տևել են 3-7 օր։ Գերադասել են սկսել հինգշաբթի կամ ուրբաթ և ավարտել կիրակի։',
            },
            comparableProducts:[
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd4, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000}
            ]
        }
    }

    

    componentDidMount(){
        let url = this.props.location.pathname.split('/').pop()
        let config = {
            headers: {
                auth:{
                    username: 'prokat',
                    password: '9H8lFCGGAHksplo9h9kQ'
                }
            }
        }


        axios.post(`https://prokat.weflex.am/api/events/${url}`, {  }, config.headers)
            .then((response) => {

                console.log( response.data.data )
                this.setState({
                    event: response.data.data
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
            <div className='char-event'>
                <Path/>

                <div className='container160'>
                    <div className='section1'>
                        <h1>{this.state.event.title_am}</h1>
                        <p className='date'>{ new Date(`${this.state.event.date}`).toLocaleDateString() }</p>

                        <div className='general-image'>
                            {
                                this.state.event.img ?
                                <img src={`https://prokat.weflex.am/public/uploads/events/${this.state.event._id}/${this.state.event.img}`} alt='event-img' />
                                : null
                            }
                        </div>

                        <div className="text" dangerouslySetInnerHTML={{__html: this.state.event.desc_am}}></div>


                        <div className='pictures'>
                            <div className='block'>
                            { 
                                this.state.event.media ?
                                this.state.event.media.map( (pic, idx)=>{
                                    if( pic.type === 'video' ){
                                        return(
                                        <video controls key={idx}>
                                            <source src={`https://prokat.weflex.am/public/uploads/events/${this.state.event._id}/media/${pic.filename}`} type="video/mp4"/>
                                        </video>
                                        )
                                    }
                                })
                                : null
                            }

                            </div>

                            <div className='block'>
                                {
                                    this.state.event.media ?
                                    this.state.event.media.map( (pic, idx)=>{
                                        if( pic.type === 'image' && (idx === 0 || idx === 1)  ){
                                            return(
                                            <div className='imgBlock' key = {idx}>
                                                <img src={`https://prokat.weflex.am/public/uploads/events/${this.state.event._id}/media/${pic.filename}`} alt='event'/>
                                            </div>
                                            )
                                        }
                                    })
                                    : null
                                }
                            </div>
                        </div>

                    </div>

                    <div className='section2'>
                        <h2>Համադրվող ապրանքներ</h2>

                        <div className='comparable-products'>
                            {
                                this.state.comparableProducts.map((card, idx)=>{
                                    return(
                                        <div className='card' key={idx}>
                                            <div className='img-wrapper'>
                                                <img src={card.img} alt='img'/>
                                            </div>
                                            <div className='card-content'>
                                                <NavLink to={card.type_url} className='type'>{card.type}</NavLink>
                                                
                                                <h1 onClick={()=>{this.props.history.push(card.prod_url)}} 
                                                    className={card.name.length > 21 ? 'name long' : 'name'}>
                                                    {card.name}
                                                </h1>

                                                <ul className={card.name.length > 21 ? 'info long' : 'info'}>
                                                {
                                                    card.info.map((param, idx)=>{
                                                        return(
                                                            <li key={idx}>{param}</li>
                                                        )
                                                    }) 
                                                }
                                                </ul>
                                                <div className='line'></div>
                                                <div className='prise-wrapper'>
                                                    <div className='prise'>{card.prise} <span>դր/օր</span></div>
                                                    <div className='rent'><NavLink to={card.prod_url}>Վարձել</NavLink></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
            </>
        )
    }
}



export default withRouter(CharEvent)