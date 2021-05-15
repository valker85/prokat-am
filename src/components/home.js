import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'


// Componets
import Header from './other-components/header';


// images
import Search from '../assets/img/home/search.svg'

// import Prod1 from '../assets/img/home/products/prod1.png'
// import Prod2 from '../assets/img/home/products/prod2.png'
// import Prod3 from '../assets/img/home/products/prod3.png'
// import Prod4 from '../assets/img/home/products/prod4.png'
// import Prod5 from '../assets/img/home/products/prod5.png'
// import Prod6 from '../assets/img/home/products/prod6.png'
// import Prod7 from '../assets/img/home/products/prod7.png'
// import Prod8 from '../assets/img/home/products/prod8.png'
// import Prod9 from '../assets/img/home/products/prod9.png'

// import Serv1 from '../assets/img/home/services/serv1.png'
// import Serv2 from '../assets/img/home/services/serv2.png'
// import Serv3 from '../assets/img/home/services/serv3.png'
// import Serv4 from '../assets/img/home/services/serv4.png'
// import Serv5 from '../assets/img/home/services/serv5.png'
// import Serv6 from '../assets/img/home/services/serv6.png'
// import Serv7 from '../assets/img/home/services/serv7.png'
// import Serv8 from '../assets/img/home/services/serv8.png'

// import topProd1 from '../assets/img/home/top-prods/prod1.png'
// import topProd2 from '../assets/img/home/top-prods/prod2.png'
// import topProd3 from '../assets/img/home/top-prods/prod3.png'
// import topProd4 from '../assets/img/home/top-prods/prod4.png'
// import topProd5 from '../assets/img/home/top-prods/prod5.png'





export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tab: 1,
            // products:{
            //     goods:[
            //         {image: Prod1, category: 'computer-equipment', name: 'Համակարգչային տեխնիկա'},
            //         {image: Prod2, category: 'everything-for-events', name: 'Ամեն ինչ միջոցառումների համար'},
            //         {image: Prod3, category: 'tableware', name: 'Սպասք'},
            //         {image: Prod4, category: 'tools', name: 'Գործիքներ'},
            //         {image: Prod5, category: 'tourism', name: 'Տուրիզմ'},
            //         {image: Prod6, category: 'clothing', name: 'Հագուստ'},
            //         {image: Prod7, category: 'means-of-communication', name: 'Կապի միջոցներ'},
            //         {image: Prod8, category: 'fun', name: 'Ժամանց'},
            //         {image: Prod9, category: 'sound-and-light-equipment', name: 'Ձայնային և լուսային տեխնիկա'}
            //     ],
            //     services:[
            //         {image: Serv1, category: 'events', name: 'Միջոցառումներ'},
            //         {image: Serv2, category: 'corporate-events', name: 'Կորպորատիվ միջոցառումներ'},
            //         {image: Serv3, category: 'сatering-services', name: 'Ֆուրշետների կազմակերպում'},
            //         {image: Serv4, category: 'сhildrens-services', name: 'Մանկական ծառայություններ'},
            //         {image: Serv5, category: 'service-staff', name: 'Սպասարկող անձնակազմ'},
            //         {image: Serv6, category: 'casting-services', name: 'Ձևավորման ծառայություններ'},
            //         {image: Serv7, category: 'special-effects', name: 'Հատուկ էֆֆեկտներ'},
            //         {image: Serv8, category: 'cleaning-services', name: 'Մաքրման ծառայություններ'}
            //     ]
            // },
            // top_prods:[
            //     {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
            //     {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
            //     {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
            //     {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd4, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000},
            //     {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd5, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
            //     {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd1, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
            //     {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
            //     {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: topProd3, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000}
            // ],
            products:{
                goods:[],
                services:[] 
            },
            top_prods:[],
        }

        this.searchInput = React.createRef()
        this.tabs = React.createRef()
    }


    inputFocus = () =>{
        this.searchInput.current.placeholder = 'ամենաշատը փնտրւմ են վրաններ, հեծանիվներ և համակարգիչներ'
    }

    changeTab = (index) =>{
        let tabs = this.tabs.current.childNodes

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].className = ''
        }
        
        tabs[index].classList.add('active')

        this.setState({
            tab: index+1
        })
    }

    tabFun = () =>{
        if(this.state.tab === 1){
            return(
                <div className='cards'>
                    {
                        this.state.products.goods.map((card, idx)=>{
                            return(
                                <Link to={{
                                    pathname:`/filter/goods/${card.url}`,
                                    product: card.type
                                }} className='card' key={idx}>
                                    <div className='img-wrapper'>
                                        <img src={`https://prokat.weflex.am/public/uploads/categories/${card.img}`} alt='subject'/>
                                    </div>
                                    <div className='name-wrapper'>
                                        <h1>{card.title_en}</h1>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        } else if(this.state.tab === 2){
            return(
                <div className='cards'>
                    {
                        this.state.products.services.map((card, idx)=>{
                            return(
                                <Link to={{
                                    pathname:`/filter/services/${card.url}`,
                                    product: card.type
                                }} className='card' key={idx}>
                                    <div className='img-wrapper service'>
                                        <img src={`https://prokat.weflex.am/public/uploads/categories/${card.img}`} alt='subject'/>
                                    </div>
                                    <div className='name-wrapper'>
                                        <h1>{card.title_en}</h1>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }
    }

    topProds = () => {
        return(
            <div className='top_prods'>
                {
                    this.state.top_prods.map((card, idx)=>{
                        return(
                            <div className='card' key={idx}>
                                <div className='img-wrapper'>
                                    <img src={`https://prokat.weflex.am/public/uploads/products/${card._id}/${card.img}`} alt='img'/>
                                </div>
                                <div className='content'>
                                    {/* 
                                    <NavLink 
                                        to={card.type_url} 
                                        className={card.type.length > 21 ? 'type' : 'type'}
                                    >
                                        {card.type}
                                    </NavLink> 
                                    */}
                                    
                                    <h1 onClick={()=>{this.props.history.push(card.prod_url)}} 
                                        className={card.title_en ? card.title_en.length > 21 ? 'name long' : 'name' : null}
                                        >
                                        {card.title_en}
                                    </h1>

                                    <ul className={ card.title_en ? card.title_en.length > 21 ? 'info long' : 'info' : null }>
                                    {
                                        card.features.map((param, idx)=>{
                                            return(
                                                <li key={idx}>{param}</li>
                                            )
                                        }) 
                                    }
                                    </ul>
                                    <div className='line'></div>
                                    <div className='prise-wrapper'>
                                        <div className='prise'>{card.price} <span>դր/օր</span></div>
                                        <div className='rent'><NavLink to={card.url}>Վարձել</NavLink></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount(){
        let prods = this.state.products
        let config = {
            headers: {
                auth:{
                    username: 'prokat',
                    password: '9H8lFCGGAHksplo9h9kQ'
                }
            }
        }

        axios.post('https://prokat.weflex.am/api/categories/section/products', {  }, config.headers)
            .then((response) => {
                prods.goods = response.data.data
                this.setState({
                    products: prods 
                })
            })
            .catch(function (error) {
                console.log(error)
            })

        axios.post('https://prokat.weflex.am/api/categories/section/services', {  }, config.headers)
            .then((response) => {
                prods.services = response.data.data

                console.log( response.data.data )

                this.setState({
                    products: prods 
                })
            })
            .catch(function (error) {
                console.log(error)
            })

        axios.post('https://prokat.weflex.am/api/products', { top: true }, config.headers)
            .then((response) => {
                // console.log( response.data.data )
                this.setState({
                    top_prods: response.data.data 
                }, ()=>{ console.log(this.state.top_prods) } )
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    render(){
        return(
            <>
            <Header/>
            <div className='home'>
                <div className='section1'>
                    <div className='container160'>
                        <h1>Վարձույթով ապրանքներ միջոցառումների<br/> կազմակերպման համար</h1>
                        <div className='input'>
                            <img src={Search} alt='search'/>
                            <input ref={this.searchInput} onFocus={this.inputFocus} name='category'/>
                            <button>Որոնել</button>
                        </div>
                        <div className='some_info'>
                            <p>Երբեմն որոնում են <NavLink to='/'>նոութբուք</NavLink> կամ <NavLink to='/'>սկաներ</NavLink>:</p>
                        </div>

                        <button className='mob_btn'>Որոնել</button>

                    </div>
                </div>

                <div className='section2'>
                    <div className='container160'>
                        <div ref={this.tabs} className='tabs'>
                            <h3 className='active' onClick={this.changeTab.bind(null, 0)}>Ապրանքներ</h3>
                            <h3 onClick={this.changeTab.bind(null, 1)}>Ծառայություններ</h3>
                        </div>
                        {this.tabFun()}
                    </div>
                </div>


                <div className='section3'>
                    <div className='container160'>
                        <h1>Թոփ առաջարկներ</h1>
                        {this.topProds()}
                    </div>
                </div>
            </div>
            </>
        )
    }
}