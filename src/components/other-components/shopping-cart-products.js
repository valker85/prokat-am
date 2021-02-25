import React from 'react';


export default class Terms extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            product:{},
            delete_btn: false
        }


        this.delete_btn = React.createRef()
    }



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

        this.props.update(product)
    }

    delete = () => {
        this.props.deleteProduct(this.state.product)
    }

    componentDidMount(){
        let dlt = this.props.prod.count === 1 ? true : false
        setTimeout(() => {
            this.setState({
                product: this.props.prod,
                delete_btn: dlt
            })
        })
    }

    componentDidUpdate(){
        // console.log(this.state.product)
    }

    render(){


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
                        <p>{`${this.state.product.from} - ${this.state.product.to}`}</p>
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



