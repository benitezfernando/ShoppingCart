import React from "react";

const Product = ({ product, carrito, addProduct, products }) => {
  const { name, price, id } = product;

  const selectProduc = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    addProduct([...carrito, product]);
  };

  const deleteProduct = (id) => {
    const products = carrito.filter((product) => product.id !== id);

    addProduct(products);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>

      {products ? (
        <button type="button" onClick={() => selectProduc(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => deleteProduct(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Product;
