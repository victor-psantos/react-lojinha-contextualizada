import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  function getTotalFromProducts() {
    return cart.reduce((acc, current) => {
      return acc += current.price;
    }, 0)
  }

  return (
    <div className="CheckoutPage">
      <h1>Produtos Selecionados</h1>
      {/* TODO: aqui vão os produtos selcionados na tela de produtos */}
      <div className="register">
        <b>Total da compra:</b> R$ <span>{getTotalFromProducts().toFixed(2)}</span>
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  )
}