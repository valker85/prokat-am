import React from 'react';
import { NavLink } from 'react-router-dom';


// Components
import Path from './other-components/path'


// Images
import topProd1 from '../assets/img/home/top-prods/prod1.png'
import topProd2 from '../assets/img/home/top-prods/prod2.png'
import topProd3 from '../assets/img/home/top-prods/prod3.png'
import topProd4 from '../assets/img/home/top-prods/prod4.png'

import Toshiba from '../assets/img/product-page/toshiba.png'
import Calendar from '../assets/img/product-page/calendar.svg'



export default class ProductPage extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            product: {
                name: 'Toshiba Satellite c50',
                prise: 6000,
                description:[
                    'Processor Intel Core i3-3120M','Processor clock speed 2.5GHz','Memory 4.00GB','Memory slots 2','Memory slots free 1','Maximum memory 16GB','Size 32x380x240mm','Weight 2.3kg','Sound Realtek HD Audio','Pointing device touchpad','Display','Viewable size 15.6 in','Native resolution 1,366x768','Graphics Processor Intel HD Graphics 4000','Graphics/video ports HDMI, VGA','Graphics Memory 256MB','Storage','Total storage capacity 1,024GB','Optical drive type DVD+/-RW +/-DL','Ports and Expansion','USB ports 3','Bluetooth yes','Wired network ports 1x 10/100','Wireless networking support 802.11n','PC Card slots none','Supported memory cards SDXC, MMC','Other ports 1x USB3, headphone, microphone','Miscellaneous','Carrying case No','Operating system Windows 8','Operating system restore option restore partition','Software included none','Optional extras none'
                ],
                images:[Toshiba, topProd1, Toshiba, Toshiba, Toshiba]
            },
            similar_suggestions:[
                {img: topProd1, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000}
            ],
            comparable_products:[
                {img: topProd1, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: topProd2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: topProd3, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000},
                {img: topProd4, type: 'Տեխնիկա', name: 'Գրասենյակային աթոռ', info: ['մետաղ', 'գործվածք', 'սև'], prise: 1000}
            ],
            actual_image: 0,
            count: 1,
            total_prise: 0
        }
    

        this.images_blocks = React.createRef()
        
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
        let new_total_prise = this.state.total_prise


        if(sign === '+'){
            new_total_prise += prise
            this.setState({ count: ++count })
        } else{
            new_total_prise -= prise
            this.setState({ count: --count })
        }
        
        this.setState({
            total_prise: new_total_prise
        })

    }

    componentDidMount(){

        setTimeout(()=>{
            this.setState({
                total_prise: this.state.product.prise
            })
        })

    }

    render(){
        return(
            <div className='product-page'>
                <Path/>
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

                            <div className='general-image'>
                                <h2>{this.state.product.name}</h2>
                                {this.show_image()}
                            </div>
                        </div>

                        <div className='block'>
                            <h1>{this.state.product.prise} <span>դր./օր</span></h1>
                            <div className='line'></div>

                            <form className='other-content'>
                                <div className='input'>
                                    <input placeholder='Վարձակալության օր*' />
                                    <img src={Calendar} alt='calendar'/>
                                </div>

                                <div className='counter'>
                                    <button
                                        type='button'
                                        disabled={this.state.count <= 1 ? true : false} 
                                        onClick={this.counter}>—</button>
                                    <h3>{this.state.count}</h3>
                                    <button type='button' onClick={this.counter.bind(null, '+')}>+</button>
                                </div>

                                <button className='order' type='submit'>Պատվիրել` {this.state.total_prise} ֏</button>
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
        )
    }
}


// <div className='counter'>
// <button
//     disabled={this.state.count <= 1 ? true : false} 
//     onClick={()=>{ this.setState({ count: --this.state.count }) }}>-</button>
// <h1>{this.state.count}</h1>
// <button onClick={()=>{ this.setState({ count: ++this.state.count }) }}>+</button>
// </div>

