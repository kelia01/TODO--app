const Message = () => {
  const sampleItems = [
    { id: 1, name: "Apple iPhone 15" },
    { id: 2, name: "Samsung Galaxy S24" },
    { id: 3, name: 'MacBook Pro 16"' },
    { id: 4, name: "Dell XPS 13" },
    { id: 5, name: "AirPods Pro" },
    { id: 6, name: "Sony WH-1000XM5" },
  ];
 const cart = [];
const reducer = (state, action) => {
switch(action.type) {
  case 'Add':
    return [...cart, state.item];
  case 'Remove':
    const removeItem = (id) => {
      let isFound = cart.find(item => item.id === id);
      cart.filter(item => item !== isFound)
  case 'Clear':
    cart=[]
  default:
    cart
    }
    }
}


const addItem = () => {
  
  }

  const removeItem = () => {
  }

  const clearCart = () => {
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {/* Available Items */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            Available Items
          </h2>
          <div className="space-y-2">
            {sampleItems.map((item) => {
              const isInCart = cart.some((cartItem) => cartItem.id === item.id);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-white rounded border"
                >
                  <span className="text-gray-800">{item.name}</span>
                  <button
                    onClick={() => addItem(item)}
                    disabled={isInCart}
                    className={`px-4 py-2 rounded font-medium transition-colors ${
                      isInCart
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isInCart ? "In Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-green-800">
              Shopping Cart ({cart.length} items)
            </h2>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-green-600 text-lg">Your cart is empty</p>
              <p className="text-green-500 text-sm mt-2">
                Add some items to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-white rounded border"
                >
                  <span className="text-gray-800">{item.name}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Cart Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white rounded">
            <div className="text-2xl font-bold text-blue-600">
              {cart.length}
            </div>
            <div className="text-gray-600">Total Items</div>
          </div>
          <div className="p-4 bg-white rounded">
            <div className="text-2xl font-bold text-green-600">
              {cart.length > 0 ? "Ready" : "Empty"}
            </div>
            <div className="text-gray-600">Cart Status</div>
          </div>
          <div className="p-4 bg-white rounded">
            <div className="text-2xl font-bold text-purple-600">
              {sampleItems.length - cart.length}
            </div>
            <div className="text-gray-600">Available Items</div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Message;