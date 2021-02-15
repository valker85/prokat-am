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
                images:[Toshiba, Toshiba, Toshiba, Toshiba, Toshiba]
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
            ]
        }
    
    }


    show_image = () =>{
        
    }



    render(){
        return(
            <div className='product-page'>
                <Path/>
                <div className='container160'>
                    <div className='section1'>
                        <div className='block'>
                            <div className='images-blocks'>
                            {
                                this.state.product.images.map((img, idx)=>{
                                    return(
                                        <div className='img-block' key={idx}>
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

                        </div>
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


