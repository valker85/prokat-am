import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Componets
import Header from './other-components/header'
import Footer from './other-components/footer'


// images
import Search from '../assets/img/home/search.svg'

import Prod1 from '../assets/img/home/products/prod1.png'
import Prod2 from '../assets/img/home/products/prod2.png'
import Prod3 from '../assets/img/home/products/prod3.png'
import Prod4 from '../assets/img/home/products/prod4.png'
import Prod5 from '../assets/img/home/products/prod5.png'
import Prod6 from '../assets/img/home/products/prod6.png'
import Prod7 from '../assets/img/home/products/prod7.png'
import Prod8 from '../assets/img/home/products/prod8.png'
import Prod9 from '../assets/img/home/products/prod9.png'

import topProd1 from '../assets/img/home/top-prods/prod1.png'
import topProd2 from '../assets/img/home/top-prods/prod2.png'
import topProd3 from '../assets/img/home/top-prods/prod3.png'
import topProd4 from '../assets/img/home/top-prods/prod4.png'
import topProd5 from '../assets/img/home/top-prods/prod5.png'





export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tab: 1,
            products:{
                goods:[
                    {image: Prod1, section: 'goods', category: 'computer-equipment', name: 'Համակարգչային տեխնիկա'},
                    {image: Prod2, section: 'goods', category: 'everything-for-events', name: 'Ամեն ինչ միջոցառումների համար'},
                    {image: Prod3, section: 'goods', category: 'tableware', name: 'Սպասք'},
                    {image: Prod4, section: 'goods', category: 'tools', name: 'Գործիքներ'},
                    {image: Prod5, section: 'goods', category: 'tourism', name: 'Տուրիզմ'},
                    {image: Prod6, section: 'goods', category: 'clothing', name: 'Հագուստ'},
                    {image: Prod7, section: 'goods', category: 'means-of-communication', name: 'Կապի միջոցներ'},
                    {image: Prod8, section: 'goods', category: 'fun', name: 'Ժամանց'},
                    {image: Prod9, section: 'goods', category: 'sound-and-light-equipment', name: 'Ձայնային և լուսային տեխնիկա'}
                ],
                services:[
                    {image: Prod1, section: 'services', category: 'service1', name: 'Something'},
                    {image: Prod1, section: 'services', category: 'service2', name: 'Something'},
                    {image: Prod1, section: 'services', category: 'service3', name: 'Something'},
                    {image: Prod1, section: 'services', category: 'service4', name: 'Something'},
                    {image: Prod1, section: 'services', category: 'service5', name: 'Something'},
                    {image: Prod1, section: 'services', category: 'service6', name: 'Something'},
                    {image: Prod1, section: 'services', category: 'service7', name: 'Something'},
                    {image: Prod1, section: 'services', category: 'service8', name: 'Something'},
                    {image: Prod1, section: 'services', category: 'service9', name: 'Something'}
                ]
            },
            top_prods:[
                {img: topProd1, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000},
                {img: topProd4, type: 'Տեխնիկա', name: 'Գրասենյակային աթոռ', info: ['մետաղ', 'գործվածք', 'սև'], prise: 1000},
                {img: topProd5, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: topProd1, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000},
                {img: topProd3, type: 'Տեխնիկա', name: 'Գրասենյակային աթոռ', info: ['մետաղ', 'գործվածք', 'սև'], prise: 1000}
            ]
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
                                    pathname:`/${card.section}/${card.category}`,
                                    product: card.type
                                }} className='card' key={idx}>
                                    <div className='img-wrapper'>
                                        <img src={card.image} alt='subject'/>
                                    </div>
                                    <div className='name-wrapper'>
                                        <h1>{card.name}</h1>
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
                                    pathname:`/${card.type}`,
                                    product: card.type
                                }} className='card' key={idx}>
                                    <div className='img-wrapper'>
                                        <img src={card.image} alt='subject'/>
                                    </div>
                                    <div className='name-wrapper'>
                                        <h1>{card.name}</h1>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }
    }


    topProds = () =>{
        return(
            <div className='top_prods'>
                {
                    this.state.top_prods.map((card, idx)=>{
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
        )
    }

    render(){
        return(
            <div className='home'>
                <Header/>
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
                        {
                            this.topProds()
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}