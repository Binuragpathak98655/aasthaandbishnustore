export default function Cart({ cart, isOpen, onClose, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className={`cart-modal${isOpen ? ' active' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cart-modal-content">
        <div className="cart-modal-header">
          <h2>Your Cart</h2>
          <button onClick={onClose}><i className="fas fa-times"></i></button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <span>${item.price.toFixed(2)} x {item.qty}</span>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(item.id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-total">
          <strong>Total:</strong> <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
