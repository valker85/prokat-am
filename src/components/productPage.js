import React from 'react';

import Header from './other-components/header'
import Footer from './other-components/footer'
import Path from './other-components/path'


export default class ProductPage extends React.Component{
    constructor(props){
        super(props)


    }


    render(){
        return(
            <div className='concret-category'>
                <Header/>

                <div className='container160'>
                    <Path/>
                    <h1>Product Page</h1>
                </div>

                <Footer/>
            </div>
        )
    }
}