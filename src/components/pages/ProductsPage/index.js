import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";

import Product from "../../Product";

const products = [
  { id:1, name: "Bolo de aniversário", icon: "🎂", price: 20.9 },
  { id:2, name: "Balão", icon: "🎈", price: 5.6 },
  { id:3, name: "Confete", icon: "🎉", price: 2.9 },
  { id:4, name: "Suco de caixinha", icon: "🧃", price: 1.9 },
  { id:5, name: "Doces diversos", icon: "🍬", price: 12.3 }
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const { cart} = useContext(CartContext);


  return (
    <div className="ProductsPage">
      <h1>Produtos disponíveis</h1>
      <p>Por questões de estoque, as compras estão limitadas a uma unidade por cpf.</p>
      {
        products.map(product => {
          return (
            <Product
              id={product.id}
              name={product.name}
              icon={product.icon}
              price={product.price}
              selected={cart.find(productOnCart => productOnCart.id === product.id)}
            />
          )
        })
      }
      <button onClick={() => navigate("/checkout")}>Fechar compra</button>
    </div>
  )
}