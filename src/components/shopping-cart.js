import React from 'react';
import InputFiles from 'react-input-files';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// Components
import Path from '../components/other-components/path'
import ShoppingCartProducts from './other-components/shopping-cart-products'


// Images
import Surface from '../assets/img/shopping-cart/surface.svg'
import Calendar from '../assets/img/shopping-cart/calendar.svg'
import { withRouter } from 'react-router';


class ShoppingCart extends React.Component{
    constructor(props){
        super(props)

        this.handleDayClick = this.handleDayClick.bind(this);

        this.state = {
            img: {},
            bigFile: false,
            products:[],
            total_prise: 0,
            here: this,
            festHaveProd: false,
            fromFest: false,
            selectedDay: undefined
        }

        this.file_input_p = React.createRef()
        this.dayPicker = React.createRef()
        this.form = React.createRef()

        this.picker_open = false

        this.myStorage = window.localStorage
    }

    orderFunction = () =>{
        let obj = {}
        obj.name = this.form.current[0].value
        obj.email = this.form.current[1].value
        obj.phone = this.form.current[2].value
        obj.orderDay = new Date()
        obj.adress = this.form.current[4].value
        obj.delivery = this.form.current[5].checked
        obj.comments = this.form.current[6].value
        obj.img = this.state.img
        obj.ordered_products = this.state.products




        console.log(obj)
    }

    // Day Picker ===================
    handleDayClick(day) {
        this.setState({ selectedDay: day });
    }

    handleResetClick() {

    }
    // ==============================
    apply_btn = (close) =>{
        // if(close === true){
        //     this.picker_open = false
        //     this.dayPicker.current.style.display = 'none'
        // }
    }

    open_calendar = () =>{
        this.picker_open = !this.picker_open



        // console.log(this.dayPicker.current);
        // if(this.picker_open === true){
        //     this.dayPicker.current.style.display = 'block'
        // } else{
        //     this.dayPicker.current.style.display = 'none'
        //     // this.apply_btn(true)
        // }
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

    deleteProduct = (product) =>{
        let all_products = JSON.parse(window.localStorage.getItem('products'))
        let here = this

        for (let i = 0; i < all_products.length; i++) {
            if(all_products[i].id === product.id){
                all_products.splice(i, 1)
            }
        }

        async function name() {
            if(all_products.length === 0){
                here.setState({
                    products: null
                })
                window.localStorage.removeItem('products')

            } else {

                here.setState({
                    products: all_products
                })
                window.localStorage.setItem('products', JSON.stringify(all_products))
            }
        }
        name()
    }

    updateStorage(product) {
        // console.log(product.total_prise)

        let all_products = JSON.parse(window.localStorage.getItem('products'))
        let total_prise = 0

        for (let i = 0; i < all_products.length; i++) {
            if(all_products[i].id === product.id){
                all_products[i] = product
            }

            total_prise += all_products[i].total_prise
        }

        this.setState({
            total_prise: total_prise
        })


        window.localStorage.setItem('products', JSON.stringify(all_products))
    }

    viewProds = () =>{
        // this.myStorage.removeItem('products')

        console.log(this.state.products)
    }

    componentDidMount(){
        let prods = JSON.parse(this.myStorage.getItem('products'))
        let total_prise = 0

        if(prods !== null){
            for (let i = 0; i < prods.length; i++) {
                total_prise += prods[i].total_prise
            }
        }


        // ///////////////////  FESTIVALS  ///////////////////

        // if(this.props.location.state){
        //     if(Boolean(this.props.location.state.have) === true && this.props.location.state.have === false){
        //         setTimeout(()=>{
        //             this.setState({
        //                 festHaveProd: true
        //             })
        //         })
                
        //     }
        // } else{
        //     setTimeout(()=>{
        //         this.setState({
        //             festHaveProd: false
        //         })
        //     })
        // }

        // setTimeout(()=>{
        //     if(Boolean(this.props.location.state) === true && this.props.location.state.from === 'fest-page'){
        //         this.setState({
        //             fromFest: true
        //         })
                
        //     } else{

        //         this.setState({
        //             fromFest: false
        //         })
        //     }
        // })

        // ///////////////////////////////////////////////////

        setTimeout(()=>{
            this.setState({
                products: prods,
                total_prise: total_prise
            })
        })

        console.log(this.props)
    }


    render(){
        return(
            <div className='shopping-cart'>
                <Path/>
                {
                    this.state.festHaveProd === true 
                    ? 
                    <div className='container160'>
                        <p className='from-fest-info'>Հարգելի հաճախորդ, մեր օպերատորը կզանգահարի Ձեզ:</p>
                    </div>
                    :     
                    <div className='container160'>
                        <div className='section'>
                            <div className='block'>
                                <form ref={this.form}>
                                    <h1 onClick={()=>{}}>Պատվերի ձևակերպում</h1>
                                    <div className='inps'>
                                        <input placeholder='Անուն*' name='name' />
                                        <input placeholder='Email*' name='email' />
                                    </div>

                                    <div className='inps'>
                                        <input placeholder='Հեռախոս*' name='phone' />

                                        <div className='input_div'>
                                            
                                            <input placeholder='Առաքման օր և ժամ' />

                                            {/* 
                                            <div className='RangeExample'>
                                                <DayPicker
                                                    ref={this.dayPicker}
                                                    onDayClick={this.handleDayClick}
                                                    selectedDays={this.state.selectedDay}
                                                />
                                                {this.state.selectedDay ? (
                                                <p onClick={this.open_calendar}>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
                                                ) : (
                                                <p onClick={this.open_calendar}>Առաքման օր և ժամ</p>
                                                )}
                                            </div>
                                             */}

                                            <img src={Calendar} alt='calendar' />
                                        </div>
                                    </div>
                                    <input placeholder='Առաքման հասցե*' />

                                    <label>
                                        <input type='checkbox' />
                                        Առաքում և սպասարկում (վճարովի ծառայություն)
                                    </label>

                                    <textarea placeholder='Այլ նշումներ'></textarea>

                                    <InputFiles accept=".png .pdf .jpeg .jpg" style={{display: 'block', outline: 'none'}} 
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
                                    <button onClick={this.orderFunction} className='submit' type='button'>Պատվիրել</button>



                                </form>
                            </div>

                            <div className='block'>
                                <h1>Ձեր պատվերը</h1>

                                {
                                    this.state.products === null ? 
                                    <h1 className='havent_prods'>Ձեր զամբյուղում ոչ մի ապրանք չկա:</h1> :
                                    this.state.products.map((prod, idx)=>{
                                        return(
                                            <ShoppingCartProducts 
                                                deleteProduct={this.deleteProduct}
                                                update={this} 
                                                prod={prod} 
                                                key={idx} 
                                            />
                                        )
                                    })
                                }
                                <div className='line'></div>
                                
                                <div className='promo'>
                                    <h4>Ստանալ զեչղ՝</h4>
                                    <form>
                                        <input placeholder='Կտրոնի համարը'/>
                                        <button onClick={this.viewProds} type='button'>Հաստատել</button>
                                    </form>
                                </div>

                                <div className='total_prise'>
                                    <h2>Ընդամենը`</h2>

                                    <h3>{this.state.total_prise} <span>դր</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(ShoppingCart)