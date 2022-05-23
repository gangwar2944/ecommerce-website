import React from 'react'
import "../css/style.css";
const CardDetail = () => {
  
    
    const ProductDetail = (props) => {
      return (
        <>
                     <tr>
                         <td><i class="far fa-times-circle"></i></td>
                         <td><img src={props.imgUrl} alt=""/></td>
                         <td>{props.proName}</td>
                         <td>{props.proPrice}</td>
                         <td><input type="number" value="1" className='proInput'/></td>
                         <td>{props.proPrice}</td>
                     </tr>
        </>
      )
    }
    
  return (
    <>
         <div class="card-detials">
                 <table>
                     <tr>
                        <th>remove</th>
                        <th>image</th>
                        <th>product</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>subtotal</th>
                     </tr>
                       <ProductDetail  imgUrl = "https://rukminim2.flixcart.com/image/800/960/kzllrbk0/t-shirt/b/6/d/l-bylrn-z31-blive-original-imagbkqgknxgmncw.jpeg?q=50"
                       proName ="silicon t-shirt"
                       proPrice = "198rs"/>
                       <ProductDetail  imgUrl = "https://rukminim2.flixcart.com/image/800/960/kzn17680/t-shirt/y/w/b/m-bblrn-z31-blive-original-imagbhywajhzhphz.jpeg?q=50"
                       proName ="cotton t-shirt"
                       proPrice = "258rs"/>
                       <ProductDetail  imgUrl ="https://rukminim2.flixcart.com/image/800/960/kzllrbk0/t-shirt/x/q/a/l-bmrrn-z31-blive-original-imagbkqg9phaz4f2.jpeg?q=50"
                       proName ="cool t-shirt"
                       proPrice = "299rs"/>
                
                 </table>
          </div>
    </>
  )
}

export default CardDetail;