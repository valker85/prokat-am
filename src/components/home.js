import React from 'react';


// Componets
import Header from './other-components/header'
import Footer from './other-components/footer'


// images
import Background from '../assets/img/home/illustrations.png'
import Search from '../assets/img/home/search.svg'
import { NavLink } from 'react-router-dom';


export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tab: 1

        }

        this.searchInput = React.createRef()
        
        this.tab = 1
    }

    inputFocus = () =>{
        this.searchInput.current.placeholder = 'ամենաշատը փնտրւմ են վրաններ, հեծանիվներ և համակարգիչներ'
    }

    tabFun = () =>{
        if(this.state.tab === 1){
            return(
                <div>
                    1
                </div>
            )
        } else if(this.state.tab === 2){
            return(
                <div>
                    2
                </div>
            )
        }
    }

    render(){
        return(
            <div className='home'>
                <Header/>
                <div className='section1'>
                    <div className='container160'>
                        <h1>Փնտրու՞մ եք վարձույթով տրվող ապրանքներ:<br/>Prokat.am-ը միշտ Ձեր կողքին է:</h1>
                        <div className='input'>
                            <img src={Search}/>
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
                        <div className='tabs'>
                            <h3 className='active' onClick={()=>{this.setState({tab:1})}}>Ապրանքներ</h3>
                            <h3 onClick={()=>{this.setState({tab:2})}}>Ծառայություններ</h3>
                        </div>
                        {this.tabFun()}
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}