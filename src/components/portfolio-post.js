import React from 'react';
import { withRouter } from 'react-router-dom';

// Components
import Path from '../components/other-components/path'


// Images
import Img1 from '../assets/img/portfolio-post/img1.png'
import Img2 from '../assets/img/portfolio-post/img2.png'
import Img3 from '../assets/img/portfolio-post/img3.png'
import Img4 from '../assets/img/portfolio-post/img4.png'
import Img5 from '../assets/img/portfolio-post/img5.png'
import Img6 from '../assets/img/portfolio-post/img6.png'
import Img7 from '../assets/img/portfolio-post/img7.png'
import Img8 from '../assets/img/portfolio-post/img8.png'

let images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8]


class PortfolioPost extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data:{
                images:[],
                videos:[]
            },


        }
    }


    componentDidMount(){
        let data = this.state.data

        // let  this.props.match.params.post

        data.images = images

        this.setState({
            data: data
        })
    }


    render(){
        return(
            <div className='portfolio'>
                <Path/>

                <div className='container160'>
                    <h1>{}</h1>

                    <div className='content-wrapper'>
                    {
                        this.state.data.images.map((img, idx)=>{
                            return(
                                <div className='picture' key={idx}>
                                    <img src={img} alt='picture' />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PortfolioPost)