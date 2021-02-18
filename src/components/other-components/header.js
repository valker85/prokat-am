import React from 'react';
import {NavLink} from 'react-router-dom'

// images
import Logo from '../../assets/img/header/ProkatAm Logo.png'
import Basket from '../../assets/img/basket.svg'




export default class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            modal_classes:['modal']
        }

        this.modal = React.createRef()
        this.menu_flag = false
    }



    open_menu = (flag) => {
        this.menu_flag = flag
        let classes = this.state.modal_classes

        if(this.menu_flag === true){
            classes.push('open')
            this.setState({
                modal_classes: classes
            })
        }else{
            classes.pop()
            this.setState({
                modal_classes: classes
            })
        }
    }


    render(){
        return(
            <div className='header'>

                <div
                    onClick={this.open_menu.bind(null, false)} 
                    className={this.state.modal_classes.join(' ')}
                >
                        
                    <div className='hide_menu'>
                        <ul>
                            <li>Ապրանքներ</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                        </ul>
                        <ul>
                            <li>Ծառայություններ</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                        </ul>
                        <ul>
                            <li>Տրանսպորտ</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                        </ul>
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
                                    <button onClick={this.open_menu.bind(null, true)}>
                                        Մենյու
                                        <div>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <NavLink to='/basket'>
                                        <img src={Basket} alt='basket'/>
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