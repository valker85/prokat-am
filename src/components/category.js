import React from 'react';


// components
import Header from './other-components/header'
import Footer from './other-components/footer'


// images



export default class Home extends React.Component{
    constructor(props){
        super(props)


    }


    render(){
        return(
            <div className='category'>
                <Header/>
                
                <Footer/>
            </div>
        )
    }
}