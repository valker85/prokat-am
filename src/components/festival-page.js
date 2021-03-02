import React from 'react';

// Components
import Path from '../components/other-components/path'


export default class FestivalPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className='festivals'>
                <Path/>

                <div className='container160'>
                    <h1>FestivalPage</h1>

                </div>
            </div>
        )
    }
}