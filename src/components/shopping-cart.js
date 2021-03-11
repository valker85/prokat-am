import React from 'react';
import InputFiles from 'react-input-files';

// Components
import Path from '../components/other-components/path'
import ShoppingCartProducts from './other-components/shopping-cart-products'


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
            total_prise: 0,
            here: this,
            festHaveProd: false,
            fromFest: false
        }

        this.file_input_p = React.createRef()
        this.dayPicker = React.createRef()

        this.myStorage = window.localStorage

    }

    open_calendar = () =>{
        this.picker_open = !this.picker_open

        if(this.picker_open === true){
            this.dayPicker.current.style.display = 'block'
        } else{
            this.dayPicker.current.style.display = 'none'
            this.apply_btn(true)
        }
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


        if(this.props.location.state){
            if(this.props.location.state.have === false){
                setTimeout(()=>{
                    this.setState({
                        festHaveProd: true
                    })
                })
                
            }
        } else{
            setTimeout(()=>{
                this.setState({
                    festHaveProd: false
                })
            })
        }


        if(this.props.location.state.from === 'fest-page'){
            setTimeout(()=>{
                this.setState({
                    fromFest: true
                })
            })
            
        } else{
            setTimeout(()=>{
                this.setState({
                    fromFest: false
                })
            })
        }

        setTimeout(()=>{
            this.setState({
                products: prods,
                total_prise: total_prise
            })
        })
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
                        {/* <h3 className='go-to-shopping-cart'>Go to shopping cart in {this.state.secForRedirect} seconds...</h3> */}
                    </div>
                    :     
                    <div className='container160'>
                        <div className='section'>
                            <div className='block'>
                                <form>
                                    <h1>Պատվերի ձևակերպում</h1>
                                    <div className='inps'>
                                        <input placeholder='Անուն*' name='name' />
                                        <input placeholder='Email*' name='email' />
                                    </div>

                                    <div className='inps'>
                                        <input placeholder='Հեռախոս*' name='phone' />
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
                                    <button className='submit' type='submit'>Պատվիրել</button>
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



