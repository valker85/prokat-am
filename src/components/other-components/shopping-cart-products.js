import React from 'react';

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import Calendar from '../../assets/img/product-page/calendar.svg'


export default class Terms extends React.Component{
    constructor(props){
        super(props)

        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);

        this.state = {
            product:{},
            delete_btn: false,
            start_from: null,
            start_to: null
        }

        this.delete_btn = React.createRef()
        this.dayPicker = React.createRef()

        this.picker_open = false
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

    apply_btn = (close) =>{
        if(close === true){
            this.picker_open = false
            this.dayPicker.current.style.display = 'none'
        }

        let prod = this.state.product
        // Устанавливается цена в зависимости от кол-ва продуктов.
        let count = this.state.product.count
        let prod_prise = this.state.product.prod_prise
        let new_prise = prod_prise

        let here = this


        new_prise = prod_prise*count

        prod.total_prise = new_prise
        // Функция money_counter срабатывает быстрее, чем обновляется state
        async function name() {
            await here.setState({
                product: prod
            })

            here.money_counter()
        }

        name()

        console.log(prod.total_prise);
        this.props.update.updateStorage(prod)
    }

    money_counter = () =>{
        let prod = this.state.product
        // Подсчет выбранных дней и получение общей суммы. 
        let from = this.state.product.from
        let to = this.state.product.to
        let days

        if(to === undefined || to === null){
            to = from
            prod.to = to
            this.setState({
                product: prod
            })
        }

        if(from !== null && to !== null && from !== undefined && to !== undefined){
            days = Math.floor((to.getTime() - from.getTime())/(1000*60*60*24))+1
        
            let total_prise = this.state.product.total_prise
            let new_total_prise = total_prise
    
            new_total_prise *= days
    
            prod.total_prise = new_total_prise
            prod.days = days

            this.setState({
                product: prod
            })
        }
    }


    // Day Picker ===================
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)

        let product = this.state.product

        if(range.from !== undefined && range.to !== undefined){
            product.from = range.from
            product.to = range.to

            this.setState({
                product: product,
            })

            this.apply_btn(false)
        }
        if(range.from === undefined && range.to === undefined){
            product.from = this.state.start_from
            product.to = this.state.start_to

            this.setState({
                product: product,
            })
        }      
    }

    handleResetClick() {
        // let product = this.state.product
        // product.from = undefined
        // product.to = undefined
        // product.total_prise = product.prise

        // this.setState({
        //     product: product
        // });
    }
    // ==============================


    counter = (sign) =>{
        let product = this.state.product

        // let count = products[idx].count
        let prise = product.prod_prise
        let new_total_prise = product.total_prise
        let days = product.days
        let new_prise = 0 

        if(sign === '+'){
            if(this.state.product.count >= 1){
                new_prise = prise*days
                new_total_prise += new_prise
                product.total_prise = new_total_prise
                ++product.count

            } 
        } else if(this.state.product.count > 1){
                new_prise = prise*days
                new_total_prise -= new_prise
                product.total_prise = new_total_prise
                --product.count
        }

        if(this.state.product.count === 1){
            this.setState({
                delete_btn: true
            })

        } else{

            this.setState({
                delete_btn: false
            })
        }
        
        this.setState({
            product: product
        })

        this.props.update.updateStorage(product)
    }

    delete = () => {
        this.props.deleteProduct(this.state.product)
    }

    componentDidMount(){
        let dlt = this.props.prod.count === 1 ? true : false
        let product = this.props.prod
        // let from = this.props.prod.from.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')
        // let to = this.props.prod.to.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')

        let from = new Date(this.props.prod.from)
        let to = new Date(this.props.prod.to)

        setTimeout(() => {
            product.from = new Date(this.props.prod.from)
            product.to = new Date(this.props.prod.to)

            this.setState({
                product: product,
                delete_btn: dlt,
                start_from: from,
                start_to: to
            })

        })
    }


    render(){
        const { from, to } = this.state.product
        const modifiers = { start: from, end: to }

        return(
            <div className='prod_card'>
                <div className='line'></div>
                <div className='content'>
                    <div className='block'>
                        <div className='img_block'>
                            <img src={this.state.product.img} alt='product img' />
                        </div>
                    </div>
                    <div className='block'>
                        <h1>{this.state.product.name}</h1>


                        <div className="RangeExample">
                            <p className={this.state.redirect ? 'redirect':'error_date'} 
                                onClick={this.open_calendar}>
                                {   
                                    !from && 
                                    !to && 
                                    this.state.start_from !== null && 
                                    this.state.start_to !== null &&
                                    `${this.state.start_from.toLocaleDateString()} - 
                                    ${this.state.start_to.toLocaleDateString()}`
                                }

                                {from && !to && 'Ընտրեք մինչև որ օր*.'}
                                {from && to && `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`}{' '}

                                <img src={Calendar} alt='Calendar'/>
                            </p>

                            {/* {
                                this.state.redirect === true ? null :
                                <span>Ընտրեք օրեր</span> 
                            } */}

                            <div ref={this.dayPicker} className='daypick-wrapper'>
                                <DayPicker
                                    className="Selectable"
                                    numberOfMonths={1}
                                    selectedDays={[from, { from, to }]}
                                    modifiers={modifiers}
                                    onDayClick={this.handleDayClick}
                                />

                                <div className='btns-wrapper'>
                                    {/* <button
                                        disabled={Boolean(from) !== true && Boolean(from) !== true ? true:false}
                                        className="link"
                                        onClick={this.handleResetClick}>

                                        Մաքրել
                                    </button> */}

                                    <button
                                        type='button'
                                        disabled={Boolean(from) !== true && Boolean(from) !== true ? true:false}
                                        onClick={this.apply_btn.bind(null, true)}>

                                        Հաստատել
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className='counter'>
                            {
                                this.state.delete_btn === false ? 
                                <button ref={this.delete_btn} onClick={this.counter.bind(null, '-')}>—</button>
                                : <button className='delete_btn' ref={this.delete_btn} onClick={this.delete}>×</button>
                            }
                            <h2>{this.state.product.count}</h2>
                            <button onClick={this.counter.bind(null, '+')}>+</button>
                        </div>
                    </div>
                    <div className='block'>
                        <h3 className='prise'>{this.state.product.total_prise} <span>դր</span></h3>
                    </div>
                </div>
            </div>
        )
    }
}



