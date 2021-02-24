import React from 'react';
import InputFiles from 'react-input-files';

// Components
import Path from '../components/other-components/path'

// Products
import Products from './orderen_prods'


// Images
import Surface from '../assets/img/shopping-cart/surface.svg'
import Calendar from '../assets/img/shopping-cart/calendar.svg'




export default class ShoppingCart extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            img: {},
            bigFile: false,
            products:[],
            total_prise: '6 960'
        }

        this.file_input_p = React.createRef()

        this.myStorage = window.localStorage;

    }

    
    fileFun = (files) => {
        if(files[0] !== undefined){
            if(files[0].size >= 10000000){
                this.setState({
                    img: {},
                    bigFile: true
                })
            } else {
                this.setState({
                    img: files[0],
                    bigFile: false
                })
            }
        } else{
            this.setState({
                img: {},
                bigFile: false
            })
        }
    }

    componentDidMount(){
        let prods = JSON.parse(this.myStorage.getItem('products'))

        setTimeout(()=>{
            this.setState({
                products: prods
            })
        })
    }


    render(){
        return(
            <div className='shopping-cart'>
                <Path/>

                <div className='container160'>
                    <div className='section'>
                        <div className='block'>
                            <form>
                                <h1>Պատվերի ձևակերպում</h1>
                                <div className='inps'>
                                    <input placeholder='Անուն*' />
                                    <input placeholder='Email*' />
                                </div>

                                <div className='inps'>
                                    <input placeholder='Հեռախոս*' />
                                    <div className='input_div'>
                                        <input placeholder='Առաքման օր և ժամ' />
                                        <img src={Calendar} alt='calendar' />
                                    </div>
                                </div>
                                <input placeholder='Առաքման հասցե*' />

                                <label>
                                    <input type='checkbox' />
                                    Առաքում և սպասարկում (վճարովի ծառայություն)
                                </label>

                                <textarea placeholder='Այլ նշումներ'></textarea>

                                <InputFiles style={{display: 'block', outline: 'none'}} 
                                className='InputFiles' onChange={(files) => { this.fileFun(files) }}>
                                    <div className='id_card'>
                                        <div>
                                            <img src={Surface} alt='logo' />
                                            <p ref={this.file_input_p}>{
                                                this.state.img.name === undefined ? 
                                                'Կցել անձնագիրը կամ ID քարտը*' :
                                                this.state.img.name 
                                            }</p>
                                        </div>
                                        <div>
                                            <p>10 MB մաքս․</p>
                                        </div>
                                    </div>
                                </InputFiles>
                                {
                                    this.state.bigFile ? 
                                    <span className='big_file'>Մաքսիմալ չափը չպետք է գեչազանցի 10 MB</span> :
                                    null
                                }
                                <p className='info'>Հարգելի հաճախորդ, պատվերի նախնական գրանցումից հետո մեր օպերատորը կզանգահարի Ձեզ՝ պատվերի վերջնական հաստատման համար:</p>
                                <button className='submit' type='submit'>Պատվիրել</button>
                            </form>
                        </div>

                        <div className='block'>
                            <h1>Ձեր պատվերը</h1>

                            {
                                this.state.products.map((prod, idx)=>{
                                    return(
                                        <div key={idx} className='prod_card'>
                                            <div className='line'></div>
                                            <div className='content'>
                                                <div className='block'>
                                                    <div className='img_block'>
                                                        <img src={prod.img} alt='product img' />
                                                    </div>
                                                </div>
                                                <div className='block'>
                                                    <h1>{prod.name}</h1>
                                                    <p>{prod.to} - {prod.from}</p>
                                                    <div className='counter'>
                                                        <button>—</button>
                                                        <h2>{prod.count}</h2>
                                                        <button>+</button>
                                                    </div>
                                                </div>
                                                <div className='block'>
                                                    <h3 className='prise'>{prod.total_prise} <span>դր</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='line'></div>
                            
                            <div className='promo'>
                                <h4>Ստանալ զեչղ՝</h4>
                                <form>
                                    <input placeholder='Կտրոնի համարը'/>
                                    <button type='submit'>Հաստատել</button>
                                </form>
                            </div>

                            <div className='total_prise'>
                                <h2>Ընդամենը`</h2>

                                <h3>{this.state.total_prise} <span>դր</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



