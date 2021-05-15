import React from 'react';
import axios from 'axios'

// components
import Path from './other-components/path'
import Header from './other-components/header';

// images
import Search from '../assets/img/home/search.svg'
import { Link, NavLink, withRouter } from 'react-router-dom';

import Prod1 from '../assets/img/home/top-prods/prod1.png'
import Prod2 from '../assets/img/home/top-prods/prod2.png'
import Prod3 from '../assets/img/home/top-prods/prod3.png'
// import Prod4 from '../assets/img/home/top-prods/prod4.png'
// import Prod5 from '../assets/img/home/top-prods/prod5.png'

// import Serv1 from '../assets/img/services/serv1.png'
// import Serv2 from '../assets/img/services/serv2.png'
// import Serv3 from '../assets/img/services/serv3.png'
// import Serv4 from '../assets/img/services/serv4.png'
// import Serv5 from '../assets/img/services/serv5.png'



class Category extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            prods:[],
            comparable_products:[
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
            ],
            sections:[
                { secName:'Products', url:'goods' },
                { secName:'Services', url:'services' },
            ],
            categories: [],
            types: [],
            option_container_classes:['option-container'],
            option_container_classes_category:['option-container'],
            option_container_classes_type:['option-container'],
            actual_section: '',
            actual_category: '',
            actual_type: '',
            actual_sec: '',
            actual_pathname: this.props.location.pathname,
            history: this.props.match.params.url,
            position: 0,
            close_types: true,
            loader: true,
            actual_cat_num: ''
        }


        
    }


    selectFun = (wichOne) =>{
        if(wichOne === 'sections'){
            let new_classes = this.state.option_container_classes

            if(new_classes.length !== 2){
                new_classes.push('active')
            } else{
                new_classes.pop()
            }

            this.setState({option_container_classes: new_classes})
        } else if(wichOne === 'categories'){
            let new_classes = this.state.option_container_classes_category

            if(new_classes.length !== 2){
                new_classes.push('active')
            } else{
                new_classes.pop()
            }

            this.setState({option_container_classes_category: new_classes})
        } else if(wichOne === 'types'){
            let new_classes = this.state.option_container_classes_type

            if(new_classes.length !== 2){
                new_classes.push('active')
            } else{
                new_classes.pop()
            }

            this.setState({option_container_classes_type: new_classes})
        }
    }

    acceptOption = (filter, actual, option = '', event) =>{

        let selected;
        let label;
        let text;

        if(event !== undefined){
            // Take selected
            event.target.className !== 'option' 
            ? selected = event.target.parentNode.parentNode.parentNode.lastChild 
            : selected = event.target.parentNode.parentNode.lastChild

            // Take label
            event.target.className !== 'option' 
            ? event.target.className === 'label' ? label = event.target : label = event.target.nextSibling
            : label = event.target.lastChild

            if(label != null){
                text = label.innerHTML  // Take text from label
            }
    
            if(text !== undefined){
                selected.innerHTML = text   // Change selected button on label text
            }
    
            if(event.target.className !== 'option'){
                this.selectFun(filter)
            }

            if(option.length !== 0){
                this.props.history.push(option)
            }
        }


        this.doActual(filter, actual)
    }

    doActual = (filter, actual) =>{
        //get actual
        if(filter === 'sections'){
            this.setState({actual_section: actual})

        } else if(filter === 'categories'){
            let actual_cat = this.state.categories[actual]
            this.setState( {
                actual_category: actual_cat,
                actual_cat_num: actual
            })
        } else if(filter === 'types'){
            this.setState({actual_type: actual})
        }
    }

    getServices = (actual_cat, top) => {
        let config = {
            headers: {
                auth:{
                    username: 'prokat',
                    password: '9H8lFCGGAHksplo9h9kQ'
                }
            }
        }

        let obj = {}

        if( actual_cat ){
            // obj.category = actual_cat._id
        }
        if( top ){
            obj.top = true
        }

        console.log(actual_cat)

        axios.post('https://prokat.weflex.am/api/services', obj, config.headers)
        .then( (response) => {

            console.log('Services', response.data.data )

            this.setState({
                loader: false,
                prods: response.data.data
            })
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    getProducts = (actual_cat, top) => {
        let config = {
            headers: {
                auth:{
                    username: 'prokat',
                    password: '9H8lFCGGAHksplo9h9kQ'
                }
            }
        }

        let obj = {}

        if( actual_cat ){
            obj.category = actual_cat._id
        }
        if( top ){
            obj.top = true
        }

        // console.log('Send object: ', obj)

        axios.post('https://prokat.weflex.am/api/products', obj, config.headers)
        .then( (response) => {

            // console.log( 'Get products: ', response.data.data )

            this.setState({
                loader: false,
                prods: response.data.data
            })
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    getCatTypes = (actual_cat, url) => {
        let config = {
            headers: {
                auth:{
                    username: 'prokat',
                    password: '9H8lFCGGAHksplo9h9kQ'
                }
            }
        }

        axios.post(`https://prokat.weflex.am/api/types/category/${actual_cat._id}`, { }, config.headers)
            .then( (response) => {

                console.log('Types: ', response.data.data)

                this.setState({
                    types: response.data.data
                }, () => {
                    for (let i = 0; i < this.state.types.length; i++) {
                        if(this.state.types[i].url === url){
                            this.doActual('types', i)
                        }
                    }
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }



    componentDidMount(){
        let sections = this.state.sections
        // let categories;
        // let types;
        let pathname = this.state.actual_pathname

        // all paths without '/'
        let all_pats = pathname.split('/')
        all_pats.splice(0, 2)

        if(all_pats[0] === "services"){
            this.setState({
                close_types: true
            })
        } else{
            this.setState({
                close_types: false
            })
        }

        this.setState({
            actual_sec: all_pats[0]
        })

        // Services prods
        if(all_pats[0] === "services"){
            let config = {
                headers: {
                    auth:{
                        username: 'prokat',
                        password: '9H8lFCGGAHksplo9h9kQ'
                    }
                }
            }

            axios.post('https://prokat.weflex.am/api/categories/section/services', { }, config.headers)
                .then( (response) => {

                    this.setState({
                        categories: response.data.data
                    }, ()=>{

                        for (let i = 0; i < this.state.categories.length; i++) {
                            if(this.state.categories[i].url === all_pats[1]){
                                this.doActual('categories', i)
                                this.getServices( this.state.categories[i], false )
                            }
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })

        } else if(all_pats[0] === "goods"){
            let config = {
                headers: {
                    auth:{
                        username: 'prokat',
                        password: '9H8lFCGGAHksplo9h9kQ'
                    }
                }
            }

            axios.post('https://prokat.weflex.am/api/categories/section/products', { }, config.headers)
                .then( (response) => {

                    this.setState({
                        categories: response.data.data
                    }, ()=>{

                        for (let i = 0; i < this.state.categories.length; i++) {
                            if(this.state.categories[i].url === all_pats[1]){
                                this.doActual('categories', i)
                                this.getProducts( this.state.categories[i], false )
                                this.getCatTypes( this.state.categories[i], all_pats[2] )
                            }
                        }

                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

        for (let i = 0; i < sections.length; i++) {
            if(sections[i].url === all_pats[0]){
                this.doActual('sections', i)
            }
        }

        if( all_pats.length === 1 && all_pats[0] === "services"){
            console.log( "Haven't category" )
            this.getServices( undefined, false )

        } else if (all_pats.length === 1 && all_pats[0] === "goods"){

            console.log( "Haven't category" )
            this.getProducts( undefined, false )
        }

    }



    componentWillReceiveProps(newPr){   // во время клика
        let url = newPr.location.pathname.split('/')
        url.splice(0, 1)

        if(url[1] === "services"){
            this.setState({
                close_types: true
            })
        } else{
            this.setState({
                close_types: false
            })
        }

        this.setState({
            actual_sec: url[1]
        })

        /////////////////
        // Products from server
        if(url[1] === "services"){
            let config = {
                headers: {
                    auth: {
                        username: 'prokat',
                        password: '9H8lFCGGAHksplo9h9kQ'
                    }
                }
            }
        
            axios.post('https://prokat.weflex.am/api/categories/section/services', { }, config.headers)
                .then( (response) => {
                    
                    
                    this.setState({
                        categories: response.data.data
                    }, ()=>{

                        for (let i = 0; i < this.state.categories.length; i++) {

                            if(this.state.categories[i].url === url[2]){
                                this.doActual('categories', i)
                                this.getServices( this.state.categories[i], false )
                            }
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })

        } else if(url[1] === "goods"){

            let config = {
                headers: {
                    auth: {
                        username: 'prokat',
                        password: '9H8lFCGGAHksplo9h9kQ'
                    }
                }
            }

            axios.post('https://prokat.weflex.am/api/categories/section/products', { }, config.headers)
                .then( (response) => {
                    
                    this.setState({
                        categories: response.data.data
                    }, ()=>{

                        for (let i = 0; i < this.state.categories.length; i++) {

                            if(this.state.categories[i].url === url[2]){
                                this.doActual('categories', i)
                                this.getProducts( this.state.categories[i], false )
                                this.getCatTypes( this.state.categories[i] )

                            }
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        /////////////////

        if( url.length === 2 && url[1] === "services"){
            this.getServices( undefined, false )

        } else if (url.length === 2 && url[1] === "goods"){

            this.getProducts( undefined, false )
        }

        this.setState({
            actual_pathname: newPr.location.pathname
        })
    }

    

    render(){

        return(
            <>
            <Header/>
            <div className='category'>
                <Path/>

                <div className='section1'>
                    <div className='container160'>
                        <div className='input'>
                            <img src={Search} alt='search'/>
                            <input ref={this.searchInput} name='category'/>
                            <button>Որոնել</button>
                        </div>

                        <button className='mob'>Որոնել</button>
                    </div>
                </div>

                <div className='filter'>
                    <div className='container160'>
                        <h1>Ֆիլտր</h1>

                        <div className='filter-wrapper'>
                            <div className='input'>
                                <p>Բաժին</p>

                                <div className='select-box' onClick={this.selectFun.bind(null, 'sections')}>
                                    <div className={this.state.option_container_classes.join(' ')}>
                                        {
                                            this.state.sections.map((section, idx)=>{
                                                return(
                                                <div className='option' key={idx} onClick={this.acceptOption.bind(null, 'sections', idx, `/filter/${section.url}`)}>
                                                    <input type="radio" className='radio' id={`section${idx}`} name="sections"/>
                                                    <Link to={`/filter/${section.url}`}
                                                        htmlFor={`section${idx}`}
                                                        onClick={this.acceptOption.bind(null, 'sections', idx)}
                                                    >{section.secName}
                                                    </Link>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='selected'>
                                    {
                                        this.state.actual_section !== '' ?
                                            this.state.sections[this.state.actual_section].secName
                                        :   'Select type'
                                    }
                                    </div>
                                </div>
                            </div>

                            <div className='input'>
                                <p>Կատեգորիա</p>

                                <div className='select-box' onClick={this.selectFun.bind(null, 'categories')}>
                                    <div className={this.state.option_container_classes_category.join(' ')}>
                                        {
                                            typeof(this.state.actual_section) == typeof(1) ?
                                            this.state.categories.map((category, idx)=>{
                                                return(
                                                <div className='option' key={idx} onClick={this.acceptOption.bind(null, 'categories', idx, `/filter/${this.state.sections[this.state.actual_section].url}/${category.url}`)}>
                                                    <input type="radio" className='radio' id={`category${idx}`} name="categories"/>

                                                    <Link to={`/filter/${this.state.sections[this.state.actual_section].url}/${category.url}`} 
                                                        htmlFor={`category${idx}`} 
                                                        onClick={this.acceptOption.bind(null, 'categories', idx)}
                                                    >{category.title_en}</Link>

                                                </div>
                                                )
                                            })
                                            : <p>Choose your section</p>
                                        }
                                    </div>
                                    <div className='selected'>
                                    {
                                        this.state.actual_category !== '' ?
                                        this.state.actual_category.title_en
                                        :   'Select category'
                                    }
                                    </div>
                                </div>
                            </div>

                            {
                            this.state.close_types === true ? null :
                            <div className='input'>
                                <p>Տեսակ</p>
                                <div className='select-box' onClick={this.selectFun.bind(null, 'types')}>
                                    <div className={this.state.option_container_classes_type.join(' ')}>
                                        {  
                                            typeof(this.state.actual_cat_num) === typeof(1) ?
                                            this.state.types.map((type, idx)=>{
                                                return(
                                                <div className='option' key={idx} onClick={this.acceptOption.bind(null, 'types', idx, `/filter/${this.state.sections[this.state.actual_section].url}/${this.state.categories[this.state.actual_cat_num].url}/${type.url}`)}>
                                                    <input type="radio" className='radio' id={`type${idx}`} name="types"/>
                                                    <Link 
                                                        to={`/filter/${this.state.sections[this.state.actual_section].url}/${this.state.categories[this.state.actual_cat_num].url}/${type.url}`} 
                                                        htmlFor={`type${idx}`} onClick={this.acceptOption.bind(null, 'types', idx)}
                                                    >
                                                        {type.title_en}
                                                    </Link>
                                                </div>
                                                )
                                            }) 
                                            : <p>Choose your category</p>
                                        }
                                    </div>
                                    <div className='selected'>
                                    {
                                        typeof(this.state.actual_type) === typeof(1) 
                                        ?   this.state.types[this.state.actual_type].title_en
                                        :   'Select type'
                                    }
                                    </div>
                                </div>
                            </div>
                            }
                            
                            <div className='clear_div'>
                                <NavLink to={
                                    this.state.history === undefined ?
                                    `/filter/goods` :
                                    `/filter/${this.state.history}`
                                }>Մաքրել ֆիլտրը</NavLink>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='section3'>
                    <div className='container160'>
                        {
                            this.state.loader ? <div className='load-wrapper'><div className="lds-dual-ring"></div></div> : null
                        }
                        <div className='prods'>
                            {
                                this.state.prods.map((card, idx)=>{
                                    return(
                                        <div className='card' key={idx}>
                                            <div className='img-wrapper'>
                                                {
                                                    this.state.actual_sec === 'goods' ?
                                                    <img src={`https://prokat.weflex.am/public/uploads/products/${card._id}/${card.img}`} alt='img'/> :
                                                    <img src={`https://prokat.weflex.am/public/uploads/services/${card._id}/${card.img}`} alt='img'/> 
                                                }
                                            </div>
                                            <div className='content'>
                                                <NavLink to='/' className='type'>{card.type}</NavLink>
                                                <h1 className={card.title_en.length > 21 ? 'name long' : 'name'}>{card.title_en}</h1>

                                                <ul className={card.title_en.length > 21 ? 'info long' : 'info'}>
                                                {
                                                    card.features.map((param, idx)=>{
                                                        return(
                                                            <li key={idx}>{param}</li>
                                                        )
                                                    }) 
                                                }
                                                </ul>
                                                <div className='line'></div>
                                                {
                                                    this.state.actual_sec === "product" 
                                                    ?
                                                    <div className='prise-wrapper'>
                                                        <div className='prise'>{card.price} <span>դր/օր</span></div>
                                                        <div className='rent'><NavLink to='/'>Վարձել</NavLink></div>
                                                    </div>
                                                    :
                                                    <div className='prise-wrapper'>
                                                        <div className='prise'><span>սկսած </span>{card.price} <span>դր</span></div>
                                                        <div className='rent'><NavLink to='/'>Վարձել</NavLink></div>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='section4'>
                    <div className='container160'>
                        <h1>Համադրվող ապրանքներ</h1>
                        <div className='prods'>
                        {
                            this.state.comparable_products.map((card, idx)=>{
                                return(
                                    <div className='card' key={idx}>
                                        <div className='img-wrapper'>
                                            <img src={card.img} alt='img'/>
                                        </div>
                                        <div className='content'>
                                            <NavLink to='/' className='type'>{card.type}</NavLink>
                                            <h1 className={card.name.length > 21 ? 'name long' : 'name'}>{card.name}</h1>

                                            <ul className={card.name.length > 21 ? 'info long' : 'info'}>
                                            {
                                                card.info.map((param, idx)=>{
                                                    return(
                                                        <li key={idx}>{param}</li>
                                                    )
                                                }) 
                                            }
                                            </ul>
                                            <div className='line'></div>
                                            <div className='prise-wrapper'>
                                                <div className='prise'>{card.prise} <span>դր/օր</span></div>
                                                <div className='rent'><NavLink to='/'>Վարձել</NavLink></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(Category)