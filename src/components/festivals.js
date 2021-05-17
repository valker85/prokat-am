import React from 'react';

// Components
import Path from '../components/other-components/path'
import Header from './other-components/header';


// Images
import Fest1 from '../assets/img/festivals/fest1.png'
import Fest2 from '../assets/img/festivals/fest2.png'
import Fest3 from '../assets/img/festivals/fest3.png'
import Fest4 from '../assets/img/festivals/fest4.png'
import Fest5 from '../assets/img/festivals/fest5.png'
import Fest6 from '../assets/img/festivals/fest6.png'
import axios from 'axios';


export default class Festival extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tab: 1,
            exhibition: [
                // {name: 'exhibition 1', img: Fest1, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'exhibition 2', img: Fest2, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'exhibition 3', img: Fest3, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'exhibition 4', img: Fest4, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'exhibition 5', img: Fest5, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'exhibition 6', img: Fest6, date: '17.07.2021', url: '/festivals/fest1'}
            ],
            festivals: [
                // {name: 'Խորովածի փառատոն', img: Fest1, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'Պիցցայի փառատոն', img: Fest2, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'Երշիկի փառատոն', img: Fest3, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'Բորշի փառատոն', img: Fest4, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'Փլավի փառատոն', img: Fest5, date: '17.07.2021', url: '/festivals/fest1'},
                // {name: 'Ռամենի փառատոն', img: Fest6, date: '17.07.2021', url: '/festivals/fest1'}
            ]
        }
    }
    

    tabFun = (num) =>{
        this.setState({
            tab: num
        })
    }

    gofest = (url) =>{
        this.props.history.push(`/am/festivals${url}`)
    }


    componentDidMount(){
        let config = {
            headers: {
                auth:{
                    username: 'prokat',
                    password: '9H8lFCGGAHksplo9h9kQ'
                }
            }
        }

        


        axios.post('https://prokat.weflex.am/api/festivals/type/festival', {  }, config.headers)
            .then((response) => {

                console.log('festival: ', response.data.data )
                this.setState({
                    festivals: response.data.data
                })
            })
            .catch(function (error) {
                console.log(error)
            })


        axios.post('https://prokat.weflex.am/api/festivals/type/exhibition', {  }, config.headers)
            .then((response) => {

                console.log('exhibition: ', response.data.data )
                this.setState({
                    exhibition: response.data.data
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    render(){
        return(
            <>
            <Header/>
            <div className='festivals'>
                <Path/>

                <div className='container160'>
                    <h1>Փառատոններ</h1>

                    <div className='btns'>
                        <button className={this.state.tab === 1 ? 'active':''} onClick={this.tabFun.bind(null, 1)}>Փառատոն</button>
                        <button className={this.state.tab === 2 ? 'active':''} onClick={this.tabFun.bind(null, 2)}>Ցուցահանդես</button>
                    </div>

                    {
                        this.state.tab === 1 ?
                        <div className='fest-wrap'>
                        {
                            this.state.festivals.map((fest, idx)=>{{
                                return(
                                    <div onClick={this.gofest.bind(null, fest.url)} className='fest' key={idx}>
                                        <img src={`https://prokat.weflex.am/public/uploads/festivals/${fest._id}/${fest.img}`} alt='fest'/>
                                        <div className='info'>
                                            <h4>{fest.title_am}</h4>
                                            <p>{ new Date(`${fest.date}`).toLocaleDateString() }</p>
                                        </div>
                                    </div>
                                )
                            }})
                        }
                        </div>:
                        <div className='fest-wrap'>
                        {
                            this.state.exhibition.map((ex, idx)=>{{
                                return(
                                    <div onClick={this.gofest.bind(null, ex.url)} className='fest' key={idx}>
                                        <img src={`https://prokat.weflex.am/public/uploads/festivals/${ex._id}/${ex.img}`} alt='fest'/>
                                        <div className='info'>
                                            <h4>{ex.title_am}</h4>
                                            <p>{ new Date(`${ex.date}`).toLocaleDateString() }</p>
                                        </div>
                                    </div>
                                )
                            }})
                        }
                        </div>
                    }
                </div>
            </div>
            </>
        )
    }
}