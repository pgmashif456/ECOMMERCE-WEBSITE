 import "./cart.css";
 import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../features/cart/cartSlice";
import "./cart.css";

function Cart() {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const items = cartState?.items || [];

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">Cart</h1>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-grid">
            {items.map((item) => (
              <div className="cart-card" key={item.id}>
                <div className="cart-image-box">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />
                </div>

                <div className="cart-info">
                  <h3 className="cart-product-name">{item.name}</h3>
                  <p className="cart-category">{item.category}</p>
                  <p className="cart-price">₹{item.price}</p>

                  <div className="cart-controls">
                    <label>Qty:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Number(e.target.value),
                          })
                        )
                      }
                      className="qty-input"
                    />
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ₹{total}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;