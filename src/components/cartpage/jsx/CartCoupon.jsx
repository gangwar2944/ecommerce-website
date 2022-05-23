import React from 'react'
import "../css/style.css";
const CartCoupon = () => {
  return (
    <>
         <div class="coupon-cart-total">
              <div class="coupon">
                <h1>apply coupon</h1>
                <div class="form">
                    <input type="text" placeholder="Enter your coupon"/>
                    <button class="signup-btn">apply</button>
                </div>
              </div>
              <div class="details">
                <h1>Coupon details</h1>
                <table>
                    <tr>
                        <td>card subtotal</td>
                        <td>199rs</td>
                    </tr>
                    <tr>
                        <td>shipping</td>
                        <td>free</td>
                    </tr>
                    <tr>
                        <td><strong>total</strong> </td>
                        <td><strong>199rs</strong> </td>
                     </tr>
                </table>
                <button class="btn-coup">Process to checkout</button>
        
              </div>
          </div>
    </>
  )
}

export default CartCoupon;