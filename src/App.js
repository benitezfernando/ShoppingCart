import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {

  const [products, saveProducts] = useState([

    {id:1, name: 'Camisa ReactJS', price: 50},
    {id:2, name: 'Camisa VueJS', price: 40},
    {id:3, name: 'Camisa Node.js', price: 30},
    {id:4, name: 'Camisa Angular', price: 20},

  ]);


  const [ carrito, addProduct] = useState([]);




  return (
    <Fragment>
      <Header />

      <h1>Lista de Productos</h1>
      {products.map((product) => (
        <Product
          key={products.id}
          product={product}
          carrito={carrito}
          products={products}
          addProduct={addProduct}
        />
      ))}

      <Cart
        carrito={carrito}
        addProduct={addProduct}
      />

      <Footer />
    </Fragment>
  );
}

export default App;
