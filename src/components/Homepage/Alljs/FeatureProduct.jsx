const FeatureProduct = () => {
    const SingleProduct = (props) => {
        return (
            <>

                <div class="product">
                    <div class="pro-img">
                        <img src={props.imgUrl}
                            alt="product img" />
                    </div>
                    <div class="dis">
                        <p>adidas</p>
                        <h4>cartoon astronauts T-shirts</h4>
                        <div class="price-rating">
                            <div class="price-rating-main">
                                <span class="ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                <span class="price">$78</span>
                            </div>
                            <div class="cart flex"><i class="fa-solid fa-cart-plus"></i></div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <>
            <section class="feature-products">
                <div class="feature-headings">
                    <h1>Featured products</h1>
                    <p>summer collection new modern design</p>
                </div>
                <div class="product-dis flex">
                     <SingleProduct imgUrl="https://i.pinimg.com/236x/f6/40/4d/f6404dec224cf5781441b41e89bfcee8.jpg"/>
                     <SingleProduct imgUrl="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                     <SingleProduct imgUrl="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                     <SingleProduct imgUrl="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                     <SingleProduct imgUrl="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                     <SingleProduct imgUrl="https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                     <SingleProduct imgUrl="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                     <SingleProduct imgUrl="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                 </div>
        </section>
     </>
    )
}

export default FeatureProduct;