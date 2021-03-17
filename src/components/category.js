import React from 'react';

// components
import Path from './other-components/path'

// images
import Search from '../assets/img/home/search.svg'
import { Link, NavLink, withRouter } from 'react-router-dom';

import Prod1 from '../assets/img/home/top-prods/prod1.png'
import Prod2 from '../assets/img/home/top-prods/prod2.png'
import Prod3 from '../assets/img/home/top-prods/prod3.png'
import Prod4 from '../assets/img/home/top-prods/prod4.png'
import Prod5 from '../assets/img/home/top-prods/prod5.png'

import Serv1 from '../assets/img/services/serv1.png'
import Serv2 from '../assets/img/services/serv2.png'
import Serv3 from '../assets/img/services/serv3.png'
import Serv4 from '../assets/img/services/serv4.png'
import Serv5 from '../assets/img/services/serv5.png'



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
                {
                    secName:'Goods',
                    url:'goods',
                    categories: [
                        {
                            name: 'Computer equipment', 
                            url: 'computer-equipment',
                            types: [
                                {typeName:'monitor1', url:'monitor1'},
                                {typeName:'monitor2', url:'monitor2'},
                                {typeName:'monitor3', url:'monitor3'},
                                {typeName:'monitor4', url:'monitor4'},
                                {typeName:'monitor5', url:'monitor5'}
                            ]
                        },
                        {
                            name: 'Everything for events', 
                            url: 'everything-for-events',
                            types: [
                                {typeName:'for events1', url:'for-events1'},
                                {typeName:'for events2', url:'for-events2'},
                                {typeName:'for events3', url:'for-events3'},
                                {typeName:'for events4', url:'for-events4'},
                                {typeName:'for events5', url:'for-events5'}
                            ]
                        },
                        {
                            name: 'Tableware', 
                            url: 'tableware',
                            types: [
                                {typeName:'tableware1', url:'tableware1'},
                                {typeName:'tableware2', url:'tableware2'},
                                {typeName:'tableware3', url:'tableware3'},
                                {typeName:'tableware4', url:'tableware4'},
                                {typeName:'tableware5', url:'tableware5'}
                            ]
                        },
                        {
                            name: 'Tools',
                            url: 'tools',
                            types: [
                                {typeName:'Tools1', url:'tools1'},
                                {typeName:'Tools2', url:'tools2'},
                                {typeName:'Tools3', url:'tools3'},
                                {typeName:'Tools4', url:'tools4'},
                                {typeName:'Tools5', url:'tools5'}
                            ]
                        },
                        {
                            name: 'Tourism', 
                            url: 'tourism',
                            types: [
                                {typeName:'Tourism1', url:'tourism1'},
                                {typeName:'Tourism2', url:'tourism2'},
                                {typeName:'Tourism3', url:'tourism3'},
                                {typeName:'Tourism4', url:'tourism4'},
                                {typeName:'Tourism5', url:'tourism5'}
                            ]
                        },
                        {
                            name: 'Clothing', 
                            url: 'clothing',
                            types: [
                                {typeName:'clothing1', url:'clothing1'},
                                {typeName:'clothing2', url:'clothing2'},
                                {typeName:'clothing3', url:'clothing3'},
                                {typeName:'clothing4', url:'clothing4'},
                                {typeName:'clothing5', url:'clothing5'}
                            ]
                        },
                        {
                            name: 'Means of communication', 
                            url: 'means-of-communication',
                            types: [
                                {typeName:'communication1', url:'communication1'},
                                {typeName:'communication2', url:'communication2'},
                                {typeName:'communication3', url:'communication3'},
                                {typeName:'communication4', url:'communication4'},
                                {typeName:'communication5', url:'communication5'}
                            ]
                        },
                        {
                            name: 'Fun', 
                            url: 'fun',
                            types: [
                                {typeName:'Fun1', url:'fun1'},
                                {typeName:'Fun2', url:'fun2'},
                                {typeName:'Fun3', url:'fun3'},
                                {typeName:'Fun4', url:'fun4'},
                                {typeName:'Fun5', url:'fun5'}
                            ]
                        },
                        {
                            name: 'Sound and light equipment', 
                            url: 'sound-and-light-equipment',
                            types: [
                                {typeName:'equipment1', url:'equipment1'},
                                {typeName:'equipment2', url:'equipment2'},
                                {typeName:'equipment3', url:'equipment3'},
                                {typeName:'equipment4', url:'equipment4'},
                                {typeName:'equipment5', url:'equipment5'}
                            ]
                        }
                    ]
                },
                {
                    secName:'Services',
                    url:'services',
                    categories: [
                        {
                            name: 'Events', 
                            url:'events'
                        },
                        {
                            name: 'Corporate events', 
                            url:'corporate-events'
                        },
                        {
                            name: 'Catering services', 
                            url:'сatering-services'
                        },
                        {
                            name: 'Childrens services', 
                            url:'сhildrens-services'
                        },
                        {
                            name: 'Service staff', 
                            url: 'service-staff'
                        },
                        {
                            name: 'Casting services', 
                            url:'casting-services'
                        },
                        {
                            name: 'Special effects',
                            url:'special-effects'
                        },
                        {
                            name: 'Cleaning services',
                            url:'cleaning-services'
                        }
                    ]
                }
            ],
            option_container_classes:['option-container'],
            option_container_classes_category:['option-container'],
            option_container_classes_type:['option-container'],
            actual_section: '',
            actual_category: '',
            actual_type: '',
            actual_pathname: this.props.location.pathname,
            history: this.props.match.params.url,
            position: 0,
            close_types: true
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
            this.setState({actual_category: actual})

        } else if(filter === 'types'){
            this.setState({actual_type: actual})
        }

    }

    componentDidMount(){
        let sections = this.state.sections
        let categories;
        let types;
        let pathname = this.state.actual_pathname


        // all paths without '/'
        let all_pats = pathname.split('/')
        all_pats.splice(0, 2)


        for (let i = 0; i < sections.length; i++) {
            if(sections[i].url === all_pats[0]){
                this.doActual('sections', i)
                categories = this.state.sections[i].categories
            }
        }

        if(all_pats.length >= 2){
            for (let i = 0; i < categories.length; i++) {
                if(categories[i].url === all_pats[1]){
                    this.doActual('categories', i)
                    types = categories[i].types
                }
            }
        }

        if(all_pats.length === 3){
            for (let i = 0; i < types.length; i++) {
                if(types[i].url === all_pats[2]){
                    this.doActual('types', i)
                }
            }
        }

        if(all_pats[0] === "services"){
            this.setState({
                close_types: true
            })
        } else{
            this.setState({
                close_types: false
            })
        }

        // Services prods
        if(all_pats[0] === "services"){
            let services = [
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv1, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Ծանր ծուխ',             info: ['СО2'],                  prise: 29000},
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv2, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Լուսային էֆֆեկտներ',    info: ['սարքավորումներ'],       prise: 29000},
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv3, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Ձայնային էֆֆեկտներ',    info: ['DJ'],                   prise: 29000},
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv4, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Կոնֆետտի (փայլաթուղթ)', info: ['թուղթ', 'ձև', 'գույն'], prise: 29000},
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv5, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Օճառե պղպջակներ',       info: ['շոու '],                prise: 29000}
            ]
            this.setState({
                prods: services
            })
        } else if(all_pats[0] === "goods"){
            let prods = [
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod4, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod5, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod1, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod3, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000}
            ]

            this.setState({
                prods: prods
            })
        }
        /////////////////
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

        /////////////////
        // Services prods
        if(url[1] === "services"){
            let services = [
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv1, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Ծանր ծուխ',             info: ['СО2'],                  prise: 29000},
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv2, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Լուսային էֆֆեկտներ',    info: ['սարքավորումներ'],       prise: 29000},
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv3, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Ձայնային էֆֆեկտներ',    info: ['DJ'],                   prise: 29000},
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv4, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Կոնֆետտի (փայլաթուղթ)', info: ['թուղթ', 'ձև', 'գույն'], prise: 29000},
                {this_is: 'service', serv_url: '/filter/services/special-effects/heavy-smoke', img: Serv5, type: 'special-effects', type_url: '/filter/services/special-effects', name: 'Օճառե պղպջակներ',       info: ['շոու '],                prise: 29000}
            ]
            this.setState({
                prods: services
            })
        } else if(url[1] === "goods"){
            let prods = [
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod1, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod3, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod4, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod5, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Պրոյեկտոր Benq',                 info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod1, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Սպիտակ ծածկ',                    info: ['3x3 մ', 'ջրակայուն', 'թեթև '],           prise: 24000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', type_url: '/filter/goods/everything-for-events', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'],                               prise: 3000},
                {this_is: 'product', prod_url: '/filter/goods/computer-equipment/monitor1/toshiba-Satellite-c50', img: Prod3, type: 'Տեխնիկա',                       type_url: '/filter/goods/computer-equipment',    name: 'Գրասենյակային աթոռ',             info: ['մետաղ', 'գործվածք', 'սև'],               prise: 1000}
            ]

            this.setState({
                prods: prods
            })
        }
        /////////////////

        this.setState({
            actual_pathname: newPr.location.pathname
        })
    }

    
    render(){

        return(
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
                                            this.state.sections[this.state.actual_section].categories.map((category, idx)=>{
                                                return(
                                                <div className='option' key={idx} onClick={this.acceptOption.bind(null, 'categories', idx, `/filter/${this.state.sections[this.state.actual_section].url}/${category.url}`)}>
                                                    <input type="radio" className='radio' id={`category${idx}`} name="categories"/>

                                                    <Link to={`/filter/${this.state.sections[this.state.actual_section].url}/${category.url}`} 
                                                        htmlFor={`category${idx}`} 
                                                        onClick={this.acceptOption.bind(null, 'categories', idx)}
                                                    >{category.name}</Link>

                                                </div>
                                                )
                                            })
                                            : <p>Choose your section</p>
                                        }
                                    </div>
                                    <div className='selected'>
                                    {
                                        this.state.actual_category !== '' ?
                                            this.state.sections[this.state.actual_section].categories[this.state.actual_category].name
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
                                            typeof(this.state.actual_category) == typeof(1) ?
                                            this.state.sections[this.state.actual_section].categories[this.state.actual_category].types.map((type, idx)=>{
                                                return(
                                                <div className='option' key={idx} onClick={this.acceptOption.bind(null, 'types', idx, `/filter/${this.state.sections[this.state.actual_section].url}/${this.state.sections[this.state.actual_section].categories[this.state.actual_category].url}/${type.url}`)}>
                                                    <input type="radio" className='radio' id={`type${idx}`} name="types"/>
                                                    <Link 
                                                        to={`/filter/${this.state.sections[this.state.actual_section].url}/${this.state.sections[this.state.actual_section].categories[this.state.actual_category].url}/${type.url}`} 
                                                        htmlFor={`type${idx}`} onClick={this.acceptOption.bind(null, 'types', idx)}
                                                    >
                                                        {type.typeName}
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
                                        ?   this.state.sections[this.state.actual_section].categories[this.state.actual_category].types[this.state.actual_type].typeName
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
                        <div className='prods'>
                            {
                                this.state.prods.map((card, idx)=>{
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
                                                {
                                                    card.this_is === "product" 
                                                    ?
                                                    <div className='prise-wrapper'>
                                                        <div className='prise'>{card.prise} <span>դր/օր</span></div>
                                                        <div className='rent'><NavLink to='/'>Վարձել</NavLink></div>
                                                    </div>
                                                    :
                                                    <div className='prise-wrapper'>
                                                        <div className='prise'><span>սկսած </span>{card.prise} <span>դր</span></div>
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
        )
    }
}

export default withRouter(Category)