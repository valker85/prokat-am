import React from 'react';

// Components
import Path from '../components/other-components/path'


// Images
import Surface from '../assets/img/shopping-cart/surface.svg'
import Calendar from '../assets/img/shopping-cart/calendar.svg'



export default class ShoppingCart extends React.Component{


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
                                        <img src={Calendar} />
                                    </div>
                                </div>
                                <input placeholder='Առաքման հասցե*' />

                                <div>
                                    
                                </div>
                                <label>
                                    <input type='checkbox' />
                                    Առաքում և սպասարկում (վճարովի ծառայություն)
                                </label>

                                {/* <textarea placeholder='Այլ նշումներ'></textarea>

                                <div className='id_card'>
                                    <p><img src={Surface} alt='ico'/>Կցել անձնագիրը կամ ID քարտը*</p>
                                    <p>10 MB մաքս․</p>
                                </div>

                                <p>Հարգելի հաճախորդ, պատվերի նախնական գրանցումից հետո մեր օպերատորը կզանգահարի Ձեզ՝ պատվերի վերջնական հաստատման համար:</p> */}
                            </form>
                        </div>

                        <div className='block'>
                            <h1>Ձեր պատվերը</h1>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



