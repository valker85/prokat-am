import React from 'react';
import {NavLink} from 'react-router-dom'

// images
import Logo from '../../assets/img/header/ProkatAm Logo.png'
import Basket from '../../assets/img/basket.svg'
import Close from '../../assets/img/header/close.png'
import axios from 'axios';

// Componets



export default class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            modal_classes:['modal'],
            goods:[],
            services:[],
            transport:[],
            empty: true
        }

        this.hide_menu = React.createRef()
        this.page_ref = React.createRef()

        this.menu_flag = false
    }

    open_menu = (flag, event) => {
        this.menu_flag = flag

        let classes = this.state.modal_classes
        let root = this.page_ref.current.parentNode

        if( event.target.className !== 'hide_menu' &&
            event.target.tagName !== 'LI'          &&
            event.target.tagName !== 'UL'          ){
                
            if(this.menu_flag === true){
                classes.push('open')
                this.setState({
                    modal_classes: classes
                })
                root.style.height = '100vh'
                root.style.overflow = 'hidden'
            }else{
                classes.pop()
                this.setState({
                    modal_classes: classes
                })
                root.style.height = 'auto'
                root.style.overflow = 'auto'
            }
        }
    }

    open_lis = (num, close = false) => {
        let uls = this.hide_menu.current.childNodes

        uls[num].className === 'active' ? 
        uls[num].classList.remove('active') :
        uls[num].classList.add('active')
    }

    haveProd = (prop) => {
        this.setState({
            empty: prop
        })
    }

    componentDidMount(){
        let storage_prods = JSON.parse(window.localStorage.getItem('products'))
        let config = {
            headers: {
                auth:{
                    username: 'prokat',
                    password: '9H8lFCGGAHksplo9h9kQ'
                }
            }
        }

        if(Boolean(storage_prods) === true && storage_prods.length > 0){
            setTimeout(()=>{
                this.setState({
                    empty: false
                })
            })
        } else{
            setTimeout(()=>{
                this.setState({
                    empty: true
                })
            })
        }
        

        axios.post('https://prokat.weflex.am/api/categories/section/products', {  }, config.headers)
            .then((response) => {

                this.setState({
                    goods: response.data.data 
                })
            })
            .catch(function (error) {
                console.log(error)
            })

        axios.post('https://prokat.weflex.am/api/categories/section/services', {  }, config.headers)
            .then((response) => {

                this.setState({
                    services: response.data.data 
                })
            })
            .catch(function (error) {
                console.log(error)
            })


    }

    render(){

        return(
            <div ref={this.page_ref} className='header'>

                <div
                    onClick={this.open_menu.bind(null, false)} 
                    className={this.state.modal_classes.join(' ')}>
                    <div ref={this.hide_menu} className='hide_menu'>
                        <img className='close' src={Close} alt='close' />
                        <ul>
                            <li onClick={this.open_lis.bind(null, 1)}>Ապրանքներ</li>
                            {this.state.goods.map((li, idx)=>{
                                return <li key={idx}><NavLink to={`/filter/goods/${li.url}`}>{li.title_am}</NavLink></li>
                            })}
                        </ul>

                        <ul>
                            <li onClick={this.open_lis.bind(null, 2)}>Ծառայություններ</li>
                            {this.state.services.map((li, idx)=>{
                                return <li key={idx}><NavLink to={`/filter/services/${li.url}`}>{li.title_am}</NavLink></li>
                            })}
                        </ul>

                        <div className='other_links'>
                            <NavLink to='/portfolio'>Պարտֆոլիո</NavLink>
                            <NavLink to='/festivals'>Փառատոններ</NavLink>
                            <NavLink to='/charity-events'>Բարեգործական միջոցառումներ</NavLink>
                            <NavLink to='/about'>Մեր մասին</NavLink>
                            <NavLink to='/terms'>Պայմաններ</NavLink>
                            <NavLink to='/contact-us'>Հետադարձ կապ</NavLink>
                        </div>

                        <div className='phones'>
                            <a href='tel:+37499772528'>(+374 99) 77 25 28</a>
                            <a href='tel:+37494772528'>(+374 94) 77 25 28</a>
                            <a href='tel:+37455772528'>(+374 55) 77 25 28</a> 
                        </div>

                        <div className='languages'>
                            <p>English</p>
                            <p className='active'>Հայերեն</p>
                        </div>
                    </div>
                </div>

                <div className='container160'>
                    <div className='header-wrapper'>
                        <div className='block'>
                            <NavLink to='/'>
                                <img src={Logo} alt='logo'/>
                            </NavLink>
                            <a href='tel:+37499772528'>(+374 99) 77 25 28</a>
                            <a href='tel:+37494772528'>(+374 94) 77 25 28</a>
                            <a href='tel:+37455772528'>(+374 55) 77 25 28</a>    
                        </div>

                        <div className='block'>
                            <ul className='menu'>
                                <li>
                                    <button type='button' className='menu_btn' onClick={this.open_menu.bind(null, true)}>
                                        Մենյու
                                        <div>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </button>
                                </li>
                                <li className='busket'>
                                    <NavLink to='/shopping-cart'>
                                        <img src={Basket} alt='basket'/>
                                        {
                                            this.state.empty === true ? null :
                                            <span className='empty'></span>
                                        }
                                    </NavLink>
                                </li>
                                <li>En</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}