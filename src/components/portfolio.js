import React from 'react';

// Components
import Path from '../components/other-components/path'
import Header from './other-components/header';


// Images
import Post1 from '../assets/img/portfolio/post1.png'
import Post2 from '../assets/img/portfolio/post2.png'
import Post3 from '../assets/img/portfolio/post3.png'
import Post4 from '../assets/img/portfolio/post4.png'
import Post5 from '../assets/img/portfolio/post5.png'
import Post6 from '../assets/img/portfolio/post6.png'
import Post7 from '../assets/img/portfolio/post7.png'
import Post8 from '../assets/img/portfolio/post8.png'
import Post9 from '../assets/img/portfolio/post9.png'
import axios from 'axios';



export default class Portfolio extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            posts:[
                {img: Post1, url:'/harsanik', name: 'Վարդուշի հարսանիքը'},
                {img: Post2, url:'/harsanik', name: 'Ամեն ինչ միջոցառումների համար'},
                {img: Post3, url:'/harsanik', name: 'Սպասք'},
                {img: Post4, url:'/harsanik', name: 'Գործիքներ'},
                {img: Post5, url:'/harsanik', name: 'Տուրիզմ'},
                {img: Post6, url:'/harsanik', name: 'Հագուստ'},
                {img: Post7, url:'/harsanik', name: 'Կապի միջոցներ'},
                {img: Post8, url:'/harsanik', name: 'Ժամանց'},
                {img: Post9, url:'/harsanik', name: 'Ձայնային և լուսային տեխնիկա'},
            ]
        }
    

    }

    goToPost = (url) =>{
        this.props.history.push({pathname: `/am/portfolio/${url}`})
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

        axios.post('https://prokat.weflex.am/api/portfolio', {  }, config.headers)
            .then((response) => {

                console.log('Portfolio: ', response.data.data )
                this.setState({
                    posts: response.data.data
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
            <div className='portfolio'>
                <Path/>

                <div className='container160'>
                    <h1 className='sec-name'>Պորտֆոլիո</h1>
                    <div className='posts-wrapper'>
                    {
                        this.state.posts.map((post, idx)=>{
                            return(
                                <div onClick={this.goToPost.bind(null, post.url)} className='post' key={idx}>
                                    <img src={`https://prokat.weflex.am/public/uploads/portfolio/${post._id}/${post.img}`} alt='post' />
                                    <div>
                                        <h2>{post.title_am}</h2>                                
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            </>
        )
    }
}



