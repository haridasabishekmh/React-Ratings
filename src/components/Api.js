import React, { Component } from 'react'
import './Api.css'
import ProductData from './ProductData';
import StarRating from './StarRating';

export default class Api extends Component {
    state={
        dataResponse:null,
        Loading:true
    }

    async componentDidMount(){
        var url="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
        var response=await fetch(url); 
        var productData=await response.json();
        this.setState({dataResponse:productData,
            Loading:false})
        console.log(productData)
    }
    render() {
        return (
        <div className='products'>
           {this.state.Loading===false?this.state.dataResponse.slice(0,12).map((product,index)=>{
            return(
                <div className='product'>
                    <div id='product'>
                        <ProductData product={product} key={product.id}/>
                        <StarRating id='StarRating'/>
                    </div>
                </div>
            )
           }):null} 
        </div>
        )
    }
}
