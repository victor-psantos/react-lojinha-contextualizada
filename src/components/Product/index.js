import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';

import './Product.css';

export default function Product(props) {
    const { id, name, icon, price, selected } = props;
    const adjustedPrice = price.toFixed(2).toString().replace(".", ",");    

    const { cart, setCart } = useContext(CartContext);

    function addProductOnCart() {
        if (cart.find(productOnCart => id === productOnCart.id)) {
          const newProductList = removeProductFromCart();
          setCart(newProductList);
        } else {
          setCart([...cart, props]);
        }
      }
    
      function removeProductFromCart() {
        return cart.filter(productOnCart => id !== productOnCart.id);
      }   

  
    return (
      <div className={selected ? "Product selected" : "Product"} onClick={addProductOnCart}>
        {icon} {name} - R$ {adjustedPrice}
      </div>
    );
  }