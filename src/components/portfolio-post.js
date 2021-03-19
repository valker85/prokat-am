import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// React-slick (slider)
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Components
import Path from '../components/other-components/path'
import Header from './other-components/header';


// Images
import Img1 from '../assets/img/portfolio-post/img1.png'
import Img2 from '../assets/img/portfolio-post/img2.png'
import Img3 from '../assets/img/portfolio-post/img3.png'
import Img4 from '../assets/img/portfolio-post/img4.png'
import Img5 from '../assets/img/portfolio-post/img5.png'
import Img6 from '../assets/img/portfolio-post/img6.png'
import Img7 from '../assets/img/portfolio-post/img7.png'
import Img8 from '../assets/img/portfolio-post/img8.png'

import VideoImg from '../assets/img/portfolio-post/videoImg.png'

import topProd1 from '../assets/img/home/top-prods/prod1.png'
import topProd2 from '../assets/img/home/top-prods/prod2.png'
import topProd3 from '../assets/img/home/top-prods/prod3.png'

// Video
import Video from '../assets/video/portfolio-post/video.mp4'


class PortfolioPost extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data:{
                rows: [
                    [
                        [{src: Img1, type: 'img'}, {src: Img2, type: 'img'}],
                        [{src: Img3, type: 'img'},{src: Img4, type: 'img'}]
                    ],
                    [
                        [{src: Video, type: 'video', poster: VideoImg}],
                        
                        [{src: Img5, type: 'img'}, {src: Img6, type: 'img'}, 
                        {src: Img7, type: 'img'}, {src: Img8, type: 'img'}]
                    ],
                    [
                        [{src: Img1, type: 'img'}, {src: Img2, type: 'img'}],
                        [{src: Img3, type: 'img'}, {src: Img4, type: 'img'}]
                    ],
                    [
                        [{src: Img5, type: 'img'}, {src: Img6, type: 'img'},
                        {src: Img7, type: 'img'}, {src: Img8, type: 'img'}],
                        [{src: Video, type: 'video', poster: VideoImg}]
                    ]
                ]
            },
            postname: 'Վարդուշի հարսանիքի նկարներ',
            comparable_products:[
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000}
            ],
            slides:[
                {src: Img1, type: 'img'},
                {src: Img2, type: 'img'},
                {src: Img3, type: 'img'},
                {src: Img4, type: 'img'},
                {src: Video, type: 'video', poster: VideoImg},
                {src: Img5, type: 'img'},
                {src: Img6, type: 'img'},
                {src: Img7, type: 'img'},
                {src: Img8, type: 'img'},
                {src: Img1, type: 'img'},
                {src: Img2, type: 'img'},
                {src: Img3, type: 'img'},
                {src: Img4, type: 'img'},
                {src: Img5, type: 'img'},
                {src: Img6, type: 'img'},
                {src: Img7, type: 'img'},
                {src: Img8, type: 'img'},
                {src: Video, type: 'video', poster: VideoImg}
            ],
            modal_flag: false
        }

        this.modal_window = React.createRef()
        this.pp_ref = React.createRef()

        this.modal_flag = false
    }

    modal_fun = (todo) =>{
        this.modal_flag = todo

        let root = this.pp_ref.current.parentNode

        if(this.modal_flag === false){
            this.modal_window.current.style.display = 'none'

            root.style.height = 'auto'
            root.style.overflow = 'auto'

        } else{
            this.modal_window.current.style.display = 'block'

            root.style.height = '100vh'
            root.style.overflow = 'hidden'

        }

    }


    componentDidMount(){
        let data = this.state.data
        // this.props.match.params.post     // Актуальный параметр(:id) в url. 

        this.setState({
            data: data
        })
    }


    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(
            <>
            <Header/>
            <div ref={this.pp_ref} className='portfolio-post'>
                <Path/>

                <div ref={this.modal_window} className='modal'>
                    <div className='content'>
                        <span onClick={this.modal_fun.bind(null, false)} className='closeModal'>✖</span>
                        <h1>{this.state.postname}</h1>

                        <Slider {...settings}>
                        {
                            this.state.slides.map((slide, idx)=>{
                                return(
                                    <div className='slide' key={idx}>
                                        {
                                            slide.type === 'img' ?
                                            <img src={slide.src} alt='img'/> :
                                            <iframe 
                                            title='video'
                                            src={slide.src} 
                                            width="100%" 
                                            height="100%" 
                                            frameBorder="0" 
                                            allowFullScreen>
                                            </iframe>
                                        }

                                        {/* <div>{`${idx+1} — ${this.state.slides.length}`}</div> */}
                                    </div>
                                )
                            })
                        }
                        </Slider>
                    </div>
                </div>

                <div className='container160'>
                    <h1>{this.state.postname}</h1>


                    <div className='content-wrapper'>
                    {
                        this.state.data.rows.map((row, idx)=>{
                            return(
                                <div className='row' key={idx}>
                                    <div className='block'>
                                    {
                                        row[0].map((picture, idx)=>{
                                            return(
                                                <div className={picture.type === 'video'?'picture video':'picture'} key={idx}>
                                                {
                                                    picture.type === 'img' ?
                                                    <img onClick={this.modal_fun.bind(null, true)} src={picture.src} alt='img'/> :
                                                    <video poster={picture.poster} controls>
                                                        <source src={picture.src} type="video/mp4"/>
                                                    </video>
                                                }
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                    <div className='block'>
                                    {
                                        row[1].map((picture, idx)=>{
                                            return(
                                                <div className={picture.type === 'video'?'picture video':'picture'} key={idx}>
                                                {
                                                    picture.type === 'img' ?
                                                    <img onClick={this.modal_fun.bind(null, true)} src={picture.src} alt='img'/> :
                                                    <video poster={picture.poster} controls>
                                                        <source src={picture.src} type="video/mp4"/>
                                                    </video>
                                                }
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>

                    <div className='section2'>
                        <h1>Համադրվող ապրանքներ</h1>
                        <div className='comparable_prods'>
                        {
                            this.state.comparable_products.map((card, idx)=>{
                                return(
                                    <div className='card' key={idx}>
                                        <div className='img-wrapper'>
                                            <img src={card.img} alt='img'/>
                                        </div>
                                        <div className='content'>
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

export default withRouter(PortfolioPost)