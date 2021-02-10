import React from 'react';


// components
import Header from './other-components/header'
import Footer from './other-components/footer'
import Path from './other-components/path'

// images
import Search from '../assets/img/home/search.svg'
import { NavLink } from 'react-router-dom';

import Prod1 from '../assets/img/home/top-prods/prod1.png'
import Prod2 from '../assets/img/home/top-prods/prod2.png'
import Prod3 from '../assets/img/home/top-prods/prod3.png'
import Prod4 from '../assets/img/home/top-prods/prod4.png'
import Prod5 from '../assets/img/home/top-prods/prod5.png'


export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            prods:[
                {img: Prod1, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: Prod3, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000},
                {img: Prod4, type: 'Տեխնիկա', name: 'Գրասենյակային աթոռ', info: ['մետաղ', 'գործվածք', 'սև'], prise: 1000},
                {img: Prod5, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: Prod1, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000},
                {img: Prod3, type: 'Տեխնիկա', name: 'Գրասենյակային աթոռ', info: ['մետաղ', 'գործվածք', 'սև'], prise: 1000}
            ],
            comparable_products:[
                {img: Prod1, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: Prod3, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000}
            ]
        }

    }


    render(){
        return(
            <div className='category'>
                <Header/>
                <Path/>

                <div className='section1'>
                    <div className='container160'>
                        <div className='input'>
                            <img src={Search} alt='search'/>
                            <input ref={this.searchInput} name='category'/>
                            <button>Որոնել</button>
                        </div>
                    </div>
                </div>

                <div className='filter'>
                    <div className='container160'>
                        <h1>Ֆիլտր</h1>

                        <div className='filter-wrapper'>
                            <div className='input'>
                                <p>Բաժին</p>
                                <input/>
                            </div>

                            <div className='input'>
                                <p>Կատեգորիա</p>
                                <input/>
                            </div>

                            <div className='input'>
                                <p>Տեսակ</p>
                                <input/>
                            </div>

                            <NavLink to='/category'>Մաքրել ֆիլտրը</NavLink>
                        </div>

                    </div>
                </div>

                <div className='section3'>
                    <div className='container160'>
                        <div className='prods'>
                            {
                                this.state.prods.map((card, idx)=>{
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

                <div className='section4'>
                    <div className='container160'>
                        <h1>Համադրվող ապրանքներ</h1>
                        <div className='prods'>
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

                <Footer/>
            </div>
        )
    }
}