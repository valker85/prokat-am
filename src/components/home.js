import React from 'react';


// Componets
import Header from './other-components/header'
import Footer from './other-components/footer'


// images
import Search from '../assets/img/home/search.svg'
import { NavLink } from 'react-router-dom';


export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tab: 1

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
            tab:1
        })
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
                <Footer/>
            </div>
        )
    }
}