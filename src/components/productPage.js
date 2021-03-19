import React from 'react';
import { NavLink } from 'react-router-dom';

// Day Picker
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// React-slick (slider)
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Components
import Path from './other-components/path'
import Header from './other-components/header';

// Products
import Products from './other-components/ordered_prods'


// Images
import topProd1 from '../assets/img/home/top-prods/prod1.png'
import topProd2 from '../assets/img/home/top-prods/prod2.png'
import topProd3 from '../assets/img/home/top-prods/prod3.png'
import topProd4 from '../assets/img/home/top-prods/prod4.png'

import Toshiba from '../assets/img/product-page/toshiba.png'
import Calendar from '../assets/img/product-page/calendar.svg'

import Serv1 from '../assets/img/services/serv1.png'
import Mini1 from '../assets/img/services/mini1.png'

export default class ProductPage extends React.Component{

    constructor(props){
        super(props)

        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);

        this.state = {
            product: {
                name: '',
                prise: null,
                description:[],
                images:[],
                img_for_busket: '',
                id:0
            },
            similar_suggestions:[
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000}
            ],
            comparable_products:[
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd4, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000}
            ],
            actual_image: 0,
            count: 1,
            total_prise: 0,
            days: 1,
            from: undefined,
            to: undefined,
            order: {},
            redirect: true,
            product_is_in_stock: false
        }

        this.myStorage = window.localStorage
        this.images_blocks = React.createRef()
        this.dayPicker = React.createRef()
        this.headerRef = React.createRef()

        this.picker_open = false
        this.redirect = true

    }



    chooseImg = (idx) => {
        let img_blocks = this.images_blocks.current.childNodes

        for (let i = 0; i < img_blocks.length; i++) {
            if(img_blocks[i].className === 'img-block active'){
                img_blocks[i].className = 'img-block'
            }
        }
        img_blocks[idx].classList.add('active')

        this.setState({
            actual_image: idx
        })
    }

    show_image = () =>{
        return(
            <div className='general-image-block'>
                <img src={this.state.product.images[this.state.actual_image]} alt='general_image'/>
            </div>
        )
    }

    counter = (sign) =>{
        let count = this.state.count
        let prise = this.state.product.prise
        let new_prise = 0

        let new_total_prise = this.state.total_prise
        let days = this.state.days


        if(sign === '+'){
            if(days > 1){
                new_prise = prise*days

                new_total_prise += new_prise
                this.setState({ count: ++count })
            } else{
                new_total_prise += prise
                this.setState({ count: ++count })
            }
        } else{
            if(days > 1){
                new_prise = prise*days

                new_total_prise -= new_prise
                this.setState({ count: --count })
            } else{
                new_total_prise -= prise
                this.setState({ count: --count })
            }
        }
        
        this.setState({
            total_prise: new_total_prise
        })
    }

    open_calendar = () =>{
        this.picker_open = !this.picker_open

        if(this.picker_open === true){
            this.dayPicker.current.style.display = 'block'
        } else{
            this.dayPicker.current.style.display = 'none'
            this.apply_btn(true)
        }
    }

    apply_btn = (close) =>{
        if(close === true){
            this.picker_open = false
            this.dayPicker.current.style.display = 'none'
        }

        // Устанавливается цена в зависимости от кол-ва продуктов.
        let count = this.state.count
        let prod_prise = this.state.product.prise
        let new_prise = prod_prise

        let here = this

        new_prise = prod_prise*count

        // Функция money_counter срабатывает быстрее, чем обновляется state
        async function name() {
            await here.setState({
                total_prise: new_prise
            })

            here.money_counter()
        }

        name()
    }

    money_counter = () =>{
    
        // Подсчет выбранных дней и получение общей суммы. 
        let from = this.state.from
        let to = this.state.to
        let days

        if(to === undefined || to === null){
            to = from
            this.setState({
                to: to
            })
        }

        if(from !== null && to !== null && from !== undefined && to !== undefined){
            days = Math.floor((to.getTime() - from.getTime())/(1000*60*60*24))+1
        
            let total_prise = this.state.total_prise
            let new_total_prise = total_prise
    
            new_total_prise *= days
    
            this.setState({
                total_prise: new_total_prise,
                days: days
            })
        }

    }

    orderFun = () =>{
        let new_order = {}
        new_order.img = this.state.product.img_for_busket
        new_order.name = this.state.product.name
        new_order.days = this.state.days
        new_order.from = this.state.from === undefined ? undefined : this.state.from
        new_order.to = this.state.to === undefined ? undefined : this.state.to
        new_order.count = this.state.count
        new_order.prod_prise = this.state.product.prise
        new_order.total_prise = this.state.total_prise
        new_order.id = this.state.product.id

        // new_order.id = 1


        if(new_order.from === undefined){
            this.setState({
                redirect: false
            })
            this.redirect = false
        } else{
            this.setState({
                redirect: true
            })
            this.redirect = true
        }


        if(this.redirect === true){
            // this.myStorage.removeItem('products')

            let storage_prods = JSON.parse(this.myStorage.getItem('products'))
            let redirect = true

            if(storage_prods === null){   //Storage haven't products

                Products.push(new_order)
                this.myStorage.setItem('products', JSON.stringify(Products))
                
            } else{     // Storage have products

                let prods = storage_prods
                let prod_length = prods.length

                for (let i = 0; i < prod_length; i++) {
                    if (prods[i].id === new_order.id){

                        console.log('You have this prod!')
                        redirect = false
                        this.setState({
                            product_is_in_stock: true
                        })     
                        this.error_fun()

                    } else if(prods[i].id !== new_order.id){
                        
                        console.log('Add prod!')
                        this.setState({
                            product_is_in_stock: false
                        })

                        prods.push(new_order)
                        this.myStorage.setItem('products', JSON.stringify(prods))
                        redirect = true
                    }
                }
            }

            if(redirect === true){
                this.props.history.push('/shopping-cart')
            }

        }
    }

    error_fun = () =>{
        setTimeout(() => {
            this.setState({
                product_is_in_stock: false
            })             
        }, 5000)
    }

    // Day Picker ===================
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);

        if(range.from !== undefined && range.to !== undefined){
            this.setState({
                from: range.from,
                to: range.to
            })

            // console.log(range.from)
            // console.log(range.to)

            this.apply_btn(false)
        }
    }
    
    handleResetClick() {
        this.setState({
            from: undefined,
            to: undefined,
            total_prise: this.state.product.prise
        });
    }
    // ==============================

    componentDidMount(){
        let server_prod = {
            type: 'service',
            name: 'Toshiba Satellite c50',
            prise: 6000,
            description:[
                'Processor Intel Core i3-3120M','Processor clock speed 2.5GHz','Memory 4.00GB','Memory slots 2','Memory slots free 1','Maximum memory 16GB','Size 32x380x240mm','Weight 2.3kg','Sound Realtek HD Audio','Pointing device touchpad','Display','Viewable size 15.6 in','Native resolution 1,366x768','Graphics Processor Intel HD Graphics 4000','Graphics/video ports HDMI, VGA','Graphics Memory 256MB','Storage','Total storage capacity 1,024GB','Optical drive type DVD+/-RW +/-DL','Ports and Expansion','USB ports 3','Bluetooth yes','Wired network ports 1x 10/100','Wireless networking support 802.11n','PC Card slots none','Supported memory cards SDXC, MMC','Other ports 1x USB3, headphone, microphone','Miscellaneous','Carrying case No','Operating system Windows 8','Operating system restore option restore partition','Software included none','Optional extras none'
            ],
            images:[Toshiba, topProd1, Toshiba, Toshiba, Toshiba],
            general_image: Toshiba,
            img_for_busket: Toshiba,
            id:0
        }

        // let server_prod = {
        //     type: 'service',
        //     name: 'Ծանր ծուխ',
        //     prise: 6000,
        //     description:[
        //         'Ցանկացծ միջոցառում կարող է ավելի հեքիաթային և կախարդական դառնալ հատուկ էֆֆեկտների օգնությաբ՝ րանցից ամենաասիրվածներից մեկը ծանր ծուխն է։',
        //         'Ծանր ծուխը արձակվում է հատուկ գեներատորների օգնությամբ՝ СО2-ի հիման վրա: Ծխի բարձրությունը և թավությունը հնարավոր է կարգավորել՝ կախված ձեր ընտրությունից և սրահի չափից:'
        //     ],
        //     images:[Serv1],
        //     general_image: Serv1,
        //     img_for_busket: Serv1,
        //     id:100
        // }

    

        // setTimeout(()=>{
        this.setState({
            product: server_prod
        })
        // })

        setTimeout(()=>{
            this.setState({
                total_prise: this.state.product.prise
            })
        })

    }



    render(){
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };

        const settings = {
            dots: true,
            infinite: true,
            speed: 250,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(
            <>
            <Header ref={this.headerRef}/>
            <div className='product-page'>
                <Path/>

                {
                    this.state.product_is_in_stock === false ? null :
                    <div onClick={()=>{ this.setState({product_is_in_stock: false}) }} className='errorBlock'>
                        <h2>Այս ապրանքը արդեն զամբյուղի մեջ է</h2>
                    </div>
                }


                <div className='container160'>
                    <div className='section1'>
                        <div className='block'>
                            <div ref={this.images_blocks} className='images-blocks'>
                            {
                                this.state.product.images.map((img, idx)=>{
                                    return(
                                        <div
                                            className={idx === 0 ? 'img-block active' : 'img-block'}
                                            onClick={this.chooseImg.bind(null, idx)} key={idx}>
                                            <img src={img} alt='product'/>
                                        </div>
                                    )
                                })
                            }
                            </div>

                            <div ref={this.images_blocks} className='images-blocks mob'>
                                <Slider {...settings}>
                                    {
                                        this.state.product.images.map((img, idx)=>{
                                            return(
                                                <div className='slide' key={idx}>
                                                    <img src={img} alt='product'/>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>

                            <div className='general-image'>
                                <h2>{this.state.product.name}</h2>
                                {this.show_image()}
                            </div>
                        </div>

                        <div className='block'>
                            <h1>{this.state.product.prise} <span>դր./օր</span></h1>
                            <div className='line'></div>

                            <form className='other-content'>

                                <div className="RangeExample">
                                    <p className={this.state.redirect ? 'redirect':'error_date'} 
                                    onClick={this.open_calendar}>
                                    {!from && !to && 'Վարձակալության օր*.'}
                                    {from && !to && 'Ընտրեք մինչև որ օր*.'}
                                    {from &&
                                        to &&
                                        `${from.toLocaleDateString()} մինչև
                                        ${to.toLocaleDateString()}`}{' '}
                                        <img src={Calendar} alt='Calendar'/>
                                    </p>

                                    {/* {
                                        this.state.redirect === true ? null :
                                        <span>Ընտրեք օրեր</span> 
                                    } */}

                                    <div ref={this.dayPicker} className='daypick-wrapper'>
                                        <DayPicker
                                            className="Selectable"
                                            numberOfMonths={1}
                                            selectedDays={[from, { from, to }]}
                                            modifiers={modifiers}
                                            onDayClick={this.handleDayClick}
                                        />

                                        <div className='btns-wrapper'>
                                            <button 
                                                disabled={Boolean(from) !== true && Boolean(from) !== true ? true:false} 
                                                className="link" 
                                                onClick={this.handleResetClick}>
                                                    
                                                Մաքրել
                                            </button>

                                            <button 
                                                type='button'
                                                disabled={Boolean(from) !== true && Boolean(from) !== true ? true:false}
                                                onClick={this.apply_btn.bind(null, true)}>
                                                    
                                                Հաստատել
                                            </button>
                                        </div>


                                    </div>
                                </div>

                                <div className='counter'>
                                    <button 
                                        type='button'
                                        disabled={this.state.count <= 1 ? true : false} 
                                        onClick={this.counter}>—</button>
                                    <h3>{this.state.count}</h3>
                                    <button type='button' onClick={this.counter.bind(null, '+')}>+</button>
                                </div>

                                <button onClick={this.orderFun} className='order' type='button'>
                                    Պատվիրել` {this.state.total_prise} ֏ 
                                </button>
                                <p>Երկարաժամկետ վարձակալության դեպքում կգործեն զեղչեր</p>
                            </form>
                            
                        </div>
                    </div>
            
                    <div className='description'>
                        <h1>Նկարագրություն</h1>

                        <ul>
                            {
                                this.state.product.description.map((param, idx)=>{
                                    return(
                                        <li key={idx}>{param}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='section2'>
                        <h1>Նմանատիպ առաջարկներ</h1>
                        <div className='similar_prods'>
                            {
                                this.state.similar_suggestions.map((card, idx)=>{
                                    return(
                                        <div className='card' key={idx}>
                                            <div className='img-wrapper'>
                                                <img src={card.img} alt='img'/>
                                            </div>
                                            <div className='content'>
                                                <NavLink to='/' className='type'>{card.type}</NavLink>
                                                <h1 className={card.name.length > 20 ? 'name long' : 'name'}>{card.name}</h1>

                                                <ul className={card.name.length > 20 ? 'info long' : 'info'}>
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
                                                    <div className='rent'><NavLink to='/'>Վարձել</NavLink></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='section3'>
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
                                                <NavLink to='/' className='type'>{card.type}</NavLink>
                                                <h1 className={card.name.length > 20 ? 'name long' : 'name'}>{card.name}</h1>

                                                <ul className={card.name.length > 20 ? 'info long' : 'info'}>
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
                                                    <div className='rent'><NavLink to='/'>Վարձել</NavLink></div>
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