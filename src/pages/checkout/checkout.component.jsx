import React from 'react'
import "./checkout.styles.scss"
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCartItems,selectCartTotal}from "../../redux/cart/cart.selectors"





 const  checkoutPage = ({cartItems,total}) => {
     console.log(total);

    
     

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
          
            </div>

            {cartItems.length? cartItems.map(cartItem=>cartItem.name):null}
            <div className="total">{total} $</div>
        </div>
    )
}

const mapStateToProps= createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

const mapDispatchToProps= ()=>({})



export default connect(mapStateToProps,mapDispatchToProps)(checkoutPage)