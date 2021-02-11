import React from 'react';


// components
import Header from './other-components/header'
import Footer from './other-components/footer'
import Path from './other-components/path'

// images
import Search from '../assets/img/home/search.svg'
import { NavLink, withRouter } from 'react-router-dom';

import Prod1 from '../assets/img/home/top-prods/prod1.png'
import Prod2 from '../assets/img/home/top-prods/prod2.png'
import Prod3 from '../assets/img/home/top-prods/prod3.png'
import Prod4 from '../assets/img/home/top-prods/prod4.png'
import Prod5 from '../assets/img/home/top-prods/prod5.png'


class Category extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            prods:[
                {img: Prod1, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: Prod3, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000},
                {img: Prod4, type: 'Տեխնիկա', name: 'Գրասենյակային աթոռ', info: ['մետաղ', 'գործվածք', 'սև'], prise: 1000},
                {img: Prod5, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: Prod1, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000},
                {img: Prod3, type: 'Տեխնիկա', name: 'Գրասենյակային աթոռ', info: ['մետաղ', 'գործվածք', 'սև'], prise: 1000}
            ],
            comparable_products:[
                {img: Prod1, type: 'Տեխնիկա', name: 'Պրոյեկտոր Benq', info: ['2700 Lumens', 'SVGA resolution', 'USB'], prise: 10000},
                {img: Prod2, type: 'Ամեն ինչ միջոցառումների համար', name: 'Սպիտակ ծածկ', info: ['3x3 մ', 'ջրակայուն', 'թեթև '], prise: 24000},
                {img: Prod3, type: 'Ամեն ինչ միջոցառումների համար', name: 'Ջուր եռացնելու էլեկտրական սարք', info: ['15 լիտր'], prise: 3000}
            ],
            sections:[
                {
                    secName:'Goods',
                    categories: [
                        {
                            name: 'Computer equipment', 
                            types: [
                                {typeName:'monitor1'},
                                {typeName:'monitor2'},
                                {typeName:'monitor3'},
                                {typeName:'monitor4'},
                                {typeName:'monitor5'}
                            ]
                        },
                        {
                            name: 'Everything for events', 
                            types: [
                                {typeName:'for events1'},
                                {typeName:'for events2'},
                                {typeName:'for events3'},
                                {typeName:'for events4'},
                                {typeName:'for events5'}
                            ]
                        },
                        {
                            name: 'Tableware', 
                            types: [
                                {typeName:'tableware1'},
                                {typeName:'tableware2'},
                                {typeName:'tableware3'},
                                {typeName:'tableware4'},
                                {typeName:'tableware5'}
                            ]
                        },
                        {
                            name: 'Tools', 
                            types: [
                                {typeName:'Tools1'},
                                {typeName:'Tools2'},
                                {typeName:'Tools3'},
                                {typeName:'Tools4'},
                                {typeName:'Tools5'}
                            ]
                        },
                        {
                            name: 'Tourism', 
                            types: [
                                {typeName:'Tourism1'},
                                {typeName:'Tourism2'},
                                {typeName:'Tourism3'},
                                {typeName:'Tourism4'},
                                {typeName:'Tourism5'}
                            ]
                        },
                        {
                            name: 'Clothing', 
                            types: [
                                {typeName:'clothing1'},
                                {typeName:'clothing2'},
                                {typeName:'clothing3'},
                                {typeName:'clothing4'},
                                {typeName:'clothing5'}
                            ]
                        },
                        {
                            name: 'Means of communication', 
                            types: [
                                {typeName:'communication1'},
                                {typeName:'communication2'},
                                {typeName:'communication3'},
                                {typeName:'communication4'},
                                {typeName:'communication5'}
                            ]
                        },
                        {
                            name: 'Fun', 
                            types: [
                                {typeName:'Fun1'},
                                {typeName:'Fun2'},
                                {typeName:'Fun3'},
                                {typeName:'Fun4'},
                                {typeName:'Fun5'}
                            ]
                        },
                        {
                            name: 'Sound and light equipment', 
                            types: [
                                {typeName:'equipment1'},
                                {typeName:'equipment2'},
                                {typeName:'equipment3'},
                                {typeName:'equipment4'},
                                {typeName:'equipment5'}
                            ]
                        }
                    ]
                },
                {
                    secName:'Services',
                    categories: [
                        {
                            name: 'Service1', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        },
                        {
                            name: 'Service2', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        },
                        {
                            name: 'Service3', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        },
                        {
                            name: 'Service4', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        },
                        {
                            name: 'Service5', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        },
                        {
                            name: 'Service6', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        },
                        {
                            name: 'Service7', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        },
                        {
                            name: 'Service8', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        },
                        {
                            name: 'Service9', 
                            types: [
                                {typeName:'type1'},
                                {typeName:'type2'},
                                {typeName:'type3'},
                                {typeName:'type4'},
                                {typeName:'type5'}
                            ]
                        }
                    ]
                }
            ],
            option_container_classes:['option-container'],
            option_container_classes_category:['option-container'],
            option_container_classes_type:['option-container'],
            actual_section: '',
            actual_category: '',
            actual_type: ''

        }

        this.option_container = React.createRef();

            
    }


    componentWillReceiveProps(newPr){   // во время клика
        // let path = this.props.locations.pathname
        console.log(newPr.location.pathname);
    
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


    acceptOption = (filter, actual, event) =>{
        let selected;
        let label;
        let text;

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
        selected.innerHTML = text   // Change selected button on label text

        if(event.target.className !== 'option'){
            this.selectFun(filter)
        }

        //get actual
        if(filter === 'sections'){
            this.setState({actual_section: actual})
            console.log(this.state.actual_section);



        } else if(filter === 'categories'){
            this.setState({actual_category: actual})
            console.log(this.state.actual_category);



        } else if(filter === 'types'){
            this.setState({actual_type: actual})
            console.log(this.state.actual_type);
        }

    }


    render(){
        return(
            <div className='category'>
                <Header/>
                <Path/>

                <div className='section1'>
                    <div className='container160'>
                        <div className='input'>
                            <img src={Search} alt='search'/>
                            <input ref={this.searchInput} name='category'/>
                            <button>Որոնել</button>
                        </div>
                    </div>
                </div>

                <div className='filter'>
                    <div className='container160'>
                        <h1>Ֆիլտր</h1>

                        <div className='filter-wrapper'>
                            <div className='input'>
                                <p>Բաժին</p>

                                <div className='select-box' onClick={this.selectFun.bind(null, 'sections')}>
                                    <div ref={this.option_container} className={this.state.option_container_classes.join(' ')}>
                                        {
                                            this.state.sections.map((section, idx)=>{
                                                return(
                                                <div className='option' key={idx} onClick={this.acceptOption.bind(null, 'sections', idx)}>
                                                    <input type="radio" className='radio' id={`section${idx}`} name="sections"/>
                                                    <label htmlFor={`section${idx}`} onClick={this.acceptOption.bind(null, 'sections', idx)}>{section.secName}</label>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='selected'>Select type</div>
                                </div>
                            </div> 


                            <div className='input'>
                                <p>Կատեգորիա</p>

                                <div className='select-box' onClick={this.selectFun.bind(null, 'categories')}>
                                    <div ref={this.option_container} className={this.state.option_container_classes_category.join(' ')}>
                                        {
                                            typeof(this.state.actual_section) == typeof(1) ?
                                            this.state.sections[this.state.actual_section].categories.map((category, idx)=>{
                                                return(
                                                <div className='option' key={idx} onClick={this.acceptOption.bind(null, 'categories', idx)}>
                                                    <input type="radio" className='radio' id={`category${idx}`} name="categories"/>
                                                    <NavLink to='/goods/tools' htmlFor={`category${idx}`} onClick={this.acceptOption.bind(null, 'categories', idx)}>{category.name}</NavLink>
                                                </div>
                                                )
                                            })
                                            : <p>Choose your section</p>
                                        }
                                    </div>
                                    <div className='selected'>Select type</div>
                                </div>
                            </div>


                            <div className='input'>
                                <p>Տեսակ</p>

                                <div className='select-box' onClick={this.selectFun.bind(null, 'types')}>
                                    <div ref={this.option_container} className={this.state.option_container_classes_type.join(' ')}>
                                        {
                                            typeof(this.state.actual_category) == typeof(1) ?
                                            this.state.sections[this.state.actual_section].categories[this.state.actual_category].types.map((type, idx)=>{
                                                return(
                                                <div className='option' key={idx} onClick={this.acceptOption.bind(null, 'types', idx)}>
                                                    <input type="radio" className='radio' id={`type${idx}`} name="types"/>
                                                    <label htmlFor={`type${idx}`} onClick={this.acceptOption.bind(null, 'types', idx)}>{type.typeName}</label>
                                                </div>
                                                )
                                            }) : <p>Choose your category</p>
                                        }
                                    </div>
                                    <div className='selected'>Select type</div>
                                </div>
                            </div>

                            <NavLink to='/category'>Մաքրել ֆիլտրը</NavLink>
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
                                                <h1 className={card.name.length > 20 ? 'name long' : 'name'}>{card.name}</h1>

                                                <ul className={card.name.length > 20 ? 'info long' : 'info'}>
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
                                            <h1 className={card.name.length > 20 ? 'name long' : 'name'}>{card.name}</h1>

                                            <ul className={card.name.length > 20 ? 'info long' : 'info'}>
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

                <Footer/>
            </div>
        )
    }
}

export default withRouter(Category)