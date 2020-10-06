import React from 'react';
import './cart.css';
import Product from './Product'


const Cart = ({carrito, addProduct}) =>  ( 

    <div className='cart'>
        <h2>Tu carrito de compras</h2>


        {carrito.lenght === 0
        ? <p>No hay elementos en el carrito de compras</p>
    
        : carrito.map(product => (
            <Product
                key={product.id}
                product={product}
                carrito={carrito}
                addProduct={addProduct}
            
            />
        ))
        }
    </div>

 );

 
export default Cart;