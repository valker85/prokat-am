import React from 'react';
import {NavLink} from 'react-router-dom'

// images

import Logo from '../../assets/img/header/ProkatAm Logo.png'
import Basket from '../../assets/img/basket.svg'

export default class Header extends React.Component{


    render(){
        return(
            <div className='header'>
                <div className='container160'>
                    <div className='header-wrapper'>
                        <div className='block'>
                            <NavLink to='/'>
                                <img src={Logo}></img>
                            </NavLink>
                            <p>(+374 99) 77 25 28</p>
                            <p>(+374 94) 77 25 28</p>    
                        </div>

                        <div className='block'>
                            <ul className='menu'>
                                <li>
                                    <NavLink to='/about'>Մեր մասին</NavLink>
                                </li>
                                <li><NavLink to='/'>Պայմաններ</NavLink></li>
                                <li><NavLink to='/'>Հետադարձ կապ</NavLink></li>
                                <li>
                                    <NavLink to='/basket'>
                                        <img src={Basket}></img>
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