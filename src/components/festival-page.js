import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


// React-slick (slider)
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Components
import Path from '../components/other-components/path'
import Products from './other-components/ordered_prods'


// Images
import Img1 from '../assets/img/fest-page/img1.png'
import Img2 from '../assets/img/fest-page/img2.png'
import Img3 from '../assets/img/fest-page/img3.png'
import Img4 from '../assets/img/fest-page/img4.png'

import Poster from '../assets/img/fest-page/poster.png'

import topProd1 from '../assets/img/home/top-prods/prod1.png'
import topProd2 from '../assets/img/home/top-prods/prod2.png'
import topProd3 from '../assets/img/home/top-prods/prod3.png'
import topProd4 from '../assets/img/home/top-prods/prod4.png'
import topProd5 from '../assets/img/home/top-prods/prod5.png'

import Toshiba from '../assets/img/product-page/toshiba.png'


// Video
import Video from '../assets/video/portfolio-post/video.mp4'



class FestivalPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            fest: {
                name: 'Խորովածի փառատոն',
                info1: 'Ախթալայի խորովածի փառատոն, խորովածի համահայկական ամենամյա փառատոն, որը 2009 թվականից ավանդաբար անց է կացվում Ախթալա քաղաքում, Սուրբ Աստվածածին եկեղեցու բակում։ 2018 թվականից փառատոնը անց է կցվում Ախթալայի մարզադաշտում: Փառատոնը կազմակերպում են «Հայ խոհարարական ավանդույթների զարգացման և պահպանման» հասարակական կազմակերպությունը, Ախթալայի քաղաքապետարանը և Լոռու մարզպետարանը։',
                info2: 'Փառատոնն առաջին անգամ անց է կացվել 2009 թվականին։ Նպատակը հայ խոհարարական ավանդույթների զարգացումը և Ախթալայի ու տարածաշրջանի զբոսաշրջության խթանումն է։ Խորովածի տոնին մասնակցում են հասարակական կազմակերպությունների, ուսումնական հաստատությունների, ռեստորանների և սրճարանների ներկայացուցիչներ, ինչպես նաև անհատ խոհարարներ Հայաստանից և աշխարհի տարբեր երկրներից։ 2017 թվականին կազմակերպիչներն Ախթալան հռչակեցին խորովածի համաշխարհային մայրաքաղաք։',
                when: '26.06.2021, 13:00 — 17:00',
                where: 'Դիլիջանի եսիմ որ հյուրանոցի բակում',
                price: 'Մուտքը ազատ',
                notes: ['Դեմքի դիմակը պարտադիր է:', 'Ֆիզիկական հեռավորությունը պետք է հարգել:'],
                necessary: [
                    {
                        name: 'աթոռ',
                        product: {
                            name: 'աթոռ',
                            prise: 1000,
                            total_prise: 1000,
                            count: 1,
                            days: 1,
                            from: new Date('06.26.2021'),
                            to: new Date('06.26.2021'),
                            images:[Toshiba, topProd1, Toshiba, Toshiba, Toshiba],
                            img_for_busket: Toshiba,
                            id:1
                        }
                    }, 
                    {
                        name: 'տուրիստական սեղան',
                        product: {
                            name: 'տուրիստական սեղան',
                            prise: 2000,
                            total_prise: 2000,
                            count: 1,
                            days: 1,
                            from: new Date('06.26.2021'),
                            to: new Date('06.26.2021'),
                            images:[Toshiba, topProd1, Toshiba, Toshiba, Toshiba],
                            img_for_busket: Toshiba,
                            id:2
                        }
                    }, 
                    {
                        name: 'տենտ',
                        product: {
                            name: 'տենտ',
                            prise: 3000,
                            total_prise: 3000,
                            count: 1,
                            days: 1,
                            from: new Date('06.26.2021'),
                            to: new Date('06.26.2021'),
                            images:[Toshiba, topProd1, Toshiba, Toshiba, Toshiba],
                            img_for_busket: Toshiba,
                            id:3
                        }
                    },
                    {
                        name: 'վրան',
                        product: {
                            name: 'վրան',
                            prise: 4000,
                            total_prise: 4000,
                            count: 1,
                            days: 1,
                            from: new Date('06.26.2021'),
                            to: new Date('06.26.2021'),
                            images:[Toshiba, topProd1, Toshiba, Toshiba, Toshiba],
                            img_for_busket: Toshiba,
                            id:4
                        }
                    }
            ],
                pictures:[
                    {src: Video, type: 'video', poster: Poster},
                    {src: Img1, type: 'img'},
                    {src: Img2, type: 'img'},
                    {src: Img3, type: 'img'},
                    {src: Img4, type: 'img'},
                ],
                postname: 'Խորովածի փառատոն',
                slides:[
                    {src: Video, type: 'video', poster: Poster},
                    {src: Img1, type: 'img'},
                    {src: Img2, type: 'img'},
                    {src: Img3, type: 'img'},
                    {src: Img4, type: 'img'},
                ]
            },
            products_for_the_festival:[
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd4, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd5, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd1, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd3, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000}
            ],
            needed_products: []
        }

        this.myStorage = window.localStorage

        this.modal_window = React.createRef()
        this.pp_ref = React.createRef()

        this.modal_flag = false
        this.redirect = true

    }


    goToShoppingCart = () =>{
        let needed_products = this.state.needed_products


        for (let i = 0; i < needed_products.length; i++) {
            let new_order = {}
            new_order.img = needed_products[i].img_for_busket
            new_order.name = needed_products[i].name
            new_order.days = needed_products[i].days
            new_order.from = needed_products[i].from
            new_order.to = needed_products[i].to
            new_order.count = needed_products[i].count
            new_order.prise = needed_products[i].prise
            new_order.total_prise = needed_products[i].total_prise
            new_order.id = needed_products[i].id

            // console.log(needed_products[i])

            // this.myStorage.removeItem('products')
    
            let storage_prods = JSON.parse(this.myStorage.getItem('products'))
    
            if(storage_prods === null){   //Storage haven't products

                Products.push(new_order)
                this.myStorage.setItem('products', JSON.stringify(Products))
                
            } else{     // Storage have products

                let prods = storage_prods
                let prod_length = prods.length
                let have_prod = false
                

                for (let k = 0; k < prod_length; k++) {
                    if(prods[k].id === new_order.id){
                        // console.log(prods[k].id, new_order.id);
                        // console.log('You have this prod!')
                        have_prod = true
                        k = prod_length

                    } else{

                        // console.log(prods[k].id, new_order.id);
                        // console.log("You don't have this prod.");
                        have_prod = false
                    }
                }


                if (have_prod === false){
                    prods.push(new_order)
                    this.myStorage.setItem('products', JSON.stringify(prods))
                }
            }
        }



        this.props.history.push({
            pathname:'/shopping-cart',
            state: { 
                have: needed_products.length === 0 ? false : true,
                from: 'fest-page'
            }
        })
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


    addProd = (product, event) => {
        let all_prods = this.state.needed_products
        
        if(event.target.checked){
            all_prods.push(product)

        } else{

            for (let i = 0; i < all_prods.length; i++) {
                if(all_prods[i].id === product.id){
                    all_prods.splice(i, 1)
                }
            }
        }

        this.setState({
            needed_products: all_prods
        })
    }




    componentDidMount(){
        // console.log(this.props.location.pathname)
    }


    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }


        return(
            <div ref={this.pp_ref} className='fest-page'>
                <Path/>


                <div ref={this.modal_window} className='modal'>
                    <div className='modal-content'>
                        <span onClick={this.modal_fun.bind(null, false)} className='closeModal'>✖</span>
                        <h1>{this.state.fest.postname}</h1>
                        <Slider {...settings}>
                        {
                            this.state.fest.slides.map((slide, idx)=>{
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
                    <h1>{this.state.fest.name}</h1>

                    <div className='content'>
                        <div className='block'>
                            <p className='text'>{this.state.fest.info1}</p>
                            <p className='text'>{this.state.fest.info2}</p>

                            <div className='info'>
                                <div className='info-block'>
                                    <h5>Երբ</h5>
                                    <h5>Որտեղ</h5>
                                    <h5>Գին</h5>
                                    <h5>Նշումներ</h5>
                                </div>
                                <div className='info-block'>
                                    <p>{this.state.fest.when}</p>
                                    <p>{this.state.fest.where}</p>
                                    <p>{this.state.fest.price}</p>
                                    <ul>
                                        {
                                            this.state.fest.notes.map((note, idx)=>{
                                                return(
                                                    <li key={idx}>{note}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className='line'></div>
                            
                            <form>
                                <h2>Լրացրեք մասնակցության համար</h2>

                                <input placeholder='Անուն*' />
                                <div className='inps'>
                                    <input placeholder='Հեռախոս*' />
                                    <input placeholder='Email*' />
                                </div>

                                <div className='notes'>
                                    <h5>Անհրաժեշտ է</h5>
                                    <ul>
                                    {
                                        this.state.fest.necessary.map((nes, idx)=>{
                                            return(
                                                <li key={idx}>
                                                    <label>
                                                        <input onChange={this.addProd.bind(null, nes.product)} name={nes.name} type='checkbox'/>
                                                        {nes.name}
                                                    </label>
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>

                                <div className='delivery'>
                                    <h5>Առաքում</h5>
                                    <label>
                                        <input name='այո' type='checkbox' />
                                        այո
                                    </label>
                                </div>

                                <p className='last-info'>Հարգելի հաճախորդ, ամրագրումից հետո մեր օպերատորը կզանգահարի Ձեզ այնուհետև էլեկտրոնային հասցեով կստանաք պատվերի հաստատման հղումը:</p>

                                <button onClick={this.goToShoppingCart} type='button'>Ամրագրել</button>
                            </form>
                        </div>
                        
                        <div className='block'>
                            {
                                this.state.fest.pictures.map((pic, idx)=>{
                                    return(
                                        <div className={pic.type === 'video'?'pic-block video':'pic-block'} key={idx}>
                                        {
                                            pic.type === 'img' ?
                                            <img onClick={this.modal_fun.bind(null, true)} src={pic.src} alt='img'/> :
                                            <video poster={pic.poster} controls>
                                                <source src={pic.src} type="video/mp4"/>
                                            </video>
                                        }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='section2'>
                    <div className='container160'>
                        <h1>Ապրանքներ փառատոնի համար</h1>

                        <div className='fest_prods'>
                        {
                            this.state.products_for_the_festival.map((card, idx)=>{
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
        )
    }
}


export default withRouter(FestivalPage)